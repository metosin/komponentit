(ns komponentit.autocomplete
  (:require-macros komponentit.autocomplete)
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [komponentit.util :as util]
            [komponentit.mixins :as mixins]
            [komponentit.highlight :refer [highlight-string]]
            [clojure.string :as string]
            [goog.dom :as dom]
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

(defn find-by-selection [results selected-index]
  (some (fn [item]
          ;; FIXME:
          (if (= (::i item) selected-index)
            item))
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

(declare filter-results reset-search prepare-items)

(defn close [this opts]
  (r/set-state this {:open? false})
  (reset-search this opts))

(defn open [this text]
  (if-not (:open? (r/state this))
    (r/set-state this {:open? true :initial-search (if-not (string/blank? text) text)})))

(defn update-search [this v {:keys [->query debounce-timeout items get-items] :as opts}]
  (r/set-state this {:search v :query (->query v)})
  (if debounce-timeout
    (let [timeout (:timeout (r/state this))]
      (swap! timeout (fn [current]
                       (if current
                         (js/clearTimeout current))
                       (js/setTimeout (fn [_]
                                        (if items
                                          (r/set-state this (filter-results this opts))
                                          (get-items (:query (r/state this))
                                                     (fn [new-items]
                                                       (r/set-state this {:prepared-items (prepare-items new-items opts)})
                                                       (r/set-state this (filter-results this opts))))))
                                      debounce-timeout))))
    (if items
      (r/set-state this (filter-results this opts))
      (get-items (:query (r/state this))
                 (fn [new-items]
                   (r/set-state this {:prepared-items (prepare-items new-items opts)})
                   (r/set-state this (filter-results this opts)))))))

(defn reset-search [this {:keys [items get-items] :as opts}]
  (r/set-state this {:search nil :query nil})
  (if items
    (r/set-state this (filter-results this opts))
    (get-items nil (fn [new-items]
                     (r/set-state this {:prepared-items (prepare-items new-items opts)})
                     (r/set-state this (filter-results this opts))))))

(defn blur [this opts e]
  ;; Check relatedTarget to see  if focus moved out of the browser
  ;; this way the dropbox is kept open when changing focus to other window
  ;; FIXME: Doesn't work on Firefox
  ;; FIXME: Also breaks everything if called each time, because ?!??!?!?
  (when (.-relatedTarget e)
    (close this opts))
  nil)

(defn click [this e]
  (.focus (aget (.getElementsByClassName (rdom/dom-node this) "autocomplete__input") 0))
  nil)

(defn focus [this search text e]
  (if-not (:open? (r/state this))
    (r/set-state this {:search ""}))
  (open this text)
  ;; FIXME: Move cursor to the end of input, if there is selected value
  nil)

(defn call-on-change [this opts e]
  (let [{:keys [initial-search]} (r/state this)
        v (.. e -target -value)]
    ;; If item is selected, search can't be changed until item is cleared with backspace
    (when-not initial-search
      (update-search this v opts))))

(defn select-value [{:keys [on-change] :as opts} this v]
  (if on-change
    (on-change v))
  (r/set-state this {:initial-search nil :search "" :open? false}))

(defn call-on-remove [{:keys [on-remove] :as opts} this v]
  (if on-remove
    (on-remove v))
  (r/set-state this {:search "" :open? false}))

(defn call-on-create [{:keys [on-create] :as opts} this s]
  (when on-create
    (on-create s)
    (r/set-state this {:search nil :open? false})))

(defn limit-selection [n selected f search {:keys [on-create]}]
  (util/limit (if (and on-create (seq search))
                +create-item-index+ 0)
              n
              (f selected)))

(defn update-selection [this f opts e]
  (.preventDefault e)
  (.stopPropagation e)
  (let [{:keys [selected search n search]} (r/state this)]
    (r/set-state this {:selected (limit-selection n selected f search opts)})))

(defn handle-enter [this opts e]
  (.preventDefault e)
  (.stopPropagation e)
  (let [{:keys [results selected search]} (r/state this)]
    (if (= +create-item-index+ selected)
      (call-on-create opts this search)
      (when-let [v (find-by-selection results selected)]
        (select-value opts this v)))))

(defn call-clear [{:keys [on-change value] :as opts} this]
  (if (:on-remove opts)
    ;; FIXME: if over 8 values, value is no longer sorted?
    (call-on-remove opts this (last value))
    (do (if on-change
          (on-change nil))
        (r/set-state this {:initial-search nil :search "" :open? true}))))

(defn handle-backspace [this {:keys [on-change] :as opts} e]
  (let [{:keys [initial-search search]} (r/state this)]
    (cond
      (seq search) nil
      ;; FIXME: last? only for multiple select.
      ;; FIXME: if over 8 values, value is no longer sorted?
      (:on-remove opts) (call-on-remove opts this (last (:value opts)))
      initial-search (do
                       (r/set-state this {:initial-search nil :search ""})
                       (if on-change
                         (on-change nil))
                       ;; prevent on-change event after this
                       (.preventDefault e)
                       (.stopPropagation e)))))

(defn key-down [this text opts e]
  (open this text)
  (case (.-key e)
    "Enter"     (handle-enter this opts e)
    "Escape"    (close this opts)
    "Backspace" (handle-backspace this opts e)
    "ArrowUp"   (update-selection this dec opts e)
    "ArrowDown" (update-selection this inc opts e)
    nil))

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
          (mapcat
            (fn [item]
              (if-let [subitems (item->items item)]
                ;; Check for partial (or full) match and filter subitems with remaining query terms.
                (let [[matched not-matched] (if (and search? term-match-fn query)
                                              (sub-query-match? term-match-fn item query)
                                              [nil query])
                      match? (boolean (seq matched))
                      ;; Add indeces here, so top level items have the smaller index than sub items.
                      ;; Reserve index for this item
                      this-i (if (:selectable? item true)
                               (swap! n inc))
                      filtered-sub-items (filter-results' n search? (inc level) subitems not-matched selected opts)
                      ;; If this item is filtered out because of no items, release the index
                      this-i (if (:selectable? item true)
                               (if (seq filtered-sub-items)
                                 this-i
                                 (do
                                   (swap! n dec)
                                   nil)))]
                  (cons (assoc item
                               ::full-match? (not not-matched)
                               ::sub-items-match? (seq filtered-sub-items)
                               ::i this-i)
                        filtered-sub-items))
                [item])))
          identity)

        filter-search
        (if (and search? term-match-fn query)
          (if item->items
            ;; If item has subitems, show if subitems matched the search
            (filter (fn [item] (or (::full-match? item)
                                   (::sub-items-match? item)
                                   ;; FIXME: Require for leaf nodes - unncesessary check for other nodes
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
               (cond-> v
                 (and (not (::i v)) (:selectable? v true)) (assoc ::i (swap! n inc))
                 (not (::level v)) (assoc ::level level))))

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

(defn choice-item-wrapper [_]
  (let [choice-item-el (atom nil)
        choice-item-el-ref #(reset! choice-item-el %)]
    (r/create-class
      {:display-name "komponentit.autocomplete.choice_item_wrapper_class"
       :component-did-mount
       (fn scroll-into-selected [this]
         (let [{:keys [item selected scroll-wrapper-el]} (r/props this)]
           (when (= (::i item) selected)
             (and @scroll-wrapper-el (scrollIntoContainerView @choice-item-el @scroll-wrapper-el true)))))
       :component-did-update
       (fn scroll-into-selected [this]
         (let [{:keys [item selected scroll-wrapper-el]} (r/props this)]
           (when (= (::i item) selected)
             (and @scroll-wrapper-el (scrollIntoContainerView @choice-item-el @scroll-wrapper-el true)))))
       :reagent-render
       (fn choice-item-render [{:keys [item selected opts cb scroll-wrapper-el]}]
         (let [{:keys [item->key item->text value item->value item->items]} opts]
           [:div
            [:div.autocomplete__item
             {:key (item->key item)
              :on-click (fn [_]
                          (if cb (cb item))
                          nil)
              :class (str (:class item) " "
                          (cond
                            (= (::i item) selected) "autocomplete__item--selected"
                            (= value (item->value item)) "autocomplete__item--active"))
              :ref choice-item-el-ref}
             [:div
              {:class (if-let [level (::level item)] (str "autocomplete__level-" level " "))}
              (or (::text item) (item->text item))]]]))})))

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

(defn- find-container [el p?]
  (loop [el el]
    (if el
      (if (p? el)
        (let [rect (.getBoundingClientRect el)]
          {:top (.-top rect)
           :bottom (.-bottom rect)
           :left (.-left rect)
           :right (.-right rect)})
        (recur (.-offsetParent el)))
      ; FIXME: Is this window height or content height? Does this work correctly with non absolute positioned page?
      {:top 0
       :right (.-innerWidth js/window)
       :bottom (.-innerHeight js/window)
       :left 0})))

(defn create-new-item [search selected scroll-wrapper-el {:keys [on-create] :as opts}]
  (if (and on-create (seq search))
    [choice-item-wrapper
     {:item {::i +create-item-index+
             ::text (str "Add " search "...")}
      :cb (fn [_] (on-create search))
      :selected selected
      :opts opts
      :scroll-wrapper-el scroll-wrapper-el}]))

(defn autocomplete-contents-list
  [this results selected scroll-wrapper-el {:keys [item->key] :as opts}]
  [:div
   (for [item results]
     ^{:key (item->key item)}
     [choice-item-wrapper
      {:item item
       :selected selected
       :cb #(select-value opts this item)
       :opts opts
       :scroll-wrapper-el scroll-wrapper-el}])])

(defn autocomplete-contents-top
  [this results selected scroll-wrapper-el {:keys [on-create no-results-text] :as opts}]
  (if (seq results)
    [autocomplete-contents-list this results selected scroll-wrapper-el opts]
    (if-not on-create
      [:div.autocomplete__no-results no-results-text])))

(defn autocomplete-contents-wrapper [parent _ container-state _ _ _ _]
  (let [top? (r/atom false)
        right? (r/atom false)
        scroll-wrapper-el (atom nil)
        scroll-wrapper-el-ref #(reset! scroll-wrapper-el %)]
    (r/create-class
      {:display-name "komponentit.autocomplete.autocomplete_contents_wrapper_class"
       :component-did-mount
       (fn [this]
         (let [el (rdom/dom-node this)
               rect (.getBoundingClientRect el)
               height (.-offsetHeight el)
               top (.-top rect)
               y-container (find-container el (fn [el]
                                                (let [style (js/window.getComputedStyle el)]
                                                  (#{"scroll" "hidden"} (or (.getPropertyValue style "overflow-y")
                                                                            (.getPropertyValue style "overflow"))))))

               left (.-left rect)
               width (.-offsetWidth el)
               x-container (find-container el (fn [el]
                                                (let [style (js/window.getComputedStyle el)]
                                                  (#{"scroll" "hidden"} (or (.getPropertyValue style "overflow-x")
                                                                            (.getPropertyValue style "overflow"))))))]
           (reset! top? (and (> (+ top height) (:bottom y-container))
                             (> (- top (:width container-state) height) (:top y-container))))
           (reset! right? (and (< (+ left width) (:right x-container))
                               (> (- left (:width container-state) height) (:left x-container))))))
       :reagent-render
       (fn [this results container-state selected search {:keys [on-create multiple? groups item->key no-results-text] :as opts}]
         [mixins/window-event-listener
          {:on-click (fn [e]
                       (when (not (dom/contains (rdom/dom-node parent) (.-target e)))
                         (close this opts)))
           :on-key-down (fn [e]
                          (case (.-keyCode e)
                            27 (close this opts)
                            nil))}
          [:div.autocomplete__dropdown
           {:class (str (if @top? "autocomplete__dropdown--above ")
                        (if @right? "autocomplete__dropdown--left "))
            :style (if @top? {:bottom (str (:height container-state) "px")})}
           [:div.autocomplete__dropdown-content
            {:ref scroll-wrapper-el-ref}
            [create-new-item search selected scroll-wrapper-el opts]
            [autocomplete-contents-top this results selected scroll-wrapper-el opts]]]])})))

(defn update-el-dimensions
  "Save the container dimensions to component state.
  Container contains the input and dropdown."
  [this]
  ; FIXME: Is is this useful as this contains the input? Would only the dropdown container
  ; be better?
  (let [el (rdom/dom-node this)]
    (r/set-state this {:width (.-offsetWidth el) :height (.-offsetHeight el)})))

(defn focus-input
  "Focus the input element if autocomplete is open."
  [this]
  (if (:open? (r/state this))
    (some-> this rdom/dom-node (.getElementsByTagName "input") (.item 0) (.focus))))

(defn- initial-state [{:keys [items] :as opts} defaults this]
  (let [prepared-items (if items (prepare-items items opts))]
    (merge
      {:open? false
       :search nil
       :query nil
       :selected 0
       :items (or items (r/atom nil))
       ; FIXME: Default opts. Uses only prepare-xform option.
       :prepared-items prepared-items
       :width nil
       :height nil
       :timeout (atom nil)}
      ; FIXME: Default opts.
      (filter-results-top prepared-items nil 0 (merge defaults opts)))))

(defn- will-receive-props [this [_ {:keys [items query] :as opts}]]
  ;; When items changes, reset the results
  (when-not (= (:items (r/props this)) items)
    (r/set-state this {:items items})
    (r/set-state this {:prepared-items (prepare-items items opts)})
    (reset-search this opts)))

(defn- did-update [this old-argv]
  (update-el-dimensions this)
  (focus-input this))

(defn- did-mount [opts this]
  (update-el-dimensions this)
  (focus-input this))

(defn- build-options [opts defaults this]
  (when (:cb opts)
    (js/console.warn "komponentit.autocomplete/autocomplete :cb options is deprecated, use :on-change instead."))
  (when (:create opts)
    (js/console.warn "komponentit.autocomplete/autocomplete :create options is deprecated, use :on-create instead."))
  (when (:remove-cb opts)
    (js/console.warn "komponentit.autocomplete/autocomplete :remove-cb options is deprecated, use :on-remove instead."))
  (let [;; Static defaults
        {:keys [item->key item->value] :as opts}
        (merge defaults opts)

        ;; Dynamic defaults based on other options
        opts (merge {:item->value item->key
                     :term-match-fn (if (:search-fields opts) (create-matcher* (:search-fields opts)))
                     ;; Map deprecated callbacks to new
                     :on-change (:cb opts)
                     :on-create (:create opts)
                     :on-remove (:remove-cb opts)}
                    opts)]
    opts))

(defn autocomplete-input [opts text this]
  (let [{:keys [placeholder disabled on-blur auto-focus]} opts
        {:keys [open? search initial-search]} (r/state this)]
    [autosize/input
     {:class "autocomplete__input"
      :on-focus  (partial focus this search text)
      :on-blur   (fn [e]
                   (blur this opts e)
                   (if on-blur (on-blur e)))
      :on-change (partial call-on-change this opts)
      :on-key-down (partial key-down this text opts)
      :auto-complete "off"
      :disabled disabled
      :type "text"
      :placeholder placeholder
      ; :on-click (partial click this disabled? text)
      :value (if open?
               (if initial-search
                 (str initial-search)
                 (str search))
               text)
      :auto-focus auto-focus}]))

(defn selected-items [opts this]
  (let [{:keys [value item-removable? value->text]} opts
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
                          (call-on-remove opts this x)
                          nil)}
             "×"])]))]))

