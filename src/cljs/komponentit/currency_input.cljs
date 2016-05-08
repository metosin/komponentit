(ns komponentit.currency-input
  (:require [reagent.core :as r]
            [reagent.ratom :refer-macros [reaction]]
            [clojure.string :as str]))

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

;; TODO: Refactor to use number input

(defn currency-input [{:keys [value on-change on-blur currency-symbol delimiter]}]
  (let [temp (r/atom nil)]
    (fn [{:keys [value on-change on-blur currency-symbol delimiter]}]
      [:span.input-group
       [:input.form-control
        {:value (or @temp (currency->str value (or delimiter ".")))
         :on-change (fn [e]
                      (reset! temp (.. e -target -value))
                      nil)
         :on-blur (fn [e]
                    (if @temp
                      (on-change (str->currency @temp)))
                    (reset! temp nil)
                    (if on-blur
                      (on-blur e))
                    nil)
         :on-key-press (fn [e]
                         (case (.-key e)
                           "Enter" (do
                                     (if @temp
                                       (on-change (str->currency @temp)))
                                     (reset! temp nil))
                           nil)
                         nil)}]
       [:span.input-group-addon (or currency-symbol "€")]])))
