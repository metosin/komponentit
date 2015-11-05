(ns lomakkeet.date
  (:require [goog.string :as gs]
            goog.date.Date)
  (:import [goog.i18n DateTimeFormat DateTimeParse]))

(defn jsdate->local-date [v]
  (if v
    (doto (goog.date.Date.)
      (.setYear (.getFullYear v))
      (.setMonth (.getMonth v))
      (.setDate (.getDate v)))))

(defn jsdate->date-time [v]
  (if v
    (doto (goog.date.UtcDateTime.)
      (.setYear (.getFullYear v))
      (.setMonth (.getMonth v))
      (.setDate (.getDate v))
      (.setHours 0)
      (.setMinutes 0)
      (.setSeconds 0))))

(defn local-date->jsdate [v]
  (if v
    (doto (js/Date.)
      (.setYear (.getFullYear v))
      (.setMonth (.getMonth v))
      (.setDate (.getDate v))
      (.setHours 0)
      (.setMinutes 0)
      (.setSeconds 0))))

(defn date-time->jsdate [v]
  (if v
    (doto (js/Date.)
      (.setYear (.getFullYear v))
      (.setMonth (.getMonth v))
      (.setDate (.getDate v))
      (.setHours (.getHours v))
      (.setMinutes (.getMinutes v))
      (.setSeconds (.getSeconds v)))))

(defn date->str [v]
  (if v
    (gs/format "%d.%d.%d" (.getDate v) (inc (.getMonth v)) (.getFullYear v))))

(defn date-format [d f]
  (if d
    (.format (DateTimeFormat. f) d)))

(defn date-read [s f]
  (let [date (goog.date.Date. 0 0 0)]
    (.strictParse (DateTimeParse. f) s date)
    (if (not= 0 (.getYear date))
      date)))
