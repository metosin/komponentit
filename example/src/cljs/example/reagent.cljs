(ns ^:figwheel-always example.reagent
  (:require [reagent.core :as reagent :refer [atom]]
            [reagent.ratom :refer-macros [reaction run!]]
            [schema.coerce :as sc]
            [cljs-time.core :as t]
            [lomakkeet.core :as l]
            [lomakkeet.reagent :as f]
            [example.domain :as d]
            [example.reagent.autocomplete :as eac]
            [example.reagent.forms :as forms]
            [example.reagent.dev-tools :as dev]))

(enable-console-print!)

(defonce app-state (atom {:example-page (-> (f/->fs d/empty-thing d/Thingie))}))

(defn thing-view []
  (let [form  (reagent/cursor app-state [:example-page])
        start (reaction (get-in (::l/value @form) [:dates :start]))
        end   (reaction (get-in (::l/value @form) [:dates :end]))]
    (fn []
      [:div.tasks
       [:h2
        "Basic fields"
        [:div.btn-toolbar.pull-right
         [forms/form-status form]
         [forms/cancel-btn form]
         [forms/save-btn form]]]

       [:form.column-content
        [:div.row
         [f/input form "Name"   [:name]]
         [f/input form "Email"  [:email]]]

        [:div.row
         [f/textarea  form "Textarea" [:desc]]
         [f/select    form "Select"   [:gender] d/genders]]

        [:div.row
         [:div.col-sm-6 [:h2 "Datepicker (using " [:a {:href "https://github.com/dbushell/Pikaday"} "Pikaday"] ")"]]
         [:div.col-sm-6 [:h2 "Filepicker"]]]

        [:div.row
         [f/date form "Start date" [:dates :start]
          {:size 3
           :min-date (t/today) :max-date end
           :help-text "Today or later. Before end date."}]
         [f/date form "End date" [:dates :end]
          {:size 3
           :min-date start
           :help-text "Optional. After start date."}]
         [f/file form "File" [:file] {:help-text "Under 1MB"}]]

        #_
        [:div.row
         [:div.col-sm-12 [:h2 "Autocomplete"]]
         [eac/country-select form "Country" [:country]]
         [:div.form-group.col-sm-6
          [:label "Autocomplete (tree):"]
          [:p.form-control-static "TODO"]]]]])))

(defonce tree-state (atom {:example-page {:lomakkeet.core/value {}
                                          :lomakkeet.core/initial-value {}
                                          :lomakkeet.core/errors {}}}))

(defn dev-view [app-state]
  (fn []
    [:div.om-dev-tools-state-tree
     (dev/tree tree-state @tree-state @app-state [])]))

(defn app-view []
  [:div
   [:h1 "Example Reagent form "
    [:a {:href "https://github.com/metosin/lomakkeet/blob/master/example/src/cljs/example/main.cljs"} "(Code)"]]
   [thing-view]
   [:h1 "Reagent state"]
   [dev-view app-state]])

(defn restart! []
  (if-let [root (js/document.getElementById "reagent")]
    (reagent/render [app-view] root)))

(restart!)
