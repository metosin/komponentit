(ns lomakkeet.reagent.datepicker
  (:require [reagent.core :as reagent :refer [atom]]
            [reagent.ratom :refer-macros [reaction]]
            [goog.string :as gs]
            [lomakkeet.date :refer [date->str]]
            cljsjs.pikaday.with-moment))

(defn date* [form {:keys [ks datepicker-i18n]}]
  (let [el (atom nil)
        value (reaction (get-in (:lomakkeet.core/value @form) ks))]
    (reagent/create-class
      {:component-did-mount
       (fn [this]
         (reset! el (js/Pikaday. (-> {:field (reagent/dom-node this)
                                      ; NOTE: This requires MomentJS
                                      :format "D.M.YYYY"
                                      :firstDay 1
                                      :onSelect identity}
                                     (cond-> datepicker-i18n (assoc :i18n datepicker-i18n))
                                     clj->js))))
       :reagent-render
       (fn []
         [:input.form-control
          {:type "text"
           :value (or (date->str @value) "")
           ; To silence reagent warnings
           :on-change identity}])})))
