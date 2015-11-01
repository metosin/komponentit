(ns lomakkeet.reagent.datepicker
  (:require [reagent.core :as reagent]
            [reagent.ratom :refer-macros [reaction run!]]
            [goog.string :as gs]
            [lomakkeet.core :as l]
            [lomakkeet.date :refer [date->str jsdate->local-date jsdate->date-time]]
            [lomakkeet.reagent.impl :as impl]
            cljsjs.pikaday.with-moment))

(defn date [{:keys [value on-select on-blur datepicker-i18n min-date max-date date-time? attrs]}]
  (let [el (atom nil)
        coerce (if date-time? jsdate->date-time jsdate->local-date)]
    (reagent/create-class
      {:component-did-mount
       (fn [this]
         (reset! el (doto (js/Pikaday. (-> {:field (reagent/dom-node this)
                                            ; NOTE: This requires MomentJS
                                            :format "D.M.YYYY"
                                            :firstDay 1
                                            :onSelect (fn [date] (on-select (coerce date)))}
                                           (cond->
                                             datepicker-i18n (assoc :i18n datepicker-i18n))
                                           clj->js))
                      ; For some reason setting these at constructor didn't work
                      (.setMinDate min-date)
                      (.setMaxDate max-date))))
       :component-did-update
       (fn [this _]
         (let [{:keys [min-date max-date]} (reagent/props this)]
           (.setMinDate @el min-date)
           (.setMaxDate @el max-date)))
       :reagent-render
       (fn [{:keys [value on-blur attrs]}]
         [:input.form-control
          (merge
            attrs
            {:type "text"
             :value (or (date->str value) "")
             ; To silence reagent warnings
             :on-change identity
             :on-blur on-blur})])})))

(defn date* [form {:keys [ks datepicker-i18n min-date max-date date-time?]}]
  (let [this       (reagent/current-component)
        form-value (reaction (:value @(:data form)))
        value      (reaction (get-in @form-value ks))]
    (fn [_]
      [date {:value value
             :on-blur #(impl/blur form ks)
             :on-select (fn [date]
                          (impl/cb form ks date))
             :datepicker-i18n datepicker-i18n
             :min-date min-date
             :max-date max-date
             :date-time? date-time?}])))
