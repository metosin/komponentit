(ns example.dev
  (:require [om-tools.core :refer-macros [defcomponent]]
            [sablono.core :refer-macros [html]]))

(defn- tree [v ks]
  (cond
    (coll? v)
    [:ul
     (for [[k v] (if (map? v) v (zipmap (range) v))
           :let [ks (conj ks k)]]
       [:li
        {:key k}
        [:strong (if (keyword? k) (name k) k)] ": "
        (tree v ks)])]

    (fn? v) [:i "function"]

    :default [:span (pr-str v)]))

(defcomponent state-view [state owner]
  (render [_]
    (html
      (tree state []))))
