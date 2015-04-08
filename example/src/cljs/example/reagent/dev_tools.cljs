(ns example.reagent.dev-tools
  (:require [reagent.core :as reagent :refer [atom]]))

(defonce open? (atom false))

(defn- toggle [v ks]
  (if (get-in v ks)
    (assoc-in v ks nil)
    (assoc-in v ks {})))

(defn- key->string [k]
  (cond
    (keyword? k)
    (let [s (namespace k)
          n (name k)]
      (if s
        (str s "/" n)
        n))

    :default k))

(defn- tree [tree-atom tree-state v ks]
  (cond
    (coll? v)
    [:ul
     (for [[k v] (if (map? v)
                   v
                   (zipmap (range) v))
           :let [ks (conj ks k)]]
       [:li
        {:key (key->string k)
         :class (str
                  (if (coll? v) "coll" "single")
                  " "
                  (if (get-in tree-state ks) "open" "closed"))}
        [:strong
         {:on-click #(swap! tree-atom toggle ks)}
         (if (keyword? k)
           (key->string k)
           k)] ": "
        (if (or (not (coll? v)) (get-in tree-state ks))
          (tree tree-atom tree-state v ks))])]

    (string? v) [:pre "\"" v "\""]
    (nil? v)    [:i "nil"]
    (instance? goog.date.UtcDateTime v) [:span (str v) [:span.type "datetime"]]
    (instance? goog.date.Date v) [:span (str v) [:span.type "localdate"]]
    :default [:span (str v)]))
