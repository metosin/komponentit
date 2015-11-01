(ns example.timepicker
  (:require [lomakkeet.reagent.timepicker :as timepicker]
            [reagent.core :as r]
            [devcards.core :as dc :include-macros true])
  (:import [goog.date UtcDateTime]))

(dc/defcard "# Work in progress")

(dc/defcard-rg timepicker
  "The Date object is updated on input blur event or when enter is pressed."
  (fn [datetime _]
    [timepicker/timepicker {:value @datetime
                            :on-select (fn [x] (reset! datetime x))}])
  (r/atom (UtcDateTime.))
  {:inspect-data true})
