(ns example.nav
  (:require [komponentit.nav :as nav]
            [reagent.core :as r]
            [devcards.core :as dc :include-macros true]
            [example.options :as options]))

(dc/defcard (str
"# Navs

## Basic options
" (:doc (meta #'nav/nav))))

(dc/defcard-rg nav
  (fn [value _]
    [:div
     [nav/nav
      {:class "nav-tabs"
       :active @value
       :on-change #(reset! value %)
       :content [{:value :frontpage :text "Frontpage"}
                 {:value :about :text "About"}
                 {:value :backpage :text "Backpage"}]}]

     [:hr]

     [nav/nav
      {:class "nav-pills"
       :active @value
       :on-change #(reset! value %)
       :content [{:value :frontpage :text "Frontpage"}
                 {:value :about :text "About"}
                 {:value :backpage :text "Backpage"}]}]

     [:hr]

     [nav/nav
      {:class "nav-pills nav-stacked"
       :active @value
       :on-change #(reset! value %)
       :content [{:value :frontpage :text "Frontpage"}
                 {:value :about :text "About"}
                 {:value :backpage :text "Backpage"}]}]])
  (r/atom :frontpage))
