(ns example.datepicker
  (:require [lomakkeet.reagent.datepicker :as datepicker]
            [reagent.core :as r]
            [devcards.core :as dc :include-macros true])
  (:import [goog.date Date]))

(dc/defcard-rg datepicker
  (fn [date _]
    [datepicker/date {:value @date
                      :on-select (fn [x] (reset! date x))}])
  (r/atom nil)
  {:inspect-data true})

(dc/defcard-rg datepicker-min-and-max
  "The selectable date can be limited with min and max dates."
  (fn [date _]
    [datepicker/date {:value @date
                      :on-select (fn [x] (reset! date x))
                      :min-date (Date. 2015 9 10)
                      :max-date (Date. 2015 9 30)}])
  (r/atom (Date. 2015 9 22))
  {:inspect-data true})

(dc/defcard-rg datepicker-min-and-max-two-fields
  "The min and max dates can be se reactively based on other inputs."
  (fn [state _]
    [:div
     [:label "Start"]
     [datepicker/date {:value (:start @state)
                       :on-select (fn [x] (swap! state assoc :start x))
                       :max-date (:end @state)}]
     [:label "End"]
     [datepicker/date {:value (:end @state)
                       :on-select (fn [x] (swap! state assoc :end x))
                       :min-date (:start @state)}] ])
  (r/atom {:start (Date. 2015 9 22)
           :end   (Date. 2015 9 25)})
  {:inspect-data true})

(dc/defcard-rg clearable
  (fn [date _]
    [datepicker/date {:value @date
                      :on-select (fn [x] (reset! date x))
                      :clearable? true}])
  (r/atom nil)
  {:inspect-data true})
