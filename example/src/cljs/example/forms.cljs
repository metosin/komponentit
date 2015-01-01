(ns example.forms
  (:require [cljs.core.async :refer [put!]]))

(defn humanize-error [x]
  (if (instance? schema.utils.ValidationError x)
    (let [[b] @(.-expectation-delay x)]
      (if (symbol? b)
        (str b)
        "virhe"))
    "virhe"))

(defn form-status [{:keys [errors value initial-value]}]
  (cond
    (and (not empty?) errors)  "Form has error(s)"
    (not= value initial-value) "Form has unsaved edits"))

(defn cancel-btn [form-state ch]
  [:button.btn.btn-primary
   {:type "button"
    :disabled (= (:value form-state) (:initial-value form-state))
    :on-click #(put! ch {:type :cancel})}
   "Cancel"])

(defn save-btn [form-state ch]
  [:button.btn.btn-primary
   {:type "button"
    :disabled (seq (:errors form-state))
    :on-click #(put! ch {:type :action, :action :save})}
   "Save"])
