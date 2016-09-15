(ns komponentit.input
    "Collection of basic input elements"
  (:require [reagent.core :as reagent]
            [clojure.string :as str]))

(defn input
  [_]
  (let [temp (reagent/atom nil)
        timeout (atom nil)]
    (fn [{:keys [el value value-fn text-fn on-change type on-blur timeout-ms]
          :or {text-fn identity
               value-fn identity
               timeout-ms 250
               el :input}
          :as opts}]
      [el
       (-> opts
           (assoc
             :value (or @temp (text-fn value) "")
             :on-change (fn [e]
                          ;; FIXME: is it problem that this is hardcoded?
                          (let [v (.. e -target -value)]
                            (swap! timeout (fn [current]
                                             (if current (js/clearTimeout current))
                                             (js/setTimeout (fn [_]
                                                              (if on-change
                                                                (on-change (value-fn v))))
                                                            timeout-ms)))
                            (reset! temp v)))
             :on-blur (fn [e]
                        (swap! temp (fn [x]
                                      (if x
                                        (if on-change
                                          (on-change (value-fn x))))
                                      nil))
                        (if on-blur
                          (on-blur e)))
             :on-key-press (fn [e]
                             (case (.-key e)
                               "Enter" (swap! temp (fn [x]
                                                     (if x
                                                       (if on-change
                                                         (on-change (value-fn x))))
                                                     nil))
                               nil))))])))

(defn text
  [{:keys [value on-change] :as opts}]
  [input opts])

;; FIXME: Very similar to currency-input
;; TODO: Refactor as stateful-input which can be used by both this and currency input?

(defn str->number [s multiplier]
  (if (str/blank? s)
    nil
    (let [[_ minus? a _ b] (re-find #"([-])?(\d*)([,.](\d*))?" (str/replace s #"\s" ""))
          f (if (seq minus?) - identity)]
      (f (+ (long (* multiplier a)) (some-> b (.substring 0 2) long))))))

(defn number->str [value multiplier]
  (if (nil? value)
    ""
    (str (long (/ value multiplier)))))

(defn number
  [{:keys [value on-change on-blur multiplier]
    :or {multiplier 1}
    :as opts}]
  [input
   (-> opts
       (dissoc :multiplier)
       (assoc
         :value-fn #(str->number % multiplier)
         :text-fn #(number->str % multiplier)))])

(defn password
  [{:as opts}]
  [input (assoc opts
                :type "password")])

(defn textarea
  [opts]
  [input
   (assoc opts
          :el :textarea
          :type nil)])

(defn static
  [{:keys [value] :as opts}]
  [:p
   (if (map? opts) opts {})
   value])

(def +empty-value+ "komponentit.input/empty-value")

(defn select
  [{:keys [value on-change on-blur empty-option? options value-fn]
    :or {value-fn identity}
    :as opts}]
  [:select
   (-> opts
       (dissoc :empty-option? :value-fn :options)
       (assoc
         :value (or value
                    (if empty-option? +empty-value+)
                    "")
         :on-change (fn [e]
                      (let [v (.. e -target -value)
                            v (if (= +empty-value+ v) nil v)]
                        (on-change (value-fn v))))
         :on-blur on-blur))
   (if empty-option?
     [:option {:value +empty-value+} "---"])
   (for [{:keys [value text]} options]
     [:option {:value value :key value} text])])

(defn checkbox
  [{:keys [value on-change on-blur]
    :as opts}]
  [:input
   (-> opts
       (dissoc :value)
       (assoc :type "checkbox"
              :checked (boolean value)
              :on-change #(on-change (.. % -target -checked))
              :on-blur on-blur))])
