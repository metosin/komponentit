(ns example.timepicker
  (:require [komponentit.timepicker :as timepicker]
            [reagent.core :as r]
            [devcards.core :as dc :include-macros true])
  (:import [goog.date UtcDateTime]))

(dc/defcard "# Work in progress")

(dc/defcard-rg timepicker
  "The Date object is updated on input blur event or when enter is pressed."
  (fn [datetime _]
    [timepicker/timepicker {:value @datetime
                            :on-change (fn [x] (reset! datetime x))
                            :clearable? true}])
  (r/atom (UtcDateTime.))
  {:inspect-data true})
