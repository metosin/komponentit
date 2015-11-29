(ns lomakkeet.reagent.autocomplete
  (:require [reagent.core :as r]
            [reagent.ratom :refer-macros [run! reaction]]
            [lomakkeet.util :as util]
            [lomakkeet.autocomplete :as ac]
            [lomakkeet.reagent.impl :as impl]
            [lomakkeet.reagent.mixins :as mixins]
            [goog.dom.classes :as classes]
            [goog.style :refer [scrollIntoContainerView]]))

(declare filter-results)

(defn close [this]
  (r/set-state this {:open? false}))

(defn open [this]
  (r/set-state this {:open? true}))

(defn update-search [this v {:keys [->query] :as opts}]
  (r/set-state this {:search v :query (->query v)})
  (r/set-state this (filter-results this opts)))

(defn reset-search [this opts]
  (r/set-state this {:search nil :query nil})
  (r/set-state this (filter-results this opts)))

(defn blur [this opts e]
  (when (.-relatedTarget e)
    (close this)
    (reset-search this opts))
  nil)

(defn click [this disabled? e]
  (when-not disabled?
    (open this)
    (.stopPropagation e))
  nil)

(defn focus [this search e]
  (if-not (:open? (r/state this))
    (r/set-state this {:search ""}))
  (open this)
  nil)

(defn change [this cb opts e]
  (let [v (.. e -target -value)]
    (update-search this v opts)
    (if cb (cb v)))
  nil)

(defn key-down [this find-by-selection cb opts e]
  (let [{:keys [results selected n]} (r/state this)
        change-selection (fn change-selection  [f e]
                           (r/set-state this {:selected (util/limit 0 n (f (:selected (r/state this))))})
                           (.preventDefault e)
                           (.stopPropagation e))]
    (r/set-state this {:open? true})

    (case (.-key e)
      "Enter" (do
                (.preventDefault e)
                (.stopPropagation e)
                (when-let [v (find-by-selection results selected)]
                  (cb v)
                  (r/set-state this {:open? false :search nil})))
      "Escape" (r/set-state this {:open? false :search nil})
      "Backspace" (if-let [remove-cb (:remove-cb opts)]
                    (remove-cb (last (:value opts))))
      "ArrowUp" (change-selection dec e)
      "ArrowDown" (change-selection inc e)
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
  [prepared-items query
   {:keys [value term-match-fn multiple? filter-current-out?
           item->text item->value item->key
           min-search-length max-results]}]
  (let [n (atom -1)
        search? (or (and min-search-length (>= (count (apply str query)) min-search-length))
                    (not min-search-length))

        filter-search
        (if (and search? (and term-match-fn query))
          (filter (fn [item] (ac/query-match? term-match-fn item query)))
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
        (map (fn [v] (assoc v ::ac/i (swap! n inc))))

        add-highlighted-str
        (if (and search? (seq query))
          (map (fn [v] (assoc v ::text (ac/highlight-string (item->text v) query))))
          identity)

        results (into [] (comp filter-search filter-current limit add-index add-highlighted-str) prepared-items)]
    {:n @n
     :results results}))

(defn filter-results [this opts]
  (let [{:keys [prepared-items query]} (r/state this)]
    (filter-results' prepared-items query opts)))

(defn choice-item [_]
  (r/create-class
    {:component-did-mount
     (fn [this]
       (let [{:keys [item selected]} (r/props this)]
         (if (= (::ac/i item) selected)
           (scrollIntoContainerView (r/dom-node this) (.-parentNode (r/dom-node this)) true))))
     :component-did-update
     (fn [this]
       (let [{:keys [item selected]} (r/props this)]
         (if (= (::ac/i item) selected)
           (scrollIntoContainerView (r/dom-node this) (.-parentNode (r/dom-node this)) true))))
     :render
     (fn [this]
       (let [{:keys [item selected cb opts]} (r/props this)
             {:keys [value item->key item->text item->value]} opts]
         [:div
          {:key (item->key item)
           :on-click (fn [_]
                       (cb item)
                       nil)
           :class (str "option " (if (or (= (::ac/i item) selected)
                                         (= value (item->value item))) "active"))}
          (or (::text item) (item->text item))]))}))

(def ^:private defaults
  {:value->text get
   :item->key :key
   :item->text :value
   :item-removable? (constantly true)
   :value->search identity
   :->query ac/default->query
   :no-results-text "No results"})

(defn- assert-opts [{:keys [items filter-current-out? multiple? value cb]
                     :as opts}]
  (assert (ifn? cb) "Callback function is required")
  opts)

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

(defn create-new-item [search create-cb _]
  (if (and create-cb (seq search))
    [:div.option
     {:on-click (fn [_]
                  (create-cb search)
                  nil)}
     "Add " search "..."]))

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
       (fn [results container-state selected select-cb create-cb search {:keys [multiple? group-by groups cb item->key no-results-text] :as opts}]
         [:div
          {:class (str "selectize-dropdown " (if multiple? "multi " "single ") (if @top? "above "))
           :style (if @top? {:bottom (str (:height container-state) "px")})}
          [:div.selectize-dropdown-content
           [create-new-item search create-cb opts]
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
                                          :cb cb
                                          :opts opts}])]))]
               (if (seq r)
                 r
                 [:div.option no-results-text]))
             (if (seq results)
               (for [item results]
                 ^{:key (item->key item)}
                 [choice-item {:item item
                               :selected selected
                               :cb cb
                               :opts opts}])
               [:div.option no-results-text]))]])})))

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