(defn autocomplete-clear [this {:keys [disabled value] :as opts}]
  (if (if (coll? value)
        (seq value)
        value)
    [:button.autocomplete__clear-button
     {:type "button"
      :disabled disabled
      :on-click (fn [e]
                  (call-clear opts this)
                  (focus-input this)
                  (.stopPropagation e)
                  (.preventDefault e))}]))

(defn autocomplete
":value - (required) IDeref or value
:on-change - (required) Function [item]
:on-blur - Input :on-blur
:on-create - Create a new item. Function [value]
:items
:max-results
:value->search
:value->text
:item->key
:item->value
:item-removable? - predicate function to determine if item is removable
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
:disabled"
  [opts]
  (r/create-class
    {:display-name "komponentit.autocomplete.autocomplete_class"
     :get-initial-state (partial initial-state opts defaults)
     :component-will-receive-props will-receive-props
     :component-did-update did-update
     :component-did-mount (partial did-mount opts)

     :render
     (fn [this]
       (let [opts (r/props this)
             {:keys [items open? results search selected width height]} (r/state this)
             {:keys [value value->text control-class container-class disabled] :as opts} (build-options opts defaults this)
             text (value->text items value)]

         [:div.autocomplete.autocomplete--single
          {:class container-class}
          [:div.autocomplete__control
           {:class (str control-class " "
                        (if open? "autocomplete__control--open ")
                        (if disabled "autocomplete__control--disabled ")
                        (if value "autocomplete__control--value "))
            :on-click (partial click this)}
           [autocomplete-input opts text this]
           [autocomplete-clear this opts]]
          (if open?
            [autocomplete-contents-wrapper this results {:width width :height height} selected search opts])]))}))

(defn multiple-autocomplete
":value - (required) IDeref or value
:on-change - (required) Function [item]
:on-remove - Called when item is removed [value]
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
:disabled"
  [opts]
  (r/create-class
    {:display-name "komponentit.autocomplete.multiple_autocomplete_class"
     :get-initial-state (partial initial-state opts multiple-defaults)
     :component-will-receive-props will-receive-props
     :component-did-update did-update
     :component-did-mount (partial did-mount opts)

     :render
     (fn [this]
       (let [opts (r/props this)
             {:keys [open? results search selected width height]} (r/state this)
             {:keys [control-class container-class disabled value] :as opts} (build-options opts multiple-defaults this)
             text ""]

         [:div.autocomplete
          {:class container-class}
          [:div.autocomplete__control
           {:class (str control-class " "
                        (if open? "autocomplete__control--open ")
                        (if disabled "autocomplete__control--disabled ")
                        (if value "autocomplete__control__value "))
            :on-click (partial click this)}
           [selected-items opts this]
           [autocomplete-input opts text this]
           [autocomplete-clear opts]]
          (if open?
            [autocomplete-contents-wrapper this results {:width width :height height} selected search opts])]))}))
