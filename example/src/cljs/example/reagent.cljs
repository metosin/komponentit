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
  (let [form-data  (reagent/cursor app-state [:example-page])
        form  (f/create-form form-data :opts {:size 6})
        form-value (reaction (:value @form-data))
        start (reaction (get-in @form-value [:dates :start]))
        end   (reaction (get-in @form-value [:dates :end]))]
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

        [:div.row
         [:div.col-sm-12 [:h2 "Autocomplete"]]
         [eac/country-select form "Country" [:country] {:size 3}]
         [f/complete form "Select multiple" [:reasons]
          {:items {:a "A", :b "B", :c "C"}
           :multiple true
           :size 3}]]]])))

(defonce tree-state (atom {:example-page {:value {:dates {}}
                                          :initial-value {:dates {}}
                                          :errors {}}}))

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
