(ns example.options
  (:require [reagent.core :as r]))

(defn field [k value type cb]
  (case type
    :string [:input.form-control
             {:type "text"
              :value value
              :on-change #(cb (.. % -target -value))}]
    :bool   [:input
             {:type "checkbox"
              :checked value
              :on-change #(cb (.. % -target -checked))}]))

(defn table [current cb options]
  [:table.table
   [:thead
    [:th "Option"]
    [:th "Value"]]
   [:tbody
    (for [[k type] options]
      [:tr
       {:key k}
       [:td [:code ":" (name k)]]
       [:td [field k (get current k) type (fn [v] (cb k v))]]])]])
