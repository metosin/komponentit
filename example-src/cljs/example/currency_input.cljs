(ns example.currency-input
  (:require [lomakkeet.reagent.currency-input :as currency-input]
            [reagent.core :as r]
            [cljs.test :refer-macros [is]]
            [devcards.core :as dc :include-macros true])
  (:import [goog.date Date]))

(dc/defcard-rg currency-input
  (fn [value _]
    [currency-input/currency-input
     {:value @value
      :on-change (fn [x] (reset! value x))
      :currency-symbol "€"}])
  (r/atom nil)
  {:inspect-data true})

(dc/deftest str->currency-test
  (is (= 1000 (currency-input/str->currency "10.0")))
  (is (= 1000 (currency-input/str->currency "10,0")))
  (is (= 1050 (currency-input/str->currency "10.50")))
  (is (= 1050 (currency-input/str->currency " 	10.50")))
  (is (= 1050 (currency-input/str->currency "10.50abc")))
  (is (= 1050 (currency-input/str->currency "10,50")))
  (is (= 1050 (currency-input/str->currency "10.505")))
  (is (= 1000 (currency-input/str->currency "10")))
  (is (= 1000000 (currency-input/str->currency "10 000")))
  (is (= 100000000 (currency-input/str->currency "1 000 000")))
  (is (= 10 (currency-input/str->currency ".10")))
  (is (= 10 (currency-input/str->currency ",10")))
  (is (= -1055 (currency-input/str->currency "-10,55")))
  (is (= nil (currency-input/str->currency "")))
  (is (= nil (currency-input/str->currency "  	")))
  )

(dc/deftest currency->str-test
  (is (= "10,00" (currency-input/currency->str 1000 ",")))
  (is (= "10.00" (currency-input/currency->str 1000 ".")))
  (is (= "10,50" (currency-input/currency->str 1050 ",")))
  (is (= "-10,00" (currency-input/currency->str -1000 ",")))
  (is (= "-10,45" (currency-input/currency->str -1045 ",")))
  (is (= "1,00" (currency-input/currency->str 100 ",")))
  (is (= "" (currency-input/currency->str nil ",")))
  )
