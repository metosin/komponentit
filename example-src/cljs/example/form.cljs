(ns example.form
  (:require [reagent.core :as r]
            [schema.core :as s]
            [lomakkeet.reagent :as l]
            [devcards.core :as dc :include-macros true]))

(s/defschema SimpleForm
  {:name s/Str
   :email s/Str})

(defn simple-form' [state]
  (let [form (l/create-form state)]
    (fn [_]
      [:div.container-fluid
       [:div.row
        [l/input form "Name" [:name]]
        [l/input form "Email" [:email]]]])))

(dc/defcard-rg simple-form
  (fn [state _]
    [simple-form' state])
  (r/atom (l/->fs {:name nil :email nil} nil))
  {:inspect-data true})
