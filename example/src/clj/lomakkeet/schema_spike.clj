(ns lomakkeet.schema-spike
  (:require
    [clojure.test :refer :all]
    [schema.core :as s]
    [schema.utils :as utils]
    [schema.coerce :as sc]
    [schema.macros :as macros]
    [plumbing.core :as p :refer [fnk]]))

(def test-user
  {:name "Foobar"
   :password "123"
   :password2 "123"})

(def bad-user
  (assoc test-user :password2 "1234"))

; Plain way

(s/defschema User
  {:name s/Str
   :password s/Str
   :password2 s/Str})

(defn UserPasswords [m]
  (-> User
      (assoc :password2 (s/eq (:password m)))))

(deftest plain
  (is (nil? (s/check User test-user)))
  (is (nil? (s/check (UserPasswords test-user) test-user)))
  (is (s/check (UserPasswords bad-user) bad-user)))

; Custom schema impl

(def ^:dynamic *root-value* nil)

(defrecord DependantSchema [schema]
  s/Schema
  (walker [this]
    (let [sub-walker (s/subschema-walker schema)]
      (fn [x]
        (binding [*root-value* x]
          (sub-walker x)))))
  (explain [this]
    (s/explain schema)))

(defn dependant-schema [schema]
  (DependantSchema. schema))

(defrecord DependantField [base f]
  s/Schema
  (walker [this]
    (let [sub-walker (s/subschema-walker base)]
      (fn [x]
        (let [dep-schema (f *root-value*)
              ; HACK:
              dep-walker (s/start-walker (utils/memoize-id s/walker) dep-schema) ]
          (and (sub-walker x)
               (dep-walker x))))))
  (explain [this]
    (list 'dependant-field (s/explain base))))

(defn dependant-field [base f]
  (DependantField. base f))

(s/defschema User2
  (dependant-schema {:name s/Str
                     :password s/Str
                     :password2 (dependant-field s/Str (fnk [password] (s/eq password)))}))

(deftest custom
  (is (s/check User2 bad-user)))

; custom 2

(def ^:dynamic *root-value2* nil)

(defn check-with-deps [schema x]
  (binding [*root-value2* x]
    (s/check schema x)))

(defn validate-with-deps [schema value]
  "Throw an exception if value does not satisfy schema; otherwise, return value."
  [schema value]
  (when-let [error (check-with-deps schema value)]
    (macros/error! (utils/format* "Value does not match schema: %s" (pr-str error))
                   {:schema schema :value value :error error}))
  value)

(defn coerce-with-deps [schema coercion-matcher value]
  (let [coercer (sc/coercer schema coercion-matcher)]
    (println (coercer value))
    (->> value
         coercer
         (validate-with-deps schema))))

(defrecord DependantField2 [base f]
  s/Schema
  (walker [this]
    (let [sub-walker (s/subschema-walker base)]
      (if-not *root-value2*
        ; If walking from regular s/check, coercion etc.
        sub-walker
        ; If called from check-with-deps
        (let [dep-schema (f *root-value2*)
              dep-walker (s/subschema-walker dep-schema)]
          (fn [x]
            (and (sub-walker x)
                 (dep-walker x)))))))
  (explain [this]
    (list 'dependant-field (s/explain base))))

(defn dependant-field2 [base f]
  (DependantField2. base f))

(s/defschema User3
  {:name s/Str
   :password s/Str
   :password2 (dependant-field2 s/Str (fnk [password] (s/eq password)))})

(deftest custom
  (is (check-with-deps User3 bad-user)))

(s/defschema CoerceTest
  {:a (dependant-field2 s/Int (fnk [b] (s/pred #(> % b) 'a>b)))
   :b (dependant-field2 s/Int (fnk [a] (s/pred #(< % (* a 2)) 'half-b<a)))})

(def coerce-test {:a "5"
                  :b "8"})

; (deftest coercion
;   (is (coerce-with-deps CoerceTest sc/json-coercion-matcher coerce-test)))
