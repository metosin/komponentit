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

;; TODO: Configurable delimiter

(defn str->number [s multiplier]
  (if (str/blank? s)
    nil
    ;; huh? how is this so complex...
    (let [x (re-find #"[-]?\d*[,\.]?\d*" (str/replace s #"\s" ""))
          i (or (str/index-of x ".") (str/index-of x ","))
          x (str/replace x #"[\.,]" "")
          i (or i (count x))]
      (js/console.log s x (- (count x) i))
      (* (long x)
         multiplier
         (Math/pow 10 (- (- (count x) i)))))))

(defn number->str [value multiplier]
  (if (nil? value)
    ""
    (str (long (/ value multiplier))
         (if (not= 0 (mod value multiplier))
           (str "." (mod (js/Math.abs value) multiplier))))))

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
