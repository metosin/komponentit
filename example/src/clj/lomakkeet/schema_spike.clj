(ns lomakkeet.schema-spike
  (:require
    [clojure.test :refer :all]
    [schema.core :as s]
    [schema.utils :as su]
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
              dep-walker (s/start-walker (su/memoize-id s/walker) dep-schema) ]
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
