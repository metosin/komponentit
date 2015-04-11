(ns lomakkeet.reagent.autocomplete
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [clojure.string :as string]
            [cljs.core.async :refer [put! chan close!]]
            [reagent.core :as reagent :refer [atom]]
            [reagent.ratom :refer-macros [run! reaction]]
            [lomakkeet.util :as util]
            [lomakkeet.autocomplete :as ac]
            [lomakkeet.reagent.impl :as impl]
            [lomakkeet.reagent.mixins :as mixins]
            [lomakkeet.reagent.util :refer [dropdown-container]]))

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

(defn choice-item [item selected cb {:keys [item->key item->text] :as opts}]
  (reagent/create-class
    {:component-did-mount
     (fn [this]
       (if (= (:i item) @selected)
         (.scrollIntoView (reagent/dom-node this))))
     :component-did-update
     (fn [this]
       (if (= (:i item) @selected)
         (.scrollIntoView (reagent/dom-node this))))
     :reagent-render
     (fn []
       [:div
        {:key (item->key item)
         :on-click #(cb item)
         :class (if (= (:i item) @selected) "active")
         :data-selectable true}
        (item->text item)])}))

(defn renderer
  [coll selected cb {:keys [item->key] :as opts}]
  [:div.selectize-dropdown-content
   (for [item @coll]
     ^{:key (item->key item)}
     [choice-item item selected cb opts])])

(defn autocomplete*
  [form {:keys [ks value->text item->key loading-el load-items term-match? ->query find-by-selection]
         :or {value->text identity
              loading-el [:div "Loading..."]
              ->query ac/default->query
              find-by-selection ac/default-find-by-selection}
         :as opts}]
  (let [open? (atom false)
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
         (close! search-chan))
       :reagent-render
       (fn []
         [dropdown-container
          :open? open?
          :el [:input.selectize-input
               {:on-focus  (partial focus open? search)
                :on-blur   (partial blur open? search)
                :on-click  (partial click open?)
                :on-change (partial change search identity)
                ; Needs a horrible amount of parameters, perhaps using wrap could help?
                ; write selected -> check limits etc.
                :on-key-down (partial key-down open? search results selected n find-by-selection cb)
                ; FIXME: Is this possible while wrapping this inside a component?
                ; :value (or (if @open?
                ;              @search
                ;              (value->text @value))
                ;            "")
                :class (if @open? "input-active dropdown-active")
                :auto-complete false}]
          :content [renderer results selected cb opts]])})))
