(ns lomakkeet.schema-errors-spike
  (:require
    [clojure.test :refer :all]
    [schema.core :as s]
    [schema.utils :as utils]))

(defprotocol ISchemaError
  (describe [this value]))

(def ^:private basics
  {s/Num :not-a-number
   s/Str :not-a-string})

(extend-protocol ISchemaError
  java.lang.Class
  (describe [this value] (get basics this [:not-of-class this]))
  schema.core.Predicate
  (describe [this value] (keyword (str "not-" (name (.-pred-name this))))))

(defn validation-error->map [e]
  (let [schema (.-schema e)
        value  (.-value e)]
    {:schema schema
     :value value
     :description (describe schema value)}))

(validation-error->map (s/check s/Num "5"))
;; => {:schema java.lang.Number, :value "5", :description :not-a-number}
(validation-error->map (s/check s/Str 5))
;; => {:schema java.lang.String, :value 5, :description :not-a-string}
(validation-error->map (s/check (s/pred even? 'even) 5))
;; => {:schema (pred even), :value 5, :description :not-even}

;;;; Maps and collections of validation errors to Maps and collections of "SchemaErrors"

(defn map-vals
  "Maps a function over the values of an associative collection."
  [f coll]
  (persistent! (reduce-kv #(assoc! %1 %2 (f %3))
                          (transient (empty coll))
                          coll)))

(defn error->map [value]
  (map-vals (fn [v]
              (cond
                (map? v) (error->map v)
                (coll? v) (into (empty v) (map error->map v))
                :else (validation-error->map v)))
            value))

(error->map (s/check {:a s/Int} {:a "foo"}))
;; => {:a {:schema Int, :value "foo", :description :not-integer?}}

;;;; Localization

(def terms {:en {:errors {:not-integer? "Is not a interger"
                          :not-a-number "Is not a number"
                          :not-a-string "Is not a string"
                          :not-even "Should be a even number"}}})

(defn loc [ks & args]
  (if-let [text (get-in (:en terms) ks)]
    (if (seq args) (apply format text args) text)
    (str "MISSING:" (pr-str ks))))

(defn localize-error [error]
  (let [k (:description error)]
    (loc ((if (coll? k) concat conj) [:errors] k))))

(localize-error (validation-error->map (s/check (s/pred even? 'even) 5)))
