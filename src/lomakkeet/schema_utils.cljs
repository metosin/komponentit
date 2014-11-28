(ns lomakkeet.schema-utils
  (:require [schema.core :as s :include-macros true]))

(defn get-in-schema
  "Get "
  [schema ks & [not-found]]
  (reduce (fn [acc k]
            (or (get acc k) (get acc (s/optional-key k) (get acc (s/required-key k))) not-found))
          schema
          ks))

