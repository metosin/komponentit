(ns ^:always-reload example.main
  (:require [om.core :as om]
            [schema.core :as s :include-macros true]
            [sablono.core :refer-macros [html]]
            [cljs-time.core :as t]
            [potpuri.core :as util]
            [lomakkeet.core :as f]
            [lomakkeet.action :as action]
            [om-dev-tools.core :as dev]
            [om-dev-tools.state-tree :as dev-state]
            [example.forms :as forms]
            [example.autocomplete :as eac]
            [example.domain :as d]))

(def initial-state
  {:example-page (f/->fs d/empty-thing d/Thingie)})

(defonce state (atom initial-state))
(defonce dev-state (atom (-> (dev/empty-state)
                             (assoc :open? false :current :instrumentation)
                             (assoc-in [:state-tree-state :example-page :lomakkeet.core/value :dates] {})
                             (assoc-in [:state-tree-state :example-page :lomakkeet.core/initial-value :dates] {}))))

;; VIEWS

(defn thingie-form
  [{{{:keys [start end]} :dates} :lomakkeet.core/value
    :as fs}
   _
   {:keys [form]}]
  (om/component
    (html
      [:div.tasks
       [:h2
        "Basic fields"
        [:div.btn-toolbar.pull-right
         (forms/form-status fs)
         (forms/cancel-btn fs form)
         (forms/save-btn fs form)]]

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
          [:p.form-control-static "TODO"]]]]])))

(defn thing-view [fs]
  (reify
    om/IDisplayName
    (display-name [_] "thing-view")
    om/IRender
    (render [this]
      (om/build f/form fs {:opts {:component thingie-form
                                  :parent this}}))
    action/IActionable
    (action! [_ evt]
      (js/console.log "thingie-form action!" (pr-str evt))
      nil)
    action/IActionHandler
    (handle-change [this evt]
      (action/pure-handle-wrapper this fs evt))
    action/IPureActionHandler
    (pure-handle-change [_ fs evt]
      (js/console.log "thingie-form handler-change" (pr-str evt))
      (case (:type evt)
        :save (f/commit fs)))))

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
