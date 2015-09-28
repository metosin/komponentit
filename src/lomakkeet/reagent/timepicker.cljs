(ns lomakkeet.reagent.timepicker
  (:require [reagent.core :as reagent :refer [atom]]
            [reagent.ratom :refer-macros [reaction run!]]
            [lomakkeet.date :refer [date->str jsdate->local-date jsdate->date-time]]
            [lomakkeet.reagent.impl :as impl]
            [potpuri.core :as p]))

(defn- allow-only-numbers [e]
  (if-not (<= 48 (.-which e) 57)
    (.preventDefault e)))

(defn valid-hours? [h]
  (let [hours-len (count h)
        hours-val (js/parseInt h)]
    (cond (= hours-len 0) true
          (= hours-len 1) (<= 0 hours-val 9)
          (= hours-len 2) (<= 0 hours-val 23)
          :default false)))

(defn valid-minutes? [m]
  (let [minutes-len (count m)
        minutes-val (js/parseInt m)]
    (cond (= minutes-len 0) true
          (= minutes-len 1) (<= 0 minutes-val 9)
          (= minutes-len 2) (<= 0 minutes-val 59)
          :default false)))

(defn padded-value [value]
  (if (= 1 (count value))
    (str "0" value)
    value))

(defn time* [form {:keys [ks clearable?] :as opts}]
  (let [form-value (reaction (:value @(:data form)))
        form-time (get-in @form-value ks)
        time (if form-time
               (atom form-time)
               (atom nil))]
    (run!
      (let [t @time]
        (if (and (-> t :hours :value-set?) (-> t :minutes :value-set?))
          (impl/cb form ks t))))
    (fn []
      [:div.timepicker
       [:input.form-control.timepicker-hours
        {:type "number"
         :placeholder "hh"
         :min 0
         :max 23
         :step 1
         :value (-> @time :hours :value)
         :on-change (fn [e]
                      (let [value (.. e -target -value)]
                        (if (valid-hours? value)
                          (swap! time (fn [time]
                                        (-> time
                                          (assoc-in [:hours :value] value)
                                          (assoc-in [:hours :value-set?] true))))
                          (.preventDefault e))))
         :on-blur (fn [e]
                    (let [value (.. e -target -value)]
                      (swap! time (fn [time] (assoc-in time [:hours :value] (padded-value value))))))
         :on-key-press allow-only-numbers}]
       [:input.form-control.timepicker-minutes
        {:type "number"
         :placeholder "mm"
         :min 0
         :max 59
         :step 1
         :value (-> @time :minutes :value)
         :on-change (fn [e]
                      (let [value (.. e -target -value)]
                        (if (valid-minutes? value)
                          (swap! time (fn [time]
                                        (-> time
                                          (assoc-in [:minutes :value] value)
                                          (assoc-in [:minutes :value-set?] true))))
                          (.preventDefault e))))
         :on-blur (fn [e]
                    (let [value (.. e -target -value)]
                      (swap! time (fn [time] (assoc-in time [:minutes :value] (padded-value value))))))
         :on-key-press allow-only-numbers}]
       (if clearable?
         [:span.glyphicon.glyphicon-remove.timepicker-remove-btn
          {:on-click #(do
                       (impl/cb form ks nil)
                       (reset! time nil))}])])))