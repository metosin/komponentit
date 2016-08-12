(ns komponentit.autocomplete
  (:require-macros komponentit.autocomplete)
  (:require [reagent.core :as r]
            [reagent.ratom :refer-macros [run! reaction]]
            [komponentit.util :as util]
            [komponentit.mixins :as mixins]
            [komponentit.highlight :refer [highlight-string]]
            [clojure.string :as string]
            [goog.dom :as dom]
            [goog.dom.classes :as classes]
            [goog.style :refer [scrollIntoContainerView]]
            [komponentit.autosize :as autosize]))

(def +create-item-index+ -1)

(defn query-match? [term-match-fn item query]
  (every? (partial term-match-fn item) query))

(defn sub-query-match? [term-match-fn item query]
  (let [m (group-by #(boolean (term-match-fn item %)) query)]
    [(get m true) (get m false)]))

(defn default->query [search]
  (some-> search
    (.toLowerCase)
    (.split #" ")
    (->> (remove empty?))
    vec))

(defn find-by-selection [{:keys [item->items] :as opts} results selected-index]
  (some (fn [item]
          (if (= (::i item) selected-index)
            item
            (if item->items
              (if-let [subitems (item->items item)]
                (find-by-selection opts subitems selected-index)))))
        results))

(defn create-matcher*
  "Fields can be either collection containing multiple key for map,
   or a single key.
   If collection is given, returned function will go through keys using some."
  [fields]
  (if (sequential? fields)
    (fn [item term]
      (some (fn [field]
              (some-> item (get field) (-> (.toLowerCase) (.indexOf term) (not= -1))))
            fields))
    (fn [item term]
      (some-> item (get fields) (-> (.toLowerCase) (.indexOf term) (not= -1))))))

(declare filter-results)

(defn close [this]
  (r/set-state this {:open? false}))

(defn open [this text]
  (r/set-state this {:open? true :initial-search (if-not (string/blank? text) text)}))

(defn update-search [this v {:keys [->query debounce-timeout] :as opts}]
  (r/set-state this {:search v :query (->query v)})
  (if debounce-timeout
    (let [timeout (:timeout (r/state this))]
      (swap! timeout (fn [current]
                       (if current
                         (js/clearTimeout current))
                       (js/setTimeout (fn [_]
                                        (r/set-state this (filter-results this opts)))
                                      debounce-timeout))))
    (r/set-state this (filter-results this opts))))

(defn reset-search [this opts]
  (r/set-state this {:search nil :query nil})
  (r/set-state this (filter-results this opts)))

(defn blur [this opts e]
  ;; Check relatedTarget to see  if focus moved out of the browser
  ;; this way the dropbox is kept open when changing focus to other window
  ;; FIXME: Doesn't work on Firefox
  ;; FIXME: Also breaks everything if called each time, because ?!??!?!?
  (when (.-relatedTarget e)
    (close this)
    (reset-search this opts))
  nil)

(defn click [this e]
  (.focus (aget (.getElementsByClassName (r/dom-node this) "autocomplete__input") 0))
  nil)

(defn focus [this search text e]
  (if-not (:open? (r/state this))
    (r/set-state this {:search ""}))
  (open this text)
  nil)

(defn change [this cb opts e]
  (let [{:keys [initial-search]} (r/state this)
        v (.. e -target -value)]
    ;; If item is selected, search can't be changed until item is cleared with backspace
    (when-not initial-search
      (update-search this v opts)
      (if cb (cb v))))
  nil)

(defn limit-selection [n selected f search {:keys [create]}]
  (util/limit (if (and create (seq search)) +create-item-index+ 0) n (f selected)))

(defn key-down [this text {:keys [cb create-cb remove-cb select-cb] :as opts} e]
  (let [{:keys [search results selected n open?]} (r/state this)
        update-selection (fn [f e]
                           (.preventDefault e)
                           (.stopPropagation e)
                           (r/set-state this {:selected (limit-selection n (:selected (r/state this)) f search opts)}))
        _ (if-not open?
            (open this text))
        ;; Hack: get new inital-search
        {:keys [initial-search]} (r/state this)]

    (case (.-key e)
      "Enter" (do
                (.preventDefault e)
                (.stopPropagation e)
                (if (and create-cb (= +create-item-index+ selected))
                  (create-cb search)
                  (when-let [v (find-by-selection opts results selected)]
                    (select-cb v))))
      "Escape" (r/set-state this {:open? false :search nil})
      "Backspace" (cond
                    remove-cb (remove-cb (last (:value opts)))
                    initial-search (do
                                     (r/set-state this {:initial-search nil :search ""})
                                     (cb nil)
                                     ;; prevent on-change event after this
                                     (.preventDefault e)
                                     (.stopPropagation e)))
      "ArrowUp" (update-selection dec e)
      "ArrowDown" (update-selection inc e)
      nil)))

(defn prepare-items [items {:keys [prepare-xform] :as opts}]
  ;; FIXME: remove map-to-seq
  ;; FIXME: not used with sub-items, doesn't matter because this doesn't do anything useful
  (let [map-to-seq
        (if (map? items)
          (map (fn [v] {:key   (key v)
                        :value (val v)}))
          identity)

        prepare-xform (or prepare-xform identity)]
    (into [] (comp map-to-seq prepare-xform) items)))

(defn filter-results'
  [n search? level prepared-items query selected
   {:keys [value term-match-fn multiple? filter-current-out?
           item->text item->value item->key item->items
           min-search-length max-results]
    :as opts}]
  (let [filter-subitems
        (if item->items
          (map (fn [item]
                 (if-let [subitems (item->items item)]
                   ;; Check for partial (or full) match and filter subitems with remaining query terms.
                   (let [[matched not-matched] (if (and search? term-match-fn query)
                                                 (sub-query-match? term-match-fn item query)
                                                 [nil query])
                         match? (boolean (seq matched))
                         ;; Add indeces here, so top level items have the smaller index than sub items.
                         ;; Reserve index for this item
                         this-i (swap! n inc)
                         filtered-sub-items (filter-results' n search? (inc level) subitems not-matched selected opts)
                         ;; If this item is filtered out because of no items, release the index
                         this-i (if (seq filtered-sub-items)
                                  this-i
                                  (do
                                    (swap! n dec)
                                    nil))]
                     (assoc item
                            ::match? match?
                            ::i this-i
                            ;; FIXME: item->items must be key currently
                            item->items filtered-sub-items))
                   item)))
          identity)

        filter-search
        (if (and search? term-match-fn query)
          (if item->items
            ;; If item has subitems, show if subitems matched the search
            (filter (fn [item] (or (::match? item)
                                   (seq (item->items item))
                                   (query-match? term-match-fn item query))))
            (filter (fn [item] (query-match? term-match-fn item query))))
          identity)

        filter-current
        (if filter-current-out?
          (let [value-set (set value)]
            (remove (if multiple?
                      (fn [item] (value-set (item->value item)))
                      (fn [item] (= (item->value item) value)))))
          identity)

        limit (if max-results
                (take max-results)
                identity)

        add-index
        (map (fn [v]
               ;; subitem filter adds some indeces, don't overwrite them
               (if (::i v)
                 (assoc v
                        ::level level)
                 (assoc v
                        ::i (swap! n inc)
                        ::level level))))

        add-highlighted-str
        (if (and search? (seq query))
          (map (fn [v] (assoc v ::text (highlight-string (item->text v) query (fn [x] [:span.autocomplete__highlight x])))))
          identity)]

    (into [] (comp filter-subitems filter-search filter-current limit add-index add-highlighted-str) prepared-items)))

(defn filter-results-top
  [prepared-items query selected
   {:keys [value term-match-fn multiple? filter-current-out?
           item->text item->value item->key
           min-search-length max-results]
    :as opts}]
  (let [n (atom -1)
        search? (or (and min-search-length (>= (count (apply str query)) min-search-length))
                    (not min-search-length))

        results (filter-results' n search? 1 prepared-items query selected opts)]
    {:n @n
     :selected (limit-selection @n selected identity query opts)
     :results results}))

(defn filter-results [this opts]
  (let [{:keys [prepared-items query selected]} (r/state this)]
    (filter-results-top prepared-items query selected opts)))

(declare autocomplete-contents-list)

(defn choice-item [{:keys [item selected opts cb]}]
  (let [{:keys [item->key item->text value item->value item->items]} opts]
    [:div
     [:div.autocomplete__item
      {:key (item->key item)
       :on-click (fn [_]
                   (cb item)
                   nil)
       :class (str (cond
                     (= (::i item) selected) "autocomplete__item--selected"
                     (= value (item->value item)) "autocomplete__item--active"))}
      [:div
       {:class (if-let [level (::level item)] (str "autocomplete__level-" level " "))}
       (or (::text item) (item->text item))]]

     (if item->items
       (if-let [subitems (item->items item)]
         [autocomplete-contents-list subitems selected opts]))]))

(defn select-scroll-wrapper [el]
  (loop [el (.-parentElement el)]
    (if el
      ;; NOTE: This element must only have this class, or this check will break
      (if (= "autocomplete__dropdown-content" (.-className el))
        el
        (recur (.-parentElement el))))))

(defn scroll-into-selected [this]
  (let [{:keys [item selected]} (r/props this)]
    (if (= (::i item) selected)
      (scrollIntoContainerView (.getElementsByClassName (r/dom-node this) "autocomplete__item")
                               (select-scroll-wrapper (r/dom-node this)) true))))

(defn choice-item-wrapper [_]
  (r/create-class
    {:component-did-mount scroll-into-selected
     :component-did-update scroll-into-selected
     :render
     (fn [this]
       [choice-item (r/props this)])}))

(def ^:private defaults
  {:value->text get
   :item->key :key
   :item->text :value
   :value->search identity
   :->query default->query
   :no-results-text "No results"})

(def ^:private multiple-defaults
  (assoc defaults
         :multiple? true
         :item-removable? (constantly true)))

(defn- find-container [el]
  (loop [el el]
    (if el
      ; FIXME:
      (if (classes/has el "scroll")
        (let [rect (.getBoundingClientRect el)]
          {:top (.-top rect) :bottom (.-bottom rect)})
        (recur (.-offsetParent el)))
      ; FIXME: Is this window height or content height? Does this work correctly with non absolute positioned page?
      {:top 0 :bottom (.-innerHeight js/window)})))

(defn create-new-item [search selected {:keys [create-cb] :as opts}]
  (if (and create-cb (seq search))
    [choice-item-wrapper
     {:item {::i +create-item-index+
             ::text (str "Add " search "...")}
      :cb (fn [_] (create-cb search))
      :selected selected
      :opts opts}]))

(defn autocomplete-contents-list
  [results selected {:keys [item->key] :as opts}]
  [:div
   (for [item results]
     ^{:key (item->key item)}
     [choice-item-wrapper
      {:item item
       :selected selected
       :cb (:select-cb opts)
       :opts opts}])])

(defn autocomplete-contents-top
  [results selected {:keys [create no-results-text] :as opts}]
  (if (seq results)
    [autocomplete-contents-list results selected opts]
    (if-not create
      [:div.autocomplete__no-results no-results-text])))

(defn autocomplete-contents-wrapper [_ container-state _ _ _ _]
  (let [top? (r/atom false)]
    (r/create-class
      {:component-did-mount
       (fn [this]
         (let [el (r/dom-node this)
               rect (.getBoundingClientRect el)
               height (.-offsetHeight el)
               top (.-top rect)
               container (find-container el)]
           (reset! top? (and (> (+ top height) (:bottom container))
                             (> (- top (:height container-state) height) (:top container))))))
       :reagent-render
       (fn [results container-state selected search {:keys [create multiple? groups item->key no-results-text select-cb] :as opts}]
         [:div.autocomplete__dropdown
          {:class (str (if @top? "autocomplete__dropdown--above "))
           :style (if @top? {:bottom (str (:height container-state) "px")})}
          [:div.autocomplete__dropdown-content
           [create-new-item search selected opts]
           [autocomplete-contents-top results selected opts]]])})))

(defn update-el-dimensions
  "Save the container dimensions to component state.
  Container contains the input and dropdown."
  [this]
  ; FIXME: Is is this useful as this contains the input? Would only the dropdown container
  ; be better?
  (let [el (r/dom-node this)]
    (r/set-state this {:width (.-offsetWidth el) :height (.-offsetHeight el)})))

(defn focus-input
  "Focus the input element if autocomplete is open."
  [this]
  (if (:open? (r/state this))
    (some-> this r/dom-node (.getElementsByTagName "input") (.item 0) (.focus))))

(defn- initial-state [{:keys [items] :as opts} defaults this]
  (let [prepared-items (prepare-items items opts)]
    (merge
      {:open? false
       :search nil
       :query nil
       :selected 0
       :items items
       ; FIXME: Default opts. Uses only prepare-xform option.
       :prepared-items prepared-items
       :width nil
       :height nil
       :closable nil
       :timeout (atom nil)}
      ; FIXME: Default opts.
      (filter-results-top prepared-items nil 0 (merge defaults opts)))))

(defn- will-receive-props [this [_ {:keys [items] :as opts}]]
  ;; When items changes, reset the results
  (when-not (= (:items (r/props this)) items)
    (r/set-state this {:items items})
    (r/set-state this {:prepared-items (prepare-items items opts)})
    (reset-search this opts)))

(defn- will-unmount [this]
  (if-let [closable (:closable (r/state this))]
    (closable)))

(defn- did-update [this old-argv]
  (update-el-dimensions this)
  (focus-input this))

(defn- did-mount [opts this]
  (r/set-state this {:closable (mixins/create-closable (fn [e]
                                                         ;; Only close if the clicked element was outside this autocomplete el
                                                         (when-not (dom/contains (r/dom-node this) (.-target e))
                                                           (close this)
                                                           (reset-search this opts))))})
  (update-el-dimensions this)
  (focus-input this))

(defn- build-options [opts defaults this]
  (let [;; Static defaults
        {:keys [item->key search-fields create cb] :as opts}
        (merge defaults opts)

        _ (assert (ifn? (:cb opts)) "Callback function is required")

        ;; Dynamic defaults based on other options
        opts (merge {:item->value item->key
                     :term-match-fn (if (:search-fields opts) (create-matcher* (:search-fields opts)))}
                    opts)

        opts (assoc opts
                    :create-cb (if-let [create (:create opts)]
                              (fn [s]
                                (create s)
                                (r/set-state this {:search nil :open? false})))
                    :select-cb (fn [v]
                                 ((:cb opts) v)
                                 (r/set-state this {:search "" :open? false})))]
    opts))

(defn autocomplete-input [opts text this]
  (let [{:keys [placeholder disabled? on-blur]} opts
        {:keys [open? search initial-search]} (r/state this)]
    [autosize/autosize
     {:input-class "autocomplete__input"
      :on-focus  (partial focus this search text)
      :on-blur   (fn [e]
                   (blur this opts e)
                   (if on-blur (on-blur e)))
      :on-change (partial change this nil opts)
      :on-key-down (partial key-down this text opts)
      :auto-complete false
      :disabled disabled?
      :type "text"
      :placeholder placeholder
      ; :on-click (partial click this disabled? text)
      :value (if open?
               (if initial-search
                 (str initial-search)
                 (str search))
               text)}]))

(defn selected-items [opts this]
  (let [{:keys [value item-removable? remove-cb value->text]} opts
        {:keys [items]} (r/state this)]
    [:div.autocomplete__selected-items
     (for [x value]
       (let [removable? (item-removable? x)]
         ^{:key x}
         [:div.autocomplete__selected-item
          [:span.autocomplete__item-text (value->text items x)]
          (if removable?
            [:a.autocomplete__remove-item-button
             {:on-click (fn [e]
                          (remove-cb x)
                          nil)}
             "×"])]))]))

(defn autocomplete-clear [{:keys [value select-cb remove-cb]}]
  (if (if (coll? value)
        (seq value)
        value)
    [:span.autocomplete__clear-button
     {:on-click (fn [_]
                  (if remove-cb
                    (doseq [v value]
                      (remove-cb v))
                    (select-cb nil)))}]))

(defn autocomplete
  ":value - (required) IDeref or value
   :cb - (required) Function. [value]
   :on-blur - Input :on-blur. Might be useful for form pristine handling.
   :items
   :max-results
   :value->search
   :value->text
   :item->key
   :item->value
   :item-removable? - predicate function to determine if item is non-removable
   :term-match-fn
   :search-fields
   :min-search-length - Required number of characters in search string before results are filtered.
   :->query
   :groups
   :filter-current-out?
   :debounce-timeout

   Localization
   :placeholder
   :no-results-text

   Style
   :ctrl-class
   :disabled?"
  [opts]
  (r/create-class
    {:get-initial-state (partial initial-state opts defaults)
     :component-will-receive-props will-receive-props
     :component-will-unmount will-unmount
     :component-did-update did-update
     :component-did-mount (partial did-mount opts)

     :render
     (fn [this]
       (let [opts (r/props this)
             {:keys [items open? results search selected n width height]} (r/state this)
             {:keys [value cb value->text item->key item->value groups ctrl-class disabled?] :as opts} (build-options opts defaults this)
             text (value->text items value)]

         [:div.autocomplete.autocomplete--single
          {:class ctrl-class}
          [:div.autocomplete__control
           {:class (if open? "autocomplete__control--open")
            :on-click (partial click this)}
           [autocomplete-input opts text this]
           [autocomplete-clear opts]]
          (if open?
            [autocomplete-contents-wrapper results {:width width :height height} selected search opts])]))}))

(defn multiple-autocomplete
  ":value - (required) IDeref or value
   :cb - (required) Function. [value]
   :remove-cb - For multiple?
   :on-blur - Input :on-blur. Might be useful for form pristine handling.
   :items
   :max-results
   :value->search
   :value->text
   :item->key
   :item->value
   :item-removable? - predicate function to determine if item is non-removable
   :term-match-fn
   :search-fields
   :min-search-length - Required number of characters in search string before results are filtered.
   :->query
   :groups
   :filter-current-out?
   :debounce-timeout

   Localization
   :placeholder
   :no-results-text

   Style
   :ctrl-class
   :disabled?"
  [opts]
  (r/create-class
    {:get-initial-state (partial initial-state opts multiple-defaults)
     :component-will-receive-props will-receive-props
     :component-will-unmount will-unmount
     :component-did-update did-update
     :component-did-mount (partial did-mount opts)

     :render
     (fn [this]
       (let [opts (r/props this)
             {:keys [open? results search selected n width height]} (r/state this)
             {:keys [value cb item->key item->value groups ctrl-class disabled?] :as opts} (build-options opts multiple-defaults this)
             text ""]

         [:div.autocomplete
          {:class ctrl-class}
          [:div.autocomplete__control
           {:class (if open? "autocomplete__control--open")
            :on-click (partial click this)}
           [selected-items opts this]
           [autocomplete-input opts text this]
           [autocomplete-clear opts]]
          (if open?
            [autocomplete-contents-top results {:width width :height height} selected search opts])]))}))
