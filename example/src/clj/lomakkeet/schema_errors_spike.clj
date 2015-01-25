(ns lomakkeet.schema-errors-spike
  (:require
    [clojure.test :refer :all]
    [schema.core :as s]
    [schema.utils :as utils]
    [potpuri.core :refer [map-vals]]))

(defprotocol ISchemaError
  (describe [this value]))

(def ^:private basics
  {s/Num :not-a-number
   s/Str :not-a-string})

(extend-protocol ISchemaError
  java.lang.Class
  (describe [this value] (get basics this [:not-of-class this]))
  schema.core.Predicate
  (describe [this value] (keyword (str "not-" (-> this (.-pred-name) (or 'predicate) name))))
  schema.core.MapEntry
  (describe [this value] value)
  clojure.lang.PersistentArrayMap
  (describe [this value]
    (reduce-kv (fn [acc k v]
                 (assoc acc k (describe v (get value k))))
               {} this)))

(defn validation-error? [x]
  (instance? schema.utils.ValidationError x))

(defn validation-error->map [e]
  (println e (class e))
  (if (validation-error? e)
    (let [schema (.-schema e)
          value  (.-value e)]
      {:schema schema
       :value value
       :description (describe schema value)})))

(validation-error->map (s/check s/Num "5"))
;; => {:schema java.lang.Number, :value "5", :description :not-a-number}
(validation-error->map (s/check s/Str 5))
;; => {:schema java.lang.String, :value 5, :description :not-a-string}
(validation-error->map (s/check (s/pred even? 'even?) 5))
;; => {:schema (pred even), :value 5, :description :not-even}

;;;; Maps and collections of validation errors to Maps and collections of "SchemaErrors"

(defn error->map [value]
  (cond
    (validation-error? value) (validation-error->map value)
    (map? value)              (map-vals error->map value)
    (coll? value)             (into (empty value) (map error->map value))))

(error->map (s/check {:a s/Int} {:a "foo"}))
;; => {:a {:schema Int, :value "foo", :description :not-integer?}}

;;;; Localization

(def terms {:en {:errors {:not-integer? "Is not a interger"
                          :not-a-number "Is not a number"
                          :not-a-string "Is not a string"
                          :not-even? "Should be a even number"}}})

(defn loc [ks & args]
  (if-let [text (get-in (:en terms) ks)]
    (if (seq args) (apply format text args) text)
    (str "MISSING:" (pr-str ks))))

(defn localize-error [error]
  (let [k (:description error)]
    (loc ((if (coll? k) concat conj) [:errors] k))))

(localize-error (validation-error->map (s/check (s/pred even? 'even?) 5)))
;; => "Should be a even number"

(defn checker
  [input-schema]
  (s/start-walker
    (fn [s]
      (let [walk (s/walker s)]
        (fn [x]
          (let [result (walk x)]
            (if-let [err (utils/error-val result)]
              (validation-error->map err))))))
    input-schema))

(defn check [schema x]
  ((checker schema) x))

(check {:a s/Int} {:a 5 :foo :bar})
