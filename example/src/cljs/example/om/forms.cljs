(ns example.om.forms
  (:require [lomakkeet.core :as f]
            [lomakkeet.action :refer [action!]]))

(defn form-status [fs]
  (cond
    (f/errors? fs) "Form has error(s)"
    (f/dirty? fs)  "Form has unsaved edits"))

(defn cancel-btn [fs form]
  [:button.btn.btn-primary
   {:type "button"
    :disabled (not (f/dirty? fs))
    :on-click #(action! form {:type :cancel})}
   "Cancel"])

(defn save-btn [fs form]
  [:button.btn.btn-primary
   {:type "button"
    :disabled (f/errors? fs)
    :on-click #(action! form {:type :save})}
   "Save"])
