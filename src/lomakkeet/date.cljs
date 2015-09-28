(ns lomakkeet.date
  (:require [goog.string :as gs]
            [goog.date :as date]))

(defn jsdate->local-date [v]
  (if v
    (doto (date/Date.)
      (.setYear (.getFullYear v))
      (.setMonth (.getMonth v))
      (.setDate (.getDate v)))))

(defn jsdate->date-time [v]
  (if v
    (doto (date/UtcDateTime.)
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
