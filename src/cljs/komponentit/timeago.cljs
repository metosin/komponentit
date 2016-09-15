(ns komponentit.timeago
  (:require [reagent.core :as r]
            [goog.date.duration :as duration])
  (:import [goog.date DateTime]
           [goog.i18n DateTimeFormat MessageFormat]))

(defn humanize-duration [ms]
  (let [seconds (/ ms 1000)
        future? (neg? seconds)
        seconds (js/Math.abs seconds)
        minutes (/ seconds 60)
        hours (/ minutes 60)
        days (/ hours 24)
        ;; From Moment, 400 years = 146097 days = 4800 months
        months (/ (* days 4800) 146097)
        years (/ months 12)]
    (cond
      (< seconds 45) [:ss (int seconds) future?]
      (<= minutes 1) [:m 1 future?]
      (< minutes 45) [:mm (int minutes) future?]
      (<= hours 1) [:h 1 future?]
      (< hours 22) [:hh (int hours) future?]
      (<= days 1) [:d 1 future?]
      (< days 26) [:dd (int days) future?]
      (<= months 1) [:M 1 future?]
      (< months 11) [:MM (int months) future?]
      (<= years 1) [:y 1 future?]
      :else [:yy (int years) future?])))

(defn default-format [k v future?]
  (str (case k
         :ss (str v " seconds")
         :m "minute"
         :mm (str v " minutes")
         :h "hour"
         :hh (str v " hours")
         :d "day"
         :dd (str v " days")
         :M "month"
         :MM (str v " months")
         :y "year"
         :yy (str v " years"))
       (if future?
         " from now"
         " ago")))

(def minute-ms (* 60 1000))
(def hour-ms (* 60 minute-ms))
(def day-ms (* 24 hour-ms))

(defn timeago
"- value
- format-fn - Default function to localize data to English."
  [_]
  (let [now (r/atom (DateTime.))
        timeout (atom nil)
        tick-fn (fn tick-fn [this]
                  (if @timeout (js/clearTimeout @timeout))
                  (reset! now (DateTime.))
                  (let [ms (- @now (:value (r/props this)))
                        period (cond
                                 (< ms minute-ms) 1000
                                 (< ms hour-ms) minute-ms
                                 (< ms day-ms) hour-ms
                                 :else nil)]
                    (if period
                      (js/setTimeout #(tick-fn this) period))))]
    (r/create-class
      {:display-name "komponentit.timeago.timeago"
       :component-did-mount
       (fn [this]
         (tick-fn this))
       :component-will-unmount
       (fn [this]
         (if @timeout (js/clearTimeout @timeout)))
       :component-did-update
       (fn [this [_ prev-props]]
         ;; Update if value changes
         (when (not= (:value prev-props) (:value (r/props this)))
           (tick-fn this)))
       :reagent-render
       (fn [{:keys [value format-fn]
             :or {format-fn default-format}}]
         [:span (apply format-fn (humanize-duration (- @now value)))]) })))
