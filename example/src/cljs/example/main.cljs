(ns ^:always-reload example.main
  (:require [om.core :as om]
            [schema.core :as s :include-macros true]
            [sablono.core :refer-macros [html]]
            [cljs-time.core :as t]
            [potpuri.core :as util]
            [lomakkeet.core :as f]
            [om-dev-tools.core :as dev]
            [om-dev-tools.state-tree :as dev-state]
            [example.forms :as forms]
            [example.autocomplete :as eac]
            [example.domain :as d]))

(def initial-state
  {:example-page (f/->form-state d/empty-thing d/Thingie)})

(defonce state (atom initial-state))
(defonce dev-state (atom (-> (dev/empty-state)
                             (assoc :open? false :current :instrumentation)
                             (assoc-in [:state-tree-state :example-page :value :dates] {})
                             (assoc-in [:state-tree-state :example-page :initial-value :dates] {}))))

;; VIEWS

(defn render-thingie-form
  [{:keys [form-state form ch]
    {{:keys [start end]} :dates} :value}]
  (html
    [:div.tasks
     [:h2
      "Basic fields"
      [:div.btn-toolbar.pull-right
       (forms/form-status form-state)
       (forms/cancel-btn form-state ch)
       (forms/save-btn form-state ch)]]

     [:form.column-content
      [:div.row
       (f/input form "Name"   [:name])
       (f/input form "Email"  [:email])]

      [:div.row
       (f/textarea  form "Textarea" [:desc])
       (f/select    form "Select"   [:gender] d/genders)]

      [:div.row
       [:div.col-sm-6 [:h2 "Datepicker (using " [:a {:href "https://github.com/dbushell/Pikaday"} "Pikaday"] ")"]]
       [:div.col-sm-6 [:h2 "Filepicker"]]]

      [:div.row
       (f/date form "Start date" [:dates :start]
               {:size 3
                :state {:min-date (t/today) :max-date end}
                :help-text "Today or later. Before end date."})
       (f/date form "End date"   [:dates :end]
               {:size 3
                :empty-btn? true
                :state {:min-date start}
                :help-text "Optional. After start date."})
       (f/file form "File"        [:file]
               {:help-text "Under 1MB"})]

      [:div.row
       [:div.col-sm-12 [:h2 "Autocomplete"]]
       (eac/country-select form "Country" [:country])
       [:div.form-group.col-sm-6
        [:label "Autocomplete (tree):"]
        [:p.form-control-static "TODO"]]]]]))

(defn save-thing [state evt]
  (-> state
      (f/save-form (:value state))))

(defn thing-view [page-state owner]
  (om/component
    (html
      (om/build
        f/form page-state
        {:opts {:form {:humanize-error forms/humanize-error}
                :form-validation-fn (fn [v] (s/check (d/ThingieDates v) v))
                :actions {:save save-thing}
                :render-fn render-thingie-form}}))))

(defn app-view [app-state owner]
  (om/component
    (html
      [:div
       [:h1 "Example form "
        [:a {:href "https://github.com/metosin/lomakkeet/blob/master/example/src/cljs/example/main.cljs"} "(Code)"]]
       (om/build thing-view (:example-page app-state))
       [:h2 "Om state tree"]
       [:div.om-dev-tools-state-tree
        (let [dev-state (om/observe owner (om/ref-cursor (:state-tree-state (om/root-cursor dev-state))))]
          (om/build dev-state/state-view {:state dev-state
                                          :app-state app-state}))]])))

(defn restart! []
  (dev/root app-view state {:target (.getElementById js/document "app")
                            :dev-target (.getElementById js/document "dev")
                            :dev-state dev-state}))

(restart!)
