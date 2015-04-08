(ns example.om.autocomplete
  (:require [lomakkeet.autocomplete :as ac]
            [lomakkeet.om :as f]
            [om.core :as om :include-macros true]
            [example.autocomplete :refer [countries]]))

(defn country-code->name [code]
  (:name (first (filter (comp (partial = code) :code) countries))))

(def term-match? (ac/create-matcher [:code :name]))
(def query-match? (partial ac/query-match? term-match?))

(defn country-select [form label ks & [opts]]
  (f/build form (merge opts {:input ac/autocomplete*
                             :value->text country-code->name
                             :item->key :code
                             :item->text :highlighted-text
                             :label label
                             :ks ks
                             :load-items (fn [owner query]
                                           (let [c (atom -1)]
                                             (om/set-state! owner :data (->> countries
                                                                             (filter (fn [x]
                                                                                       (or (not query) (query-match? x query))))
                                                                             (map (fn [x]
                                                                                    (assoc x
                                                                                           :i (swap! c inc)
                                                                                           :highlighted-text (ac/highlight-string (:name x) query))))
                                                                             vec))
                                             (om/set-state! owner :count @c)))})))
