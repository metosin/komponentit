(ns komponentit.datepicker
  (:require [reagent.core :as r]
            [reagent.ratom :refer-macros [reaction run!]]
            [goog.string :as gs]
            [komponentit.date :as date]
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
        current-val (atom nil)]
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
                      (cond-> max-date (.setMaxDate max-date)))))
       :component-did-update
       (fn [this _]
         (let [{:keys [min-date max-date]} (r/props this)]
           (if min-date (.setMinDate @el min-date))
           (if max-date (.setMaxDate @el max-date))))
       :reagent-render
       (fn [{:keys [value on-blur attrs clearable? disabled? on-clear]}]
         (reset! current-val value)
         [:div.input-group (if disabled? {:style {:pointer-events "none"}})
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
