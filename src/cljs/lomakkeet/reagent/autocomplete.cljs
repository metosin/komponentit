(ns lomakkeet.reagent.autocomplete
  (:require [reagent.core :as r]
            [reagent.ratom :refer-macros [run! reaction]]
            [lomakkeet.util :as util]
            [lomakkeet.autocomplete :as ac]
            [lomakkeet.reagent.impl :as impl]
            [lomakkeet.reagent.mixins :as mixins]
            [goog.dom.classes :as classes]))

(defn blur [open? search e]
  (when (.-relatedTarget e)
    (reset! open? false)
    (reset! search nil))
  nil)

(defn click [open? disabled? e]
  (when-not disabled?
    (reset! open? true)
    (.stopPropagation e))
  nil)

(defn focus [open? search e]
  (if-not @open?
    (reset! search ""))
  (reset! open? true)
  nil)

(defn change [search cb e]
  (let [v (.. e -target -value)]
    (reset! search v)
    (if cb (cb v)))
  nil)

(defn key-down [open? search results selected n find-by-selection cb e]
  (let [change-selection (fn change-selection  [f e]
                           (swap! selected (comp (partial util/limit 0 @n) f))
                           (.preventDefault e)
                           (.stopPropagation e))]
    (reset! open? true)

    (case (.-key e)
      "Enter" (do
                (.preventDefault e)
                (.stopPropagation e)
                (when-let [v (find-by-selection @results @selected)]
                  (cb v)
                  (reset! open? false)
                  (reset! search nil)))
      "Escape" (do
                 (reset! open? false)
                 (reset! search nil))
      "ArrowUp" (change-selection dec e)
      "ArrowDown" (change-selection inc e)
      nil)))

(defn filter-results [term-match-fn n items query value
                      {:keys [item->text multiple? filter-current-out? item->value item->key]}]
  (reset! n -1)
  (let [map-to-seq
        (if (map? items)
          (map (fn [v] {:key   (key v)
                        :value (val v)}))
          identity)

        filter-search
        (if (and term-match-fn query)
          (filter (fn [item] (ac/query-match? term-match-fn item query)))
          identity)

        filter-current
        (if filter-current-out?
          (let [value-set (set value)]
            (remove (if multiple?
                      (fn [item] (value-set (item->value item)))
                      (fn [item] (= (item->value item) value)))))
          identity)

        add-index
        (map (fn [v] (assoc v ::ac/i (swap! n inc))))

        add-highlighted-str
        (if (seq query)
          (map (fn [v] (assoc v ::text (ac/highlight-string (item->text v) query))))
          identity)]

    (into [] (comp map-to-seq filter-search filter-current add-index add-highlighted-str) items)))

(defn choice-item [item selected cb {:keys [item->key item->text]}]
  ; (reagent/create-class
  ;   {:component-did-mount
  ;    (fn [this]
  ;      (if (= (::ac/i item) @selected)
  ;        (.scrollIntoView (reagent/dom-node this))))
  ;    :component-did-update
  ;    (fn [this]
  ;      (if (= (::ac/i item) @selected)
  ;        (.scrollIntoView (reagent/dom-node this))))
  ;    :reagent-render
  ;    (fn []
       [:div
        {:key (item->key item)
         :on-click (fn [& _]
                     (cb item)
                     nil)
         :class (str "option " (if (= (::ac/i item) @selected) "active"))}
        (or (::text item) (item->text item))]);}))

(defn get-or-deref [x]
  (if (satisfies? IDeref x) @x x))

(def ^:private defaults
  {:value->text (fn [_ x] x)
   :search-fields [:value]
   :item->key :key
   :item->text :value
   :item-removable? (constantly true)
   :value->search identity
   :->query ac/default->query
   :not-results-text "No results"})

(defn- assert-opts [{:keys [items load-items filter-current-out? value-is-search? multiple? value cb]
                    :as opts}]
  (assert (not (and items load-items)) ":items and :load-items are exclusive.")
  (assert (if (or load-items filter-current-out?) (satisfies? IDeref value) true)
          "Using either :load-items or :filter-current-out? requires dereffable value")
  (assert (ifn? cb) "Callback function is required")
  (assert (if value-is-search? (not multiple?) true)
          ":value-is-search? doesn't work together with :multiple?")
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

(defn autocomplete-contents [_ container-state _ _ _]
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
       (fn [results container-state selected select-cb {:keys [multiple? group-by groups no-results-text cb max-results item->key] :as opts}]
         [:div
          {:class (str "selectize-dropdown " (if multiple? "multi " "single ") (if @top? "above "))
           :style (if @top? {:bottom (str (:height container-state) "px")})}
          [:div.selectize-dropdown-content
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
                            [choice-item item selected cb opts])]))]
               (if (seq r)
                 r
                 [:div.option no-results-text]))
             (if (seq results)
               (for [item (if max-results
                            (take max-results results)
                            results)]
                 ^{:key (item->key item)}
                 [choice-item item selected select-cb opts])
               [:div.option no-results-text]))]])})))

