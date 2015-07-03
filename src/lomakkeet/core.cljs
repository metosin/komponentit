(ns lomakkeet.core
  (:refer-clojure :exclude [update])
  (:require [schema.core :as s]
            [schema.coerce :as sc]
            [schema.utils :as su]
            [schema-tools.core :as st]
            [lomakkeet.util :refer [dissoc-in]]))

(def ^:dynamic *coercion-matcher* sc/string-coercion-matcher)

;;
;; Form state
;;

(s/defschema FormState
  {:value s/Any
   :initial-value s/Any
   :errors s/Any
   :not-pristine s/Any
   :schema s/Any
   s/Keyword s/Any})

(defn ->fs
  ([value] (->fs value nil))
  ([value schema]
   {:value value
    :initial-value value
    :errors (if schema (s/check schema value))
    :not-pristine nil
    :schema schema}))

;;
;; Updating the state
;;

(defn reset
  "Reset the value of form to initial value."
  [fs]
  (assoc fs :value (:initial-value fs)))

(defn commit
  "Commit the changes in value to the initial-value of the form."
  [fs]
  (assoc fs :initial-value (:value fs)))

(defn validate
  [fs]
  (assoc fs :errors (if-let [schema (:schema fs)] (s/check schema (:value fs)))))

(defn save
  "Set a new value to form. This will trigger a schema validation for the value.
   Doesn't trigger commit."
  [fs value]
  (-> fs (assoc :value value) validate))

(defn update
  "Use a function to set a new value to form. This changes both the value and the initial value.
   The function is called with the value as the first parameter and rest of arguemtns
   are passed to the function (Like update-in)."
  [fs f & args]
  (let [value (:value fs)
        new-value (apply f value args)]
    (save fs new-value)))

(defn coerce
  "Return either coerced or the original value if the coercion failed."
  [schema value]
  (if schema
    (let [coerced ((sc/coercer schema *coercion-matcher*) value)]
      (if (su/error? coerced)
        value
        coerced))
    value))

(defn extra-validation [fs validation-fn]
  (if validation-fn
    (update-in fs [:errors] merge (validation-fn (:value fs)))
    fs))

(defn change-value
  "Takes fs, schema, vector of keywords and new value.

   If new value is nil, schema is checked if value is in optional-key,
   value it is, instead of setting value to nil, the key is dissoced."
  [fs ks value & [validation-fn]]
  (let [schema (:schema fs)
        value (coerce (st/get-in schema ks) value)]
    (-> (if (or (and (seq? value) (seq value)) (not (nil? value)))
          (update-in fs [:value] assoc-in ks value)
          (let [parent-schema (st/get-in schema (butlast ks))]
            (if (contains? parent-schema (s/optional-key (last ks)))
              (update-in fs [:value] dissoc-in ks)
              (update-in fs [:value] assoc-in ks value))))
        validate
        (extra-validation validation-fn))))

;;
;; Predicates
;;

(defn dirty?
  "Check if form-state is dirty, meaning that the value and the initial value are not identitcal."
  [fs]
  (not= (:value fs) (:initial-value fs)))

(defn errors?
  "Check if form has any errors."
  [fs]
  (seq (:errors fs)))
