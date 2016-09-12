(ns komponentit.currency-input
  (:require [reagent.core :as r]
            [reagent.ratom :refer-macros [reaction]]
            [clojure.string :as str]
            [komponentit.input :as input]))

(defn- zero-to-end [s]
  (if (= 1 (count s))
    (str s "0")
    s))

(defn str->currency [s]
  (if (str/blank? s)
    nil
    (let [[_ minus? a _ b] (re-find #"([-])?(\d*)([,.](\d*))?" (str/replace s #"\s" ""))
          f (if (seq minus?) - identity)]
      (f (+ (long (* 100 a)) (some-> b (.substring 0 2) zero-to-end long))))))

(defn padded-value [value]
  (if (= 1 (count value))
    (str "0" value)
    value))

(defn currency->str [value delimiter]
  (if (nil? value)
    ""
    (str (long (/ value 100))
         delimiter
         (padded-value (str (mod (js/Math.abs value) 100))))))

(defn currency-input
  [{:keys [currency-symbol delimiter]
    :or {delimiter "."}
    :as opts}]
  [:span
   [input/input
    (-> opts
        (dissoc :current-symbol :delimiter)
        (assoc
          :value-fn #(str->currency %)
          :text-fn #(currency->str % delimiter)))]
   (if currency-symbol
     [:span.input-group-addon currency-symbol])])
