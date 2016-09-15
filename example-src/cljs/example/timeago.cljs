(ns example.timeago
  (:require [komponentit.timeago :as timeago]
            [reagent.core :as r]
            [devcards.core :as dc :include-macros true]
            [clojure.string :as str])
  (:import [goog.date DateTime Interval]))

(dc/defcard
  (str
"# Timeago
" (:doc (meta #'timeago/timeago))))

(defn in [x interval]
  (doto (DateTime.)
    (.add (Interval. interval x))))

(defn ago [x interval]
  (doto (DateTime.)
    (.add (.getInverse (Interval. interval x)))))

(defn example-data []
  [[:in-1-minute (in 45 Interval.SECONDS)]
   [:in-5-minutes (in 5 Interval.MINUTES)]
   [:in-1-hour (in 46 Interval.MINUTES)]
   [:in-5-hours (in 5 Interval.HOURS)]
   [:in-1-day (in 23 Interval.HOURS)]
   [:in-5-days (in 5 Interval.DAYS)]
   [:in-1-month (in 27 Interval.DAYS)]
   [:in-5-months (in 5 Interval.MONTHS)]
   [:in-1-year (in 12 Interval.MONTHS)]
   [:in-5-years (in 5 Interval.YEARS)]
   [:now (DateTime.)]
   [:1-minute (ago 45 Interval.SECONDS)]
   [:5-minutes (ago 5 Interval.MINUTES)]
   [:1-hour (ago 45 Interval.MINUTES)]
   [:5-hours  (ago 5 Interval.HOURS)]
   [:1-day (ago 22 Interval.HOURS)]
   [:5-days (ago 5 Interval.DAYS)]
   [:1-month (ago 26 Interval.DAYS)]
   [:5-months (ago 5 Interval.MONTHS)]
   [:1-year (ago 11 Interval.MONTHS)]
   [:5-years (ago 5 Interval.YEARS)]])

(dc/defcard-rg timeago-example
  (fn [value _]
    [:div
     (for [[k v] @value]
       [:div
        {:key k}
        [:strong (name k) ": "]
        [timeago/timeago {:value v}]])
     [:button
      {:type "button"
       :on-click #(reset! value (example-data))}
      "Reset data"]])
  (r/atom (example-data))
  {:inspect-data true})
