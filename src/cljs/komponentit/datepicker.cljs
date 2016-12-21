(ns komponentit.datepicker
  (:require [reagent.core :as r]
            [clojure.string :as string]
            [komponentit.date :as date]
            [komponentit.calendar :as calendar]
            [komponentit.mixins :as mixins]
            [goog.dom :as dom])
  (:import [goog.date Date UtcDateTime]))

(defn- clone-date [{:keys [date-time?]} value]
  (if value
    (.clone value)
    (if date-time?
      (doto (UtcDateTime.)
        (.setHours 0)
        (.setMinutes 0)
        (.setSeconds 0))
      (Date.))))

(def default-i18n
  {:date-format "d.M.yyyy"})

(defn loc [i18n k]
  (or (get i18n k)
      (get default-i18n k)))

(defn validate [{:keys [min-date max-date] :as opts} v]
  (cond
    (and min-date max-date) (<= min-date v max-date)
    min-date (<= min-date v)
    max-date (<= v max-date)
    :else true))

(defn date [_]
  (let [open? (r/atom false)
        input-value (r/atom nil)
        el (atom nil)
        el-ref #(reset! el %)]
    (fn [{:keys [value on-change i18n min-date max-date date-time? clearable? disabled week-numbers?
                 container-class input-class]
          :or {container-class "datepicker__container "
               input-class "datepicker "}
          :as opts}]
      [:div
       {:class (str container-class
                    (if disabled "datepicker--disabled "))
        :ref el-ref}
       [:input
        (-> opts
            (dissoc :clearable? :min-date :max-date :i18n :date-time? :week-numbers? :container-class :input-class)
            (assoc :class     input-class
                   :type      "text"
                   :value     (or @input-value (date/date->str value) "")
                   :on-change (fn [e]
                                (reset! input-value (string/trim (.. e -target -value))))
                   :on-focus  (fn [_]
                                (reset! open? true))
                   :on-blur   (fn [_]
                                (reset! input-value nil))
                   :on-key-down (fn [e]
                                  (case (.-key e)
                                    "Enter" (do
                                              (when on-change
                                                ;; if empty, enter runs default action = sends form
                                                (when (seq @input-value)
                                                  ;; stop form send
                                                  (.preventDefault e)
                                                  (let [v (date/date-read @input-value (loc i18n :date-format))]
                                                    (if (validate opts v)
                                                      (on-change v))))
                                                (reset! open? false))
                                              (reset! input-value nil))
                                    nil))
                   :disabled  disabled))]
       (if @open?
         [mixins/window-event-listener
          {:on-click
           (fn [e]
             (when (and @el (not (dom/contains @el (.-target e))))
               (reset! open? false)))
           :on-key-down
           (fn [e]
             (case (.-keyCode e)
               27 (reset! open? false)
               nil))}
          [calendar/calendar
           {:container-class "datepicker__dropdown calendar"
            :value value
            :on-change (fn [v]
                         (reset! open? false)
                         (if on-change (on-change v)))
            :week-numbers? week-numbers?
            :i18n i18n
            :date-input? false
            :min-date min-date
            :max-date max-date}]])
       (if clearable?
         [:button.datepicker__clear-button
          {:type     "button"
           :disabled disabled
           :on-click (fn [e]
                       (if on-change (on-change nil))
                       nil)}])])))
