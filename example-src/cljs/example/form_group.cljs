(ns example.form-group
  (:require [komponentit.input :as input]
            [komponentit.form-group :refer [form-group]]
            [reagent.core :as r]
            [devcards.core :as dc :include-macros true]
            [example.options :as options]))

(dc/defcard-rg form-group
  (fn [data _]
    [:div
     [form-group
      {:label "Normal"
       :error (if (< (:value @data) 500) "Value should be greater than 500")
       :pristine (:pristine @data)}
      [input/number
       {:value (:value @data)
        :on-change (fn [x] (swap! data assoc :value x))
        :on-blur #(swap! data assoc :pristine false)}]]
     [:button.btn.btn-default
      {:on-click #(reset! data {:value 100 :pristine true})}
      "Reset"]])
  (r/atom {:value 100
           :pristine true})
  {:inspect-data true})
