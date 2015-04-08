(ns example.reagent.autocomplete
  (:require [lomakkeet.autocomplete :as ac]
            [lomakkeet.reagent.autocomplete :as rac]
            [lomakkeet.reagent.impl :as fimpl]
            [lomakkeet.core :as f]
            [example.autocomplete :refer [countries]]))

(defn country-code->name [code]
  (:name (first (filter (comp (partial = code) :code) countries))))

(def term-match? (ac/create-matcher [:code :name]))
(def query-match? (partial ac/query-match? term-match?))

(defn country-select [form label ks & [opts]]
  (fimpl/default-form-group form rac/autocomplete*
    (assoc opts :label label :ks ks
           :value->text country-code->name
           :load-items (fn [_] countries)
           :item->key :code
           :item->text :name
           :term-match? (ac/create-matcher [:code :name]))))
