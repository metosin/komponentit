(ns example.reagent.forms
  (:require [reagent.ratom :refer-macros [reaction]]
            [lomakkeet.core :as f]))

(defn form-status [form]
  (let [errors? (reaction (f/errors? @(:cursor form)))
        dirty?  (reaction (f/dirty? @(:cursor form)))]
    (fn []
      [:span
       (cond
         @errors? "Form has error(s)"
         @dirty?  "Form has unsaved edits")])))

(defn cancel-btn [form]
  (let [dirty? (reaction (f/dirty? @(:cursor form)))]
    (fn []
      [:button.btn.btn-primary
       {:type "button"
        :disabled (not @dirty?)
        :on-click identity}
       "Cancel"])))

(defn save-btn [form]
  (let [errors? (reaction (f/errors? @(:cursor form)))]
    (fn []
      [:button.btn.btn-primary
       {:type "button"
        :disabled @errors?
        :on-click identity}
       "Save"])))
