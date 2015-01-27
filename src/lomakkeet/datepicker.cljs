(ns lomakkeet.datepicker
  (:require [om.core :as om :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]
            [cljs.core.async :refer [put!]]
            [sablono.core :refer-macros [html]]
            [lomakkeet.fields :as f]
            [goog.string :as gs]
            org.pikaday))

(defn jsdate->local-date [v]
  (if v
    (doto (goog.date.Date.)
      (.setYear (.getFullYear v))
      (.setMonth (.getMonth v))
      (.setDate (.getDate v)))))

(defn local-date->jsdate [v]
  (if v
    (doto (js/Date.)
      (.setYear (.getFullYear v))
      (.setMonth (.getMonth v))
      (.setDate (.getDate v))
      (.setHours 0)
      (.setMinutes 0)
      (.setSeconds 0))))

(defn date->str [v]
  (if v
    (gs/format "%d.%d.%d" (.getDate v) (inc (.getMonth v)) (.getFullYear v))))

(defn- set-limit-date [k owner]
  (let [el (om/get-state owner :el)
        fn-name  (get {:min-date "setMinDate"
                       :max-date "setMaxDate"} k)
        v (om/get-state owner k)]
    (if v
      (.call (aget el fn-name) el v))))

(defcomponent date*
  [{:keys [value]}
   owner
   {:keys [ch ks datepicker-i18n]
    :as opts}]
  (did-mount [_]
    (let [input (om/get-node owner "input")
          el (js/Pikaday. (-> {:field input
                               ; NOTE: This requires MomentJS
                               :format "D.M.YYYY"
                               :firstDay 1
                               :onSelect (fn [v]
                                           (put! ch {:type :change
                                                     :ks ks
                                                     :value (jsdate->local-date v)}))}
                              (cond-> datepicker-i18n (assoc :i18n datepicker-i18n))
                              clj->js))]
      (om/set-state! owner :el el)
      (set-limit-date :min-date owner)
      (set-limit-date :max-date owner)))
  (did-update [_ prev _]
    (let [props (om/get-state owner)]
      (if (not= (:min-date props) (:min-date prev))
        (set-limit-date :min-date owner))
      (if (not= (:max-date props) (:max-date prev))
        (set-limit-date :max-date owner))))
  (render [_]
    (html
      [:input.form-control
       {:ref "input"
        :type "text"
        :value (or (date->str value) "")
        :auto-complete false}])))

(defn date [form label ks & [opts]]
  (f/build (merge form opts
                  {:label label :ks ks}
                  (if (:empty-btn? opts)
                    {:input f/emptyable-input :real-input date*}
                    {:input date*}))))
