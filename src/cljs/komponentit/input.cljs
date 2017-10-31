(ns komponentit.input
    "Collection of basic input elements"
  (:require [reagent.core :as reagent]
            [clojure.string :as str]))

;;
;; Base input
;;

(defn input
  "Input with debounced on-change. On-change also run on Enter key and on-blur event."
  [_]
  (let [temp (reagent/atom nil)
        timeout (atom nil)]
    (fn [{:keys [el value value-fn text-fn on-change type on-blur timeout-ms on-key-press]
          :or {text-fn identity
               value-fn identity
               timeout-ms 250
               el :input}
          :as opts}]
      [el
       (-> opts
           (dissoc :el :timeout-ms :value-fn :text-fn)
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
                               nil)
                             (if on-key-press
                               (on-key-press e)))))])))

;;
;; Text alias
;;

(defn text
  [{:keys [value on-change] :as opts}]
  [input opts])

;;
;; Number input
;;

(defn str->number
  ([s] (str->number s nil))
  ([s {:keys [multiplier]
       :or {multiplier 1}}]
   (if (str/blank? s)
     nil
     (let [s (-> s
                 (str/replace #"\s" "")
                 (str/replace #"," "."))]
       (* (js/parseFloat s) multiplier)))))

(defn number->str
  "Options:
  - :precision - maximum number of digits after delimiter
  - :min-precision - minimum number of digits after delimiter, zero padded if neeeded"
  ([value] (number->str value nil))
  ([value {:keys [multiplier precision min-precision delimiter]
           :or {multiplier 1
                precision 2
                min-precision 0
                delimiter "."}}]
   (if (nil? value)
     ""
     ;; TODO: toLocaleString
     (str (long (/ value multiplier))
          (if (or (not= 0 (mod value multiplier)) (> min-precision 0))
            (str delimiter (subs (str/replace (str (mod (js/Math.abs value) multiplier)
                                                   ;; Add additional padding for precision
                                                   (apply str (repeat min-precision "0")))
                                              #"0\." "")
                                 0 precision)))))))

(defn number
  [{:keys [value on-change on-blur]
    :as opts}]
  [input
   (-> opts
       (dissoc :multiplier :precision :min-precision :delimiter)
       (assoc
         :value-fn #(str->number % opts)
         :text-fn #(number->str % opts)))])

;;
;; Password
;;

(defn password
  [{:as opts}]
  [input (assoc opts
                :type "password")])

;;
; Textarea
;;

(defn textarea
  [opts]
  [input
   (assoc opts
          :el :textarea
          :type nil)])

;;
;; Static
;;

(defn static
  [{:keys [value] :as opts}]
  [:p
   (if (map? opts) opts {})
   value])

;;
;; Selectbox
;;

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

;;
;; Checkbox
;;

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
