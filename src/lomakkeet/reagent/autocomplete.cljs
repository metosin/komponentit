(ns lomakkeet.reagent.autocomplete
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [clojure.string :as string]
            [cljs.core.async :refer [put! chan close!]]
            [reagent.core :as reagent :refer [atom]]
            [reagent.ratom :refer-macros [run! reaction]]
            [lomakkeet.util :as util]
            [lomakkeet.autocomplete :as ac]
            [lomakkeet.reagent.impl :as impl]
            [lomakkeet.reagent.mixins :as mixins]))

(defn blur [open? search e]
  (when (.-relatedTarget e)
    (reset! open? false)
    (reset! search nil))
  nil)

(defn click [open? e]
  (reset! open? true)
  (.stopPropagation e)
  nil)

(defn focus [open? search e]
  (if-not @open?
    (reset! search ""))
  (reset! open? true)
  nil)

(defn change [search cb e]
  (let [v (.. e -target -value)]
    (reset! search v)
    (cb v))
  nil)

(defn key-down [open? search results selected n find-by-selection cb e]
  (let [change-selection (fn change-selection  [f e]
                           (swap! selected (comp (partial util/limit 0 n) f))
                           (.preventDefault e)
                           (.stopPropagation e))]
    (reset! open? true)

    (case (.-key e)
      "Enter" (when-let [v (find-by-selection @results @selected)]
                (cb v)
                (reset! open? false)
                (reset! search nil))
      "ArrowUp" (change-selection dec e)
      "ArrowDown" (change-selection inc e)
      nil)))

(defn filter-results [term-match? n items query {:keys [item->text]
                                                 :or {item->text val}}]
  (reset! n -1)
  (-> items
      (cond-> query (->> (filter #(ac/query-match? term-match? % query))))
      (->> (map (fn [v]
                  (-> v
                      (assoc ::ac/i (swap! n inc))
                      (cond-> (seq query) (assoc ::text (ac/highlight-string (item->text v) query)))))))
      vec))

(defn choice-item [item selected cb {:keys [item->key item->text]
                                     :or {item->key key
                                          item->text val}
                                     :as opts}]
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
         :on-click #(cb item)
         :class (str "option " (if (= (::ac/i item) @selected) "active"))}
        (or (::text item) (item->text item))]);}))

(defn get-or-deref [x]
  (if (satisfies? IDeref x) @x x))

(defn autocomplete*
  [form {:keys [items options ks value->text item->key term-match? ->query text-by-value find-by-selection clearable multiple]
         :or {value->text get
              item->key key
              item->text val
              ->query ac/default->query
              find-by-selection ac/default-find-by-selection}
         :as opts}]
  (let [open? (atom false)
        closable (mixins/create-closable open?)
        search (atom nil)
        query (reaction (->query @search))
        n (atom -1)
        results (reaction (if term-match?
                            (filter-results term-match? n (get-or-deref items) @query opts)
                            (get-or-deref items)))
        value (reaction (get-in (:value @(:cursor form)) ks))
        selected (atom 0)

        cb
        (fn [v]
          (impl/cb form ks (if multiple
                             (conj @value (item->key v))
                             (item->key v)))
          (reset! open? false))
        remove-cb
        (fn [x _]
          (impl/cb form ks (into (empty @value) (remove #(= % x) @value))))

        input-attrs
        {:on-focus  (partial focus open? search)
         :on-blur   (partial blur open? search)
         :on-click  (partial click open?)
         :on-change (partial change search identity)
         :on-key-down (partial key-down open? search results selected n find-by-selection cb)
         :auto-complete false}]
    (reagent/create-class
      {:component-did-unmount
       (fn [] (closable))
       :reagent-render
       (fn []
         [:div.selectize-control.plugin-remove_button
          {:class (if multiple "multi" "single")}
          (if multiple
            [:div.selectize-input
             {:class (str (if (seq (get-or-deref results)) "items ") (if (seq @value) "has-items "))
              :on-click (partial focus open? search)}
             (for [x @value]
               ^{:key x}
               [:div.item
                (value->text (get-or-deref items) x)
                [:a.remove {:on-click (partial remove-cb x)} "×"]])
             [:input
              (assoc input-attrs
                     :type "text"
                     :class (str (if @open? "input-active dropdown-active"))
                     :value (str (if @open? @search)))]]
            [:input.selectize-input
             (assoc input-attrs
                    :value (str (if @open? @search (value->text (get-or-deref items) @value)))
                    :class (str (if @open? "input-active dropdown-active")))])
          (if @open?
            [:div.selectize-dropdown
             {:class (if multiple "multi" "single")}
             [:div.selectize-dropdown-content
              (for [item @results]
                ^{:key (item->key item)}
                [choice-item item selected cb opts])]])])})))
