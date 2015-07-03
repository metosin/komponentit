(ns example.reagent.forms
  (:require [reagent.ratom :refer-macros [reaction]]
            [lomakkeet.core :as f]))

(defn form-status [form]
  (let [errors? (reaction (f/errors? @(:data form)))
        dirty?  (reaction (f/dirty? @(:data form)))]
    (fn []
      [:span
       (cond
         @errors? "Form has error(s)"
         @dirty?  "Form has unsaved edits")])))

(defn cancel-btn [form]
  (let [dirty? (reaction (f/dirty? @(:data form)))]
    (fn []
      [:button.btn.btn-primary
       {:type "button"
        :disabled (not @dirty?)
        :on-click (fn [_] (swap! (:data form) f/reset))}
       "Cancel"])))

(defn save-btn [form]
  (let [dirty? (reaction (f/dirty? @(:data form)))
        errors? (reaction (f/errors? @(:data form)))]
    (fn []
      [:button.btn.btn-primary
       {:type "button"
        :disabled (or (not @dirty?) @errors?)
        :on-click (fn [_] (swap! (:data form) f/commit))}
       "Save"])))
