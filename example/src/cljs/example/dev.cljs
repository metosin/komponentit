(ns example.dev
  (:require [om.core :as om :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]
            [sablono.core :refer-macros [html]]))

(defn toggle [ks v]
  (if (get-in v ks)
    (assoc-in v ks nil)
    (assoc-in v ks {})))

(defn- tree [v ks owner]
  (cond
    (coll? v)
    [:ul
     (for [[k v] (if (map? v) v (zipmap (range) v))
           :let [ks (conj ks k)]]
       [:li
        {:key k}
        [:strong
         {:on-click #(om/update-state! owner (partial toggle ks))}
         (if (coll? v) "+ ")
         (if (keyword? k) (name k) k)] ": "
        (if (or (not (coll? v)) (om/get-state owner ks))
          (tree v ks owner))])]

    (fn? v) [:i "function"]

    :default [:span (pr-str v)]))

(defcomponent state-view [state owner]
  (init-state [_]
    {:thing-page {:value {:dates {}}
                  :initial-value {:dates {}}
                  :errors {}}})
  (render-state [_ _]
    (html
      (tree state [] owner))))
