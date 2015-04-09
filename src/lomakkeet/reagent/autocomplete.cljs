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

(defn filter-results [term-match? n items query]
  (reset! n -1)
  (->> (if query
         (filter #(ac/query-match? term-match? % query) items)
         items)
       (map (fn [v]
              (assoc v :i (swap! n inc))))
       vec))

(defn get-by-class [el class-name]
  (aget (.getElementsByClassName el class-name) 0))

(defn renderer
  [coll query selected cb {:keys [item->key item->text] :as opts}]
  (let []
    (reagent/create-class
      {:component-did-mount
       (fn [this]
         (run! (do
                 (if-let [child (get-by-class (reagent/dom-node this) (str "item-" @selected))]
                   (util/keep-visible! (reagent/dom-node this) child)))))

       :reagent-render
       (fn []
         [:div.selectize-dropdown-content
          ; FIXME: keep-visible!
          (doall
            (for [item @coll]
              [:div
               {:key (item->key item)
                :on-click #(cb item)
                :class (str (str "item-" (:i item)) " " (if (= (:i item) @selected) "active"))
                :data-selectable true}
               (ac/highlight-string (item->text item) @query)]))])})))

(defn autocomplete*
  [form {:keys [ks value->text item->key loading-el load-items term-match? ->query find-by-selection]
         :or {value->text identity
              loading-el [:div "Loading..."]
              ->query ac/default->query
              find-by-selection ac/default-find-by-selection}
         :as opts}]
  (let [open? (atom false)
        closable (mixins/create-closable open?)
        search (atom nil)
        items (atom nil)
        value (reaction (get-in (:lomakkeet.core/value @form) ks))

        search-chan (chan)
        delayed-search (util/debounce search-chan 100)
        query (atom nil)
        selected (atom 0)

        n (atom -1)
        results (reaction (filter-results term-match? n @items @query))

        cb
        (fn [v]
          (impl/cb form ks (item->key v))
          (reset! open? false))]
    (swap! items load-items)
    (go (loop [] (let [x (<! delayed-search)]
                   (when x
                     (reset! query (->query x))
                     (recur)))))
    (run! (if-let [s @search] (put! search-chan s)))
    (reagent/create-class
      {:component-did-unmount
       (fn [_]
         (close! search-chan)
         (closable))
       :reagent-render
       (fn []
         [:div.selectize-control.single
          [:input.selectize-input
           {:on-focus  (partial focus open? search)
            :on-blur   (partial blur open? search)
            :on-click  (partial click open?)
            :on-change (partial change search identity)
            ; Needs a horrible amount of parameters, perhaps using wrap could help?
            ; write selected -> check limits etc.
            :on-key-down (partial key-down open? search results selected n find-by-selection cb)
            :value (or (if @open?
                         @search
                         (value->text @value))
                       "")
            :class (if @open? "input-active dropdown-active")
            :auto-complete false}]
          (when @open?
            [:div.selectize-dropdown.single
             [renderer results query selected cb opts]])])})))
