(ns lomakkeet.om.autocomplete
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [put!]]
            [om.core :as om]
            [sablono.core :refer-macros [html]]
            [lomakkeet.util :as util]
            [lomakkeet.action :refer [action!]]
            [lomakkeet.autocomplete :as ac]
            [lomakkeet.om.mixins :as mixins]))

(defn blur [owner e]
  (if (.-relatedTarget e)
    (om/update-state! owner #(assoc %
                                    :open? false
                                    :search nil)))
  nil)

(defn click [owner e]
  (om/set-state! owner :open? true)
  (.stopPropagation e)
  nil)

(defn focus [owner e]
  (if-not (om/get-state owner :open?)
    (om/set-state! owner :input ""))
  (om/set-state! owner :open? true)
  nil)

(defn change [owner cb e]
  (let [v (.. e -target -value)]
    (om/set-state! owner :input v)
    (cb v))
  nil)

(defn key-down [owner find-by-selection cb e]
  (let [selected (om/get-state owner :selection)
        n (om/get-state owner :count)
        change-selection (fn change-selection  [f e]
                           (om/update-state! owner :selection (comp (partial util/limit 0 n) f))
                           (.preventDefault e)
                           (.stopPropagation e))]
    (om/set-state! owner :open? true)

    (case (.-key e)
      "Enter" (when-let [v (find-by-selection (om/get-state owner :data) (om/get-state owner :selection))]
                (cb v)
                (om/set-state! owner :open? false)
                (om/set-state! owner :search nil))
      "ArrowUp" (change-selection dec e)
      "ArrowDown" (change-selection inc e)
      nil)))

(defn autocomplete-list*
  [_ owner {:keys [cb renderer item->key item->text]}]
  (reify
    om/IDisplayName
    (display-name [_] "autocomplete-list*")
    om/IRenderState
    (render-state [_ {:keys [data selection]}]
      (html
        [:div.selectize-dropdown-content
         (if (seq data)
           (for [{:keys [i] :as item} data]
             [:div
              {:key (item->key item)
               :class (if (= selection i) "active")
               :ref (str "item-" i)
               :data-selectable i
               :on-click #(cb item)}
              (item->text item)])
           [:div {:ref "item-0" :data-selectable 1} [:span "No results"]])]))))

(defn init-state []
  {:data nil ; The results
   :selection 0 ; Selected item
   :input nil ; Search string
   :open? false
   :debounce (mixins/debounce-init)})

(defn autocomplete*
  [{:keys [value]}
   owner
   {:keys [form ch ks item->key value->text load-items find-by-selection ->query]
    :or {value->text identity
         find-by-selection ac/default-find-by-selection
         ->query ac/default->query}
    :as opts}]
  (let [cb (fn [item]
             (action! form {:type :change
                            :ks ks
                            :value (item->key item)})
             (om/set-state! owner :open? false))]
    (reify
      om/IDisplayName
      (display-name [_] "autocomplete*")
      om/IInitState
      (init-state [_]
        (init-state))
      om/IWillMount
      (will-mount [_]
        (if value (load-items owner (->query value)))
        (mixins/debounce-will-mount (om/get-state owner :debounce) #(load-items owner (->query %)))
        (om/set-state! owner :closable (mixins/create-closable owner)))
      om/IWillUnmount
      (will-unmount [_]
        (mixins/debounce-will-unmount (om/get-state owner :debounce))
        ((om/get-state owner :closable)))
      om/IRenderState
      (render-state [_ {:keys [open? input data selection]}]
        (html
          [:div.selectize-control.single
           [:input.selectize-input
            {:on-focus  (partial focus owner)
             :on-blur   (partial blur owner)
             :on-click  (partial click owner)
             :on-change (partial change owner (fn [x]
                                                (put! (om/get-state owner :debounce) x)))
             :on-key-up (partial key-down owner find-by-selection cb)
             :value (or (if open? input (value->text value)) "")
             :class (if open? "input-active dropdown-active")
             :auto-complete false}]
           (when open?
             [:div.selectize-dropdown.single
              (om/build autocomplete-list* nil {:state {:data data
                                                        :selection selection}
                                                :opts (assoc opts :cb cb)})])])))))

