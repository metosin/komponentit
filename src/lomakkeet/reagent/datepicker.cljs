(ns lomakkeet.reagent.datepicker
  (:require [reagent.core :as reagent :refer [atom]]
            [reagent.ratom :refer-macros [reaction run!]]
            [goog.string :as gs]
            [lomakkeet.core :as l]
            [lomakkeet.date :refer [date->str jsdate->local-date]]
            [lomakkeet.reagent.impl :as impl]
            cljsjs.pikaday.with-moment))

(defn try-deref [x]
  (if (satisfies? IDeref x) @x x))

(defn date* [form {:keys [ks datepicker-i18n min-date max-date]}]
  (let [el (atom nil)
        form-value (reaction (:value @(:data form)))
        value (reaction (get-in @form-value ks))]
    (if min-date
      (run! (if @el (.setMinDate @el (try-deref min-date)))))
    (if max-date
      (run! (if @el (.setMaxDate @el (try-deref max-date)))))
    (reagent/create-class
      {:component-did-mount
       (fn [this]
         (reset! el (js/Pikaday. (-> {:field (reagent/dom-node this)
                                      ; NOTE: This requires MomentJS
                                      :format "D.M.YYYY"
                                      :firstDay 1
                                      :onSelect #(impl/cb form ks (jsdate->local-date %))}
                                     (cond-> datepicker-i18n (assoc :i18n datepicker-i18n))
                                     clj->js))))
       :reagent-render
       (fn []
         [:input.form-control
          (merge
            (impl/get-or-deref (:attrs form))
            {:type "text"
             :value (or (date->str @value) "")
             ; To silence reagent warnings
             :on-change identity
             :on-blur #(impl/blur form ks)})])})))
