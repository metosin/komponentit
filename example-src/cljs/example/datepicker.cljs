(ns example.datepicker
  (:require [komponentit.datepicker :as datepicker]
            [komponentit.timepicker :as timepicker]
            [example.options :as options]
            [reagent.core :as r]
            [devcards.core :as dc :include-macros true])
  (:import [goog.date Date UtcDateTime]))

(dc/defcard
  (str
"# Datepicker ([View source](https://github.com/metosin/komponentit/blob/master/src/cljs/komponentit/datepicker.cljs))"))

(dc/defcard-rg datepicker-disabled
  (fn [state _]
    [:div
     [options/table
      @state
      (fn [k v] (swap! state assoc k v))
      [[:disabled :bool]
       [:clearable? :bool]
       [:week-numbers? :bool]
       [:date-format :string]]]
     [datepicker/date (merge (dissoc @state :date :date-format)
                             {:value         (:date @state)
                              :on-change     (fn [x] (swap! state assoc :date x))
                              :i18n {:date-format (:date-format @state)}})]])
  (r/atom {:date nil
           :disabled false
           :clearable? false
           :week-numbers? true
           :date-format "d.M.yyyy"})
  {:inspect-data true})

(dc/defcard-rg datepicker-min-and-max
  "The selectable date can be limited with min and max dates."
  (fn [date _]
    [datepicker/date {:value @date
                      :on-change (fn [x] (reset! date x))
                      :min-date (Date. 2015 9 10)
                      :max-date (Date. 2015 9 20)}])
  (r/atom (Date. 2015 9 15))
  {:inspect-data true})

(dc/defcard-rg datepicker-min-and-max-two-fields
  "The min and max dates can be se reactively based on other inputs."
  (fn [state _]
    [:div
     [:label "Start"]
     [datepicker/date {:value (:start @state)
                       :on-change (fn [x] (swap! state assoc :start x))
                       :max-date (:end @state)}]
     [:label "End"]
     [datepicker/date {:value (:end @state)
                       :on-change (fn [x] (swap! state assoc :end x))
                       :min-date (:start @state)}] ])
  (r/atom {:start (Date. 2015 9 22)
           :end   (Date. 2015 9 25)})
  {:inspect-data true})

(dc/defcard-rg clearable
  (fn [date _]
    [datepicker/date {:value @date
                      :on-change (fn [x] (reset! date x))
                      :clearable? true}])
  (r/atom nil)
  {:inspect-data true})

(dc/defcard-rg date-and-time
  (fn [date _]
    [:div
     [datepicker/date {:value @date
                       :on-change (fn [x]
                                    (reset! date (if x
                                                   (doto (if @date
                                                           (.clone @date)
                                                           (UtcDateTime.))
                                                     (.setYear (.getYear x))
                                                     (.setMonth (.getMonth x))
                                                     (.setDate (.getDate x))))))
                       :clearable? true}]
     [timepicker/timepicker {:value @date
                             :on-select (fn [x] (reset! date x))}]])
  (r/atom (UtcDateTime.))
  {:inspect-data true})
