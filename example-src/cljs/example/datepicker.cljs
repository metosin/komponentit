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

(dc/defcard-rg datepicker
  (fn [date _]
    [datepicker/date {:value @date
                      :on-change (fn [x] (reset! date x))}])
  (r/atom nil)
  {:inspect-data true})

(dc/defcard-rg datepicker-disabled
  (fn [state _]
    (let [{:keys [date disabled]} @state]
      [:div
       [options/table
        @state
        (fn [k v] (swap! state assoc k v))
        [[:disabled :bool]]]
       [datepicker/date {:value         date
                         :on-change     (fn [x] (swap! state assoc :date x))
                         :week-numbers? true
                         :disabled      disabled}]]))
  (r/atom {:date nil :disabled true})
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
                       :on-change (fn [x] (reset! date x))
                       :date-time? true
                       :clearable? true}]
     [timepicker/timepicker {:value @date
                             :on-select (fn [x] (reset! date x))}]])
  (r/atom (UtcDateTime.))
  {:inspect-data true})
