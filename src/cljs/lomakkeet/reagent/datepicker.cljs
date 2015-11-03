(ns lomakkeet.reagent.datepicker
  (:require [reagent.core :as r]
            [reagent.ratom :refer-macros [reaction run!]]
            [goog.string :as gs]
            [lomakkeet.core :as l]
            [lomakkeet.date :as date]
            [lomakkeet.reagent.impl :as impl]
            cljsjs.pikaday.with-moment))

(defn date [{:keys [value on-select on-blur datepicker-i18n min-date max-date date-time? attrs clearable? disabled? on-clear]}]
  (let [el (atom nil)
        coerce (if date-time? date/jsdate->date-time date/jsdate->local-date)]
    (r/create-class
      {:component-did-mount
       (fn [this]
         (reset! el (doto (js/Pikaday. (-> {:field (r/dom-node this)
                                            ; NOTE: This requires MomentJS
                                            :format "D.M.YYYY"
                                            :firstDay 1
                                            :onSelect (fn [date] (on-select (coerce date)))}
                                           (cond->
                                             datepicker-i18n (assoc :i18n datepicker-i18n))
                                           clj->js))
                      ; For some reason setting these at constructor didn't work
                      (.setDate (date/date-format value "yyyy-MM-dd"))
                      (.setMinDate min-date)
                      (.setMaxDate max-date))))
       :component-did-update
       (fn [this _]
         (let [{:keys [min-date max-date]} (r/props this)]
           (.setMinDate @el min-date)
           (.setMaxDate @el max-date)))
       :reagent-render
       (fn [{:keys [value on-blur attrs clearable? disabled? on-clear]}]
         [:div.input-group
          [:span.input-group-addon
           [:span.glyphicon.glyphicon-calendar]]
          [:input.form-control
           (merge
             attrs
             {:type "text"
              :value (or (date/date->str value) "")
              ; To silence reagent warnings
              :on-change identity
              :on-blur on-blur})]
          (if clearable?
            [:span.input-group-btn
             [:button.btn.btn-default
              {:type "button"
               :disabled disabled?
               :on-click (fn [e]
                           (if on-clear
                             (on-clear e)
                             (on-select nil))
                           ; Hide datepicker
                           (.hide @el)
                           nil)}
             "×"]])])})))

(defn try-deref [x]
  (if (satisfies? IDeref x) @x x))

(defn date* [form {:keys [ks datepicker-i18n min-date max-date date-time? clearable? disabled]}]
  (let [this       (r/current-component)
        form-value (reaction (:value @(:data form)))
        value      (reaction (get-in @form-value ks))]
    (fn [_ {:keys [ks datepicker-i18n min-date max-date date-time? disabled]}]
      [date {:value @value
             :on-blur #(impl/blur form ks)
             :on-clear (fn [e]
                         ;; Set date to nil
                         (impl/cb form ks nil))
             :on-select (fn [date]
                          (impl/cb form ks date))
             :datepicker-i18n datepicker-i18n
             :min-date min-date
             :max-date max-date
             :date-time? date-time?
             :disabled (try-deref disabled)
             :clearable? clearable?}])))
