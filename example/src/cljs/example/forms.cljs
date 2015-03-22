(ns example.forms
  (:require [cljs.core.async :refer [put!]]
            [lomakkeet.core :as f]))

(defn form-status [fs]
  (cond
    (f/errors? fs) "Form has error(s)"
    (f/dirty? fs)  "Form has unsaved edits"))

(defn cancel-btn [fs ch]
  [:button.btn.btn-primary
   {:type "button"
    :disabled (not (f/dirty? fs))
    :on-click #(put! ch {:type :cancel})}
   "Cancel"])

(defn save-btn [fs ch]
  [:button.btn.btn-primary
   {:type "button"
    :disabled (f/errors? fs)
    :on-click #(put! ch {:type :action, :action :save})}
   "Save"])
