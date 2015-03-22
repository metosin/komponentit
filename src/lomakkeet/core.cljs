(ns lomakkeet.core
  (:refer-clojure :exclude [update])
  (:require [schema.core :as s :include-macros true]
            [schema-tools.core :as st]))

;;
;; Form state
;;

(s/defschema FormState
  {::value s/Any
   ::initial-value s/Any
   ::errors s/Any
   ::schema s/Any
   ::metadata s/Any
   ::disabled s/Bool
   s/Keyword s/Any})

(defn ->fs
  ([value] (->fs value nil))
  ([value schema]
   {::value value
    ::initial-value value
    ::errors (if schema (s/check schema value))
    ::schema schema
    ::metadata nil
    ::disabled false}))

;;
;; Updating the state
;;

(defn reset
  "Reset the value of form to initial value."
  [fs]
  (assoc fs ::value (::initial-value fs)))

(defn commit
  "Commit the changes in value to the initial-value of the form."
  [fs]
  (assoc fs ::initial-value (::value fs)))

(defn save
  "Set a new value to form. This changes both the value and the initial value.
   This will trigger a schema validation for the value."
  [fs value]
  (let [schema (::schema fs)]
    (assoc fs
           ::value value
           ::initial-value value
           ::errors (if schema (s/check schema value)))))

(defn update
  "Use a function to set a new value to form. This changes both the value and the initial value.
   The function is called with the value as the first parameter and rest of arguemtns
   are passed to the function (Like update-in)."
  [fs f & args]
  (let [value (::value fs)
        new-value (apply f value args)]
    (save fs new-value)))

;;
;; Predicates
;;

(defn dirty?
  "Check if form-state is dirty, meaning that the value and the initial value are not identitcal."
  [fs]
  (not= (::value fs) (::initial-value fs)))

(defn errors?
  "Check if form has any errors."
  [fs]
  (seq (::errors fs)))
