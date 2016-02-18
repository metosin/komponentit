(ns lomakkeet.reagent.datepicker
  (:require [reagent.core :as r]
            [reagent.ratom :refer-macros [reaction run!]]
            [goog.string :as gs]
            [lomakkeet.core :as l]
            [lomakkeet.date :as date]
            [lomakkeet.reagent.impl :as impl]
            cljsjs.pikaday.with-moment)
  (:import [goog.date Date UtcDateTime]))

(defn- clone-date [{:keys [date-time?]} value]
  (if value
    (.clone value)
    (if date-time?
      (doto (UtcDateTime.)
        (.setHours 0)
        (.setMinutes 0)
        (.setSeconds 0))
      (Date.))))

(defn date [{:keys [value on-select on-blur datepicker-i18n min-date max-date date-time? attrs clearable? disabled? on-clear week-numbers?]
             :as   opts}]
  (let [el (atom nil)
        ; Hack to access current value from onSelect
        current-val (atom nil)
        coerce (if date-time? date/jsdate->date-time date/jsdate->local-date)
        current-disabled? (atom disabled?)]
    (r/create-class
      {:component-did-mount
       (fn [this]
         (reset! el (doto (js/Pikaday. (-> {:field          (r/dom-node this)
                                            ; NOTE: This requires MomentJS
                                            :format         "D.M.YYYY"
                                            :firstDay       1
                                            :showWeekNumber week-numbers?
                                            :onSelect       (fn [date]
                                                              (on-select (doto (clone-date opts @current-val)
                                                                           (.setYear (.getFullYear date))
                                                                           (.setMonth (.getMonth date))
                                                                           (.setDate (.getDate date)))))}
                                           (cond->
                                             datepicker-i18n (assoc :i18n datepicker-i18n))
                                           clj->js))
                      ; For some reason setting these at constructor didn't work
                      (.setDate (date/date-format value "yyyy-MM-dd"))
                      (cond-> min-date (.setMinDate min-date))
                      (cond-> max-date (.setMaxDate max-date))))
         (.addEventListener (r/dom-node this)
                            "click"
                            (fn [e]
                              (when @current-disabled?
                                (.preventDefault e)
                                (.stopPropagation e))
                              nil)
                            true))
       :component-did-update
       (fn [this _]
         (let [{:keys [min-date max-date disabled?]} (r/props this)]
           (if min-date (.setMinDate @el min-date))
           (if max-date (.setMaxDate @el max-date))
           (reset! current-disabled? disabled?)))
       :reagent-render
       (fn [{:keys [value on-blur attrs clearable? disabled? on-clear]}]
         (reset! current-val value)
         [:div.input-group
          [:span.input-group-addon
           [:span.glyphicon.glyphicon-calendar]]
          [:input.form-control
           (merge
             attrs
             {:type      "text"
              :value     (or (date/date->str value) "")
              ; To silence reagent warnings
              :on-change identity
              :on-blur   on-blur
              :disabled  disabled?})]
          (if clearable?
            [:span.input-group-btn
             [:button.btn.btn-default
              {:type     "button"
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
  (let [this (r/current-component)
        form-value (reaction (:value @(:data form)))
        value (reaction (get-in @form-value ks))]
    (fn [_ {:keys [ks datepicker-i18n min-date max-date date-time? disabled]}]
      [date {:value           @value
             :on-blur         #(impl/blur form ks)
             :on-clear        (fn [e]
                                ;; Set date to nil
                                (impl/cb form ks nil))
             :on-select       (fn [date]
                                (impl/cb form ks date))
             :datepicker-i18n datepicker-i18n
             :min-date        min-date
             :max-date        max-date
             :date-time?      date-time?
             :disabled        (try-deref disabled)
             :clearable?      clearable?}])))
