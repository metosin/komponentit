(ns example.reagent.forms
  (:require [reagent.ratom :refer-macros [reaction]]
            [lomakkeet.core :as f]))

(defn form-status [fs]
  (let [errors? (reaction (f/errors? @fs))
        dirty?  (reaction (f/dirty? @fs))]
    (fn []
      [:span
       (cond
         @errors? "Form has error(s)"
         @dirty?  "Form has unsaved edits")])))

(defn cancel-btn [fs]
  (let [dirty? (reaction (f/dirty? @fs))]
    (fn []
      [:button.btn.btn-primary
       {:type "button"
        :disabled (not @dirty?)
        :on-click identity}
       "Cancel"])))

(defn save-btn [fs]
  (let [errors? (reaction (f/errors? @fs))]
    (fn []
      [:button.btn.btn-primary
       {:type "button"
        :disabled @errors?
        :on-click identity}
       "Save"])))
