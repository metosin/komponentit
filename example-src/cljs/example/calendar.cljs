(ns example.calendar
  (:require [lomakkeet.reagent.calendar :as calendar]
            [reagent.core :as r]
            [devcards.core :as dc :include-macros true])
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
     [calendar/date-range
      {:start (:start @state)
       :end (:end @state)
       :on-change #(reset! state %)}]])
  (r/atom {:start nil
           :end nil})
  {:inspect-data true})