(defn autocomplete
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
   :multiple?
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
  [{:keys [items] :as opts}]
  (r/create-class
    {:get-initial-state
     (fn [this]
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
           (filter-results' prepared-items nil (merge defaults opts))
           )))

     :component-will-receive-props
     (fn [this [_ {:keys [items] :as opts}]]
       ;; When items changes, reset the results
       (when-not (= (:items (r/props this)) items)
         (r/set-state this {:items items})
         (r/set-state this {:prepared-items (prepare-items items opts)})
         (reset-search this opts)))

     :component-did-unmount
     (fn [this]
       (if-let [closable (:closable (r/state this))]
         (closable)))

     :component-did-update
     (fn [this old-argv]
       (update-el-dimensions this)
       (focus-input this))

     :component-did-mount
     (fn [this]
       (r/set-state this {:closable (mixins/create-closable (fn []
                                                              (close this)
                                                              (reset-search this opts)))})
       (update-el-dimensions this)
       (focus-input this))

     :render
     (fn [this]
       (let [opts (r/props this)
             {:keys [items open? results search selected n width height]} (r/state this)

             {:keys [value cb create remove-cb on-blur
                     value->text item->key
                     item-removable?
                     search-fields
                     ->query
                     clearable? multiple?
                     group-by groups
                     placeholder
                     ctrl-class input-class disabled?]
              :as opts}
             (assert-opts (merge defaults opts))

             {:keys [item->value find-by-selection term-match-fn]
              :as opts}
             (merge {:item->value item->key
                     :find-by-selection (if group-by
                                          ac/default-group-find-by-selection
                                          ac/default-find-by-selection)
                     :term-match-fn (if search-fields (ac/create-matcher* search-fields))}
                    opts)

             select-cb (fn [v]
                         (cb v)
                         (r/set-state this {:search nil :open? false}))

             create-cb (if create
                         (fn [s]
                           (create s)
                           (r/set-state this {:search nil :open? false})))]

         [:div.selectize-control
          {:class (str ctrl-class
                       (if multiple? " multi" " single"))}
          [:div.selectize-input
           {:class (str input-class
                        (if open? " input-active dropdown-active ")
                        (if disabled? " disabled ")
                        (if (seq results) " items ")
                        (let [v value]
                          (if (or (and (not (coll? v)) (some? v)) (seq v)) " has-items ")))
            :on-click (partial click this disabled?)}
           (if multiple?
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
                       "×"])]))))
           [:input
            {:on-focus  (partial focus this search)
             :on-blur   (fn [e]
                          (blur this opts e)
                          (if on-blur (on-blur e)))
             :on-change (partial change this nil opts)
             :on-key-down (partial key-down this find-by-selection select-cb opts)
             :auto-complete false
             :disabled disabled?
             :type "text"
             :placeholder placeholder
             :on-click (partial click this disabled?)
             :value (if open?
                      (str search)
                      (if-not multiple?
                        (value->text items value)))}]
           (if clearable?
             [:span.selectize-clear
              {:on-click #(select-cb nil)}
              "×"])]
          (if open?
            [autocomplete-contents results {:width width :height height} selected select-cb create-cb search opts])]))}))

(defn autocomplete*
  [form {:keys [ks item->value item->key multiple? cb remove-cb disabled?]
         :or {item->key key}}]
  (let [value (reaction (get-in (:value @(:data form)) ks))
        item->value (or item->value item->key)

        cb
        (fn [v]
          (if cb (cb v))
          ;; FIXME: hack
          (let [item->value (if (map? item->value)
                              item->value
                              {ks item->value})]
            (doseq [[ks item->value] item->value]
              (impl/cb form ks (if multiple?
                                 (conj @value (item->value v))
                                 (item->value v)))))
          nil)

        remove-cb
        (fn [x _]
          (if remove-cb (remove-cb x))
          (impl/cb form ks (into (empty @value) (remove #(= % x) @value))))

        on-blur
        (fn [e]
          (impl/blur form ks))

        attrs (:attrs form)
        disabled (reaction (or disabled? (:disabled attrs)))]
    (fn [form opts]
      [autocomplete (assoc opts :value @value, :cb cb, :remove-cb remove-cb, :on-blur on-blur :disabled? @disabled)])))
