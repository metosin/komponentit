(ns komponentit.timeago
  (:require [reagent.core :as r])
  (:import [goog.date DateTime]))

(defn humanize-duration [ms]
  (let [seconds (/ ms 1000)
        seconds (js/Math.abs seconds)
        minutes (/ seconds 60)
        hours (/ minutes 60)
        days (/ hours 24)
        ;; From Moment, 400 years = 146097 days = 4800 months
        months (/ (* days 4800) 146097)
        years (/ months 12)]
    (cond
      (< seconds 45) [:ss (int seconds)]
      (<= minutes 1) [:m 1]
      (< minutes 45) [:mm (int minutes)]
      (<= hours 1) [:h 1]
      (< hours 22) [:hh (int hours)]
      (<= days 1) [:d 1]
      (< days 26) [:dd (int days)]
      (<= months 1) [:M 1]
      (< months 11) [:MM (int months)]
      (<= years 1) [:y 1]
      :else [:yy (int years)])))

(defn default-format-2 [{:keys [duration-type duration-value diff-ms]}]
  (str (case duration-type
         :ss (str duration-value " seconds")
         :m "minute"
         :mm (str duration-value " minutes")
         :h "hour"
         :hh (str duration-value " hours")
         :d "day"
         :dd (str duration-value " days")
         :M "month"
         :MM (str duration-value " months")
         :y "year"
         :yy (str duration-value " years"))
       (if (neg? diff-ms)
         " from now"
         " ago")))

(defn default-format [k v future?]
  (default-format-2 {:duration-type k
                     :duration-value v
                     :diff-ms (if future? -1 1)}))

(def minute-ms (* 60 1000))
(def hour-ms (* 60 minute-ms))
(def day-ms (* 24 hour-ms))

(defn timeago-2
  "- value
- format-fn - Default function to localize data to English."
  [_]
  (let [now (r/atom (DateTime.))
        timeout (atom nil)
        tick-fn (fn tick-fn [this]
                  (when @timeout
                    (js/clearTimeout @timeout))
                  (reset! now (DateTime.))
                  (let [ms (js/Math.abs (- @now (:value (r/props this))))
                        period (cond
                                 (< ms minute-ms) 1000
                                 (< ms hour-ms) minute-ms
                                 (< ms day-ms) hour-ms
                                 :else nil)]
                    (when period
                      (js/setTimeout #(tick-fn this) period))))]
    (r/create-class
      {:display-name "komponentit.timeago.timeago"
       :component-did-mount
       (fn [this]
         (tick-fn this))
       :component-will-unmount
       (fn [_this]
         (when @timeout
           (js/clearTimeout @timeout)))
       :component-did-update
       (fn [this [_ prev-props]]
         ;; Update if value changes
         (when (not= (:value prev-props) (:value (r/props this)))
           (tick-fn this)))
       :reagent-render
       (fn [{:keys [value format-fn]
             :or {format-fn default-format-2}}]
         (let [diff (- @now value)
               [duration-type duration] (humanize-duration diff)]
           [:span (format-fn
                    {:diff-ms diff
                     :duration-type duration-type
                     :duration-value duration})]))})))

(defn timeago
  "- value
- format-fn - Default function to localize data to English."
  {:deprecated true}
  [opts]
  [timeago-2
   (update opts :format-fn (fn [f]
                             (let [f (or f default-format)]
                               (fn [{:keys [duration-type duration-value diff-ms]}]
                                 (f duration-type duration-value (neg? diff-ms))))))])
