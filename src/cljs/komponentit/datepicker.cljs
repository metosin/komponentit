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

(defn date [{:keys [value on-change i18n min-date max-date date-time? attrs clearable? disabled? week-numbers?
                    container-class input-class]
             :or {container-class "datepicker__container "
                  input-class "datepicker "}
             :as opts}]
  (r/with-let [open? (r/atom false)
               input-value (r/atom nil)
               el (atom nil)
               closable (mixins/create-closable (fn [e]
                                                  (when (or (= "keydown" (.-type e))
                                                            (and @el (not (dom/contains @el (.-target e)))))
                                                    (reset! open? false))))]
    [:div
     {:class (str container-class
                  (if disabled? "datepicker--disabled "))
      :ref #(reset! el %)}
     [:input
      (merge
        attrs
        {:class     input-class
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
                                    (if on-change
                                      (on-change (date/date-read @input-value (loc i18n :date-format))))
                                    (reset! input-value nil))
                          nil))
         :disabled  disabled?})]
     (if @open?
       [calendar/calendar
        {:container-class "datepicker__dropdown calendar"
         :value value
         :on-change on-change
         :week-numbers? week-numbers?
         :i18n i18n
         :date-input? false}])
     (if clearable?
       [:button.datepicker__clear-button
        {:type     "button"
         :disabled disabled?
         :on-click (fn [e]
                     (if on-change (on-change nil))
                     nil)}])]
    (finally (closable))))
