(ns lomakkeet.om.autocomplete
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [put!]]
            [om.core :as om]
            [sablono.core :refer-macros [html]]
            [lomakkeet.util :as util]
            [lomakkeet.action :refer [action!]]
            [lomakkeet.autocomplete :as ac]
            [lomakkeet.impl.mixins :as mixins]))

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
        (ac/init-state))
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
            {:on-focus  (partial ac/focus owner)
             :on-blur   (partial ac/blur owner)
             :on-click  (partial ac/click owner)
             :on-change (partial ac/change owner (fn [x]
                                                   (put! (om/get-state owner :debounce) x)))
             :on-key-up (partial ac/key-down owner find-by-selection cb)
             :value (or (if open? input (value->text value)) "")
             :class (if open? "input-active dropdown-active")
             :auto-complete false}]
           (when open?
             [:div.selectize-dropdown.single
              (om/build autocomplete-list* nil {:state {:data data
                                                        :selection selection}
                                                :opts (assoc opts :cb cb)})])])))))

