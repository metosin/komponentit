(ns example.autosize
  (:require [komponentit.autosize :as autosize]
            [reagent.core :as r]
            [devcards.core :as dc :include-macros true]
            [clojure.string :as str]))

(dc/defcard-rg autosize-example
  (fn [value _]
    [:div
     [:div
      [:label "Input"]
      [:div
       [autosize/input
        {:value @value
         :on-change (fn [e] (reset! value (.. e -target -value)))}]]]
     [:div
      [:label "Input with placeholder"]
      [:div
       [autosize/input
        {:value @value
         :placeholder "placeholder"
         :on-change (fn [e] (reset! value (.. e -target -value)))}]]]
     [:div
      [:label "Input with placeholder as min width"]
      [:div
       [autosize/input
        {:value @value
         :placeholder "placeholder"
         :placeholder-is-min-width? true
         :on-change (fn [e] (reset! value (.. e -target -value)))}]]]])
  (r/atom "abc")
  {:inspect-data true})

(dc/defcard-rg textarea-example
  (fn [value _]
    [:div
     [:div
      [:label "Textarea"]
      [:div
       [autosize/textarea
        {:value @value
         :on-change (fn [e] (reset! value (.. e -target -value)))}]]]])
  (r/atom "abc
foo

bar
zzz")
  {:inspect-data true})
