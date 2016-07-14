(ns komponentit.autocomplete
  (:require-macros komponentit.autocomplete)
  (:require [reagent.core :as r]
            [reagent.ratom :refer-macros [run! reaction]]
            [komponentit.util :as util]
            [komponentit.mixins :as mixins]
            [komponentit.highlight :refer [highlight-string]]
            [goog.dom :as dom]
            [goog.dom.classes :as classes]
            [goog.style :refer [scrollIntoContainerView]]))

(def +create-item-index+ -1)

(defn- query-match? [term-match-fn v query]
  (every? (partial term-match-fn v) query))

(defn matches [term-match-fn v query]
  (let [m (group-by (partial term-match-fn v) query)]
    [(get m true) (get m false)]))

(defn default->query [search]
  (some-> search
    (.toLowerCase)
    (.split #" ")
    (->> (remove empty?))
    vec))

(defn default-find-by-selection [data x]
  (some (fn [v]
          (if (= (::i v) x) v))
        data))

(defn- default-group-find-by-selection [data x]
  (some (fn [[_ data]]
          (some (fn [v]
                  (if (= (::i v) x) v))
                data))
        data))

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
  (r/set-state this {:open? true :initial-search text}))

(defn update-search [this v {:keys [->query] :as opts}]
  (r/set-state this {:search v :query (->query v)})
  (r/set-state this (filter-results this opts)))

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

