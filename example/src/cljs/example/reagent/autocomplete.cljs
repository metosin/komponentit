(ns example.reagent.autocomplete
  (:require [lomakkeet.autocomplete :as ac]
            [lomakkeet.reagent.autocomplete :as rac]
            [lomakkeet.reagent.impl :as fimpl]
            [lomakkeet.reagent :as f]
            [example.autocomplete :refer [countries]]))

(defn country-code->name [items code]
  (:name (first (filter (comp (partial = code) :code) items))))

(def term-match? (ac/create-matcher [:code :name]))
(def query-match? (partial ac/query-match? term-match?))

(defn country-select [form label ks & [opts]]
  [f/complete form label ks
   (assoc opts
          :value->text country-code->name
          :items countries
          :item->key :code
          :item->text :name
          :term-match? (ac/create-matcher [:code :name]))])
