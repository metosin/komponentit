(ns komponentit.timepicker
  "Work in progress"
  (:require [reagent.core :as reagent])
  (:import [goog.date UtcDateTime]))

;; FIXME: This is a mess, not used anywhere?

(defn- allow-only-numbers [e]
  (if-not (<= 48 (.-which e) 57)
    (.preventDefault e)))

(defn validate-hours [h]
  (let [hours-len (count h)
        hours-val (js/parseInt h)]
    (if (or (= hours-len 0)
            (and (= hours-len 1) (<= 0 hours-val 9))
            (and (= hours-len 2) (<= 0 hours-val 23)))
      hours-val)))

(defn validate-minutes [m]
  (let [minutes-len (count m)
        minutes-val (js/parseInt m)]
    (if (or (= minutes-len 0)
            (and (= minutes-len 1) (<= 0 minutes-val 9))
            (and (= minutes-len 2) (<= 0 minutes-val 59)))
      minutes-val)))

(defn padded-value [value]
  (if (= 1 (count value))
    (str "0" value)
    value))

(defn- clone-date [value]
  (if value
    (.clone value)
    (doto (UtcDateTime.)
      (.setHours 0)
      (.setMinutes 0)
      (.setSeconds 0))))

(defn timepicker [{:keys [value on-select on-blur clearable?] :as opts}]
  (let [hours (reagent/atom nil)
        minutes (reagent/atom nil)]
    (fn [{:keys [value on-select on-blur clearable?] :as opts}]
      [:div.timepicker
       [:input.form-control.timepicker-hours
        {:type "number"
         :placeholder "hh"
         :min 0
         :max 23
         :step 1
         :value (or @hours (if value (padded-value (str (.getHours value)))))
         :on-change (fn [e]
                      (if-let [x (validate-hours (.. e -target -value))]
                        (reset! hours x)))
         :on-blur (fn [e]
                    (if-not (js/isNaN @hours)
                      (on-select (doto (clone-date value)
                                   (.setHours @hours))))
                    (reset! hours nil)
                    (if on-blur (on-blur e))
                    nil)
         :on-key-press (fn [e]
                         (case (.-key e)
                           "Enter" (do
                                     (if-not (js/isNaN @hours)
                                       (on-select (doto (clone-date value)
                                                    (.setHours @hours))))
                                     (reset! hours nil))
                           nil)
                         (allow-only-numbers e))}]
       [:input.form-control.timepicker-minutes
        {:type "number"
         :placeholder "mm"
         :min 0
         :max 59
         :step 1
         :value (or @minutes (if value (padded-value (str (.getMinutes value)))))
         :on-change (fn [e]
                      (if-let [x (validate-minutes (.. e -target -value))]
                        (reset! minutes x)))
         :on-blur (fn [e]
                    (if-not (js/isNaN @minutes)
                      (on-select (doto (clone-date value)
                                   (.setMinutes @minutes))))
                    (reset! minutes nil)
                    (if on-blur (on-blur e))
                    nil)
         :on-key-press (fn [e]
                         (case (.-key e)
                           "Enter" (do
                                     (if-not (js/isNaN @hours)
                                       (on-select (doto (clone-date value)
                                                    (.setMinutes @minutes))))
                                     (reset! minutes nil))
                           nil)
                         (allow-only-numbers e))}]
       (if clearable?
         [:span.glyphicon.glyphicon-remove.timepicker-remove-btn
          {:on-click #(on-select nil)}])])))