(defn click [this disabled? text e]
  (when-not disabled?
    (open this text))
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

(defn key-down [this find-by-selection select-cb text {:keys [cb create remove-cb] :as opts} e]
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
                (if (and create (= +create-item-index+ selected))
                  (create search)
                  (when-let [v (find-by-selection results selected)]
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
  (let [map-to-seq
        (if (map? items)
          (map (fn [v] {:key   (key v)
                        :value (val v)}))
          identity)

        prepare-xform (or prepare-xform identity)]
    (into [] (comp map-to-seq prepare-xform) items)))

(defn filter-results'
  [prepared-items query selected
   {:keys [value term-match-fn multiple? filter-current-out?
           item->text item->value item->key
           min-search-length max-results]
    :as opts}]
  (let [n (atom -1)
        search? (or (and min-search-length (>= (count (apply str query)) min-search-length))
                    (not min-search-length))

        filter-search
        (if (and search? (and term-match-fn query))
          (filter (fn [item] (query-match? term-match-fn item query)))
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
        (map (fn [v] (assoc v ::i (swap! n inc))))

        add-highlighted-str
        (if (and search? (seq query))
          (map (fn [v] (assoc v ::text (highlight-string (item->text v) query))))
          identity)

        results (into [] (comp filter-search filter-current limit add-index add-highlighted-str) prepared-items)]
    {:n @n
     :selected (limit-selection @n selected identity query opts)
     :results results}))

(defn filter-results [this opts]
  (let [{:keys [prepared-items query selected]} (r/state this)]
    (filter-results' prepared-items query selected opts)))

(defn choice-item [_]
  (r/create-class
    {:component-did-mount
     (fn [this]
       (let [{:keys [item selected]} (r/props this)]
         (if (= (::i item) selected)
           (scrollIntoContainerView (r/dom-node this) (.-parentNode (r/dom-node this)) true))))
     :component-did-update
     (fn [this]
       (let [{:keys [item selected]} (r/props this)]
         (if (= (::i item) selected)
           (scrollIntoContainerView (r/dom-node this) (.-parentNode (r/dom-node this)) true))))
     :render
     (fn [this]
       (let [{:keys [item selected cb opts]} (r/props this)
             {:keys [item->key item->text]} opts]
         [:div
          {:key (item->key item)
           :on-click (fn [_]
                       (cb item)
                       nil)
           :class (str "option " (if (= (::i item) selected)
                                   "active"))}
          (or (::text item) (item->text item))]))}))

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

(defn create-new-item [search create selected opts]
  (if (and create (seq search))
    [choice-item
     {:item {::i +create-item-index+
             ::text (str "Add " search "...")}
      :cb (fn [_] (create search))
      :selected selected
      :opts opts}]))

(defn autocomplete-contents [_ container-state _ _ _ _]
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
       (fn [results container-state selected select-cb search {:keys [create multiple? group-by groups item->key no-results-text] :as opts}]
         [:div
          {:class (str "selectize-dropdown " (if multiple? "multi " "single ") (if @top? "above "))
           :style (if @top? {:bottom (str (:height container-state) "px")})}
          [:div.selectize-dropdown-content
           [create-new-item search create selected opts]
           ; FIXME: Hack?
           (if (or group-by groups)
             (let [r (doall
                       (for [[k v] (or groups results)
                             :let [group-results (get results k)]
                             :when group-results]
                         [:div.optgroup
                          {:key k}
                          [:div.optgroup-header (if groups v (name k))]
                          (for [item group-results]
                            ^{:key (item->key item)}
                            [choice-item {:item item
                                          :selected selected
                                          :cb select-cb
                                          :opts opts}])]))]
               (if (seq r)
                 r
                 [:div.option no-results-text]))
             (if (seq results)
               (for [item results]
                 ^{:key (item->key item)}
                 [choice-item {:item item
                               :selected selected
                               :cb select-cb
                               :opts opts}])
               (if-not create
                 [:div.option no-results-text])))]])})))

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
       :closable nil}
      ; FIXME: Default opts.
      (filter-results' prepared-items nil 0 (merge defaults opts)))))

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

(defn- merge-options [opts defaults this]
  (let [opts (merge defaults opts)

        _ (assert (ifn? (:cb opts)) "Callback function is required")

        opts (assoc opts
                    :item->value (:item->key opts)
                    :find-by-selection (if (:group-by opts)
                                         default-group-find-by-selection
                                         default-find-by-selection)
                    :term-match-fn (if (:search-fields opts) (create-matcher* (:search-fields opts)))
                    :create (if-let [create (:create opts)]
                              (fn [s]
                                (create s)
                                (r/set-state this {:search nil :open? false}))))]
    opts))

(defn autocomplete-input [opts select-cb text this]
  (let [{:keys [placeholder disabled? find-by-selection on-blur]} opts
        {:keys [open? search initial-search]} (r/state this)]
    [:input
     {:on-focus  (partial focus this search text)
      :on-blur   (fn [e]
                   (blur this opts e)
                   (if on-blur (on-blur e)))
      :on-change (partial change this nil opts)
      :on-key-down (partial key-down this find-by-selection select-cb text opts)
      :auto-complete false
      :disabled disabled?
      :type "text"
      :placeholder placeholder
      :on-click (partial click this disabled? text)
      :value (if open?
               (if initial-search
                 (str initial-search)
                 (str search))
               text)}]))

(defn selected-items [opts this]
  (let [{:keys [item-removable? remove-cb value->text]} opts
        {:keys [items value]} (r/state this)]
    (doall
      (for [x value]
        (let [removable? (item-removable? x)]
          ^{:key x}
          [:div {:class (if removable? "item" "non-removable-item")}
           (value->text items x)
           (if removable?
             [:a.remove {:on-click (fn [e]
                                     (remove-cb x)
                                     nil)}
              "×"])])))))

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
   :find-by-selection
   :clearable?
   :group-by
   :groups
   :filter-current-opt?

   Localization
   :placeholder
   :no-results-text

   Style
   :ctrl-class
   :input-class
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

             {:keys [value cb create
                     value->text item->key item->value
                     clearable?
                     group-by groups
                     ctrl-class input-class disabled?]
              :as opts}
             (merge-options opts defaults this)

             select-cb (fn [v]
                         (cb v)
                         (r/set-state this {:search "" :open? false}))

             text (value->text items value)]

         [:div.selectize-control.single
          {:class ctrl-class}
          [:div.selectize-input
           {:class (str input-class
                        (if open? " input-active dropdown-active ")
                        (if disabled? " disabled ")
                        (if (seq results) " items ")
                        ;; FIXME: ??
                        (let [v value]
                          (if (or (and (not (coll? v)) (some? v)) (seq v)) " has-items ")))
            ;; FIXME: Why is on-click defined on both selectize-input and input?
            :on-click (partial click this disabled? text)}
           [autocomplete-input opts select-cb text this]
           (if clearable?
             [:span.selectize-clear
              {:on-click #(select-cb nil)}
              "×"])]
          (if open?
            [autocomplete-contents results {:width width :height height} selected select-cb search opts])]))}))

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
   :find-by-selection
   :clearable?
   :group-by
   :groups
   :filter-current-opt?

   Localization
   :placeholder
   :no-results-text

   Style
   :ctrl-class
   :input-class
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

             {:keys [value cb
                     item->key item->value
                     clearable?
                     group-by groups
                     ctrl-class input-class disabled?]
              :as opts}
             (merge-options opts defaults this)

             select-cb (fn [v]
                         (cb v)
                         (r/set-state this {:search "" :open? false}))

             text ""]

         [:div.selectize-control.multi
          {:class ctrl-class}
          [:div.selectize-input
           {:class (str input-class
                        (if open? " input-active dropdown-active ")
                        (if disabled? " disabled ")
                        (if (seq results) " items ")
                        ;; FIXME: ?
                        (let [v value]
                          (if (or (and (not (coll? v)) (some? v)) (seq v)) " has-items ")))
            ;; FIXME: Why is on-click defined on both selectize-input and input?
            :on-click (partial click this disabled? text)}
           [selected-items opts this]
           [autocomplete-input opts select-cb text this]
           (if clearable?
             [:span.selectize-clear
              {:on-click #(select-cb nil)}
              "×"])]
          (if open?
            [autocomplete-contents results {:width width :height height} selected select-cb search opts])]))}))
