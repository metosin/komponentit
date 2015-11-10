(ns example.calendar
  (:require [lomakkeet.reagent.calendar :as calendar]
            [reagent.core :as r]
            [devcards.core :as dc :include-macros true]
            [example.options :as options])
  (:import [goog.date Date]))

(dc/defcard "# Work in progress")

(dc/defcard-rg month-calendar
  (fn [date _]
    [:div
     [calendar/month-calendar
      {:text "Foo"
       :value @date
       :on-change (fn [x] (reset! date x))}]])
  (r/atom nil)
  {:inspect-data true})

(dc/defcard-rg date-range
  (fn [state _]
    [:div
     [options/table
      @state
      (fn [k v] (swap! state assoc k v))
      [[:week-numbers? :bool]
       [:quicklist? :bool]
       [:date-input? :bool]]]

     [calendar/date-range
      {:start (:start @state)
       :end (:end @state)
       :on-change #(swap! state merge %)
       :week-numbers? (:week-numbers? @state)
       :quicklist? (:quicklist? @state)
       :date-input? (:date-input? @state)}]
     [:button
      {:type "button"
       :on-click (fn [_] (swap! state assoc :start nil :end nil) nil)}
      "Reset"]])
  (r/atom {:start nil
           :end nil})
  {:inspect-data true})