(defn autocomplete
  ":value - (required) IDeref or value
   :cb - (required) Function. [value]
   :remove-cb - For multiple?
   :on-blur - Input :on-blur. Might be useful for form pristine handling.
   :items
   :load-items
   :max-results
   :value->search
   :value->text
   :item->key
   :item->value
   :item-removable? - predicate function to determine if item is non-removable
   :value-is-search? - Save the search value using cb instantly and always display the value.
   :term-match-fn
   :search-fields
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
  [opts]
  (let [{:keys [value cb remove-cb on-blur
                items load-items max-results
                value->search value->text item->key
                value-is-search?
                item-removable?
                search-fields
                ->query
                clearable? multiple?
                group-by groups
                filter-current-out?
                placeholder no-results-text
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

        open? (r/atom false)
        closable (mixins/create-closable open?)
        search (r/atom nil)
        query (reaction (->query @search))
        selected (r/atom 0)

        items (if load-items (r/atom nil) items)

        n (r/atom -1)
        results (reaction (filter-results term-match-fn n (get-or-deref items) @query (if filter-current-out? @value) opts))
        ; FIXME: Hack?
        results (if group-by (reaction (clojure.core/group-by group-by @results)) results)

        select-cb
        (fn [v]
          (cb v)
          (reset! open? false))

        focus-input (fn [this]
                      (if @open?
                        (some-> this r/dom-node (.getElementsByTagName "input") (.item 0) (.focus)))
                      nil)

        input-attrs
        {:on-focus  (partial focus open? search)
         :on-blur   (fn [e]
                      (blur open? search e)
                      (if on-blur (on-blur e)))
         :on-change (partial change search (if value-is-search? cb))
         :on-key-down (partial key-down open? search results selected n find-by-selection select-cb)
         :auto-complete false}

        state (r/atom nil)]
    (run! (swap! selected (partial util/limit 0 @n)))
    (if load-items
      (let [search-or-value (reaction (if (seq @search) @search (value->search (get-or-deref value))))]
        ; FIXME changed this to make value visible to the user in edit dialog (run! (if @open? (load-items items @search-or-value)))))
        (run! (load-items items @search-or-value))))
    (r/create-class
      {:component-did-unmount (fn [_] (closable))
       :component-did-update (fn [this]
                              (let [el (r/dom-node this)]
                                (reset! state {:width (.-offsetWidth el) :height (.-offsetHeight el)}))
                               (focus-input this))
       :component-did-mount (fn [this]
                              (let [el (r/dom-node this)]
                                (reset! state {:width (.-offsetWidth el) :height (.-offsetHeight el)}))
                              (focus-input this))
       :reagent-render
       (fn [{:keys [value disabled?]}]
         [:div.selectize-control
          {:class (str ctrl-class
                       (if multiple? " multi" " single"))}
          [:div.selectize-input
           {:class (str input-class
                        (if @open? " input-active dropdown-active ")
                        (if disabled? " disabled ")
                        (if (seq (get-or-deref results)) " items ")
                        (if (seq (get-or-deref value)) " has-items "))
            :on-click (partial click open? disabled?)}
           (if multiple?
             (doall
               (for [x (get-or-deref value)]
                 (let [removable? (item-removable? x)]
                   ^{:key x}
                   [:div {:class (if removable? "item" "non-removable-item")}
                    (value->text (get-or-deref items) x)
                    (if removable?
                      [:a.remove {:on-click (fn [e]
                                              (remove-cb x)
                                              nil)}
                       "×"])]))))
           [:input
            (assoc input-attrs
                   :disabled disabled?
                   :type "text"
                   :placeholder placeholder
                   :on-click (partial click open? disabled?)
                   :value (if value-is-search?
                            (get-or-deref value)
                            (if @open?
                              (str @search)
                              (if-not multiple?
                                (value->text (get-or-deref items) (get-or-deref value))))))]
           (if clearable?
             [:span.selectize-clear
              {:on-click #(select-cb nil)}
              "×"])]
          (if @open?
            [autocomplete-contents @results @state selected select-cb opts])])})))

(defn autocomplete*
  [form {:keys [ks item->value item->key multiple? cb remove-cb disabled?]
         :or {item->key key}
         :as opts}]
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
        disabled (reaction (or (get-or-deref disabled?) (:disabled (get-or-deref attrs))))]
    (fn []
      [autocomplete (assoc opts :value value, :cb cb, :remove-cb remove-cb, :on-blur on-blur, :disabled? @disabled)])))
