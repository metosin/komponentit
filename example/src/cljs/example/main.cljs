(ns example.main
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]
            [cljs.core.async :refer [put!]]
            [schema.core :as s :include-macros true]
            [plumbing.core :refer-macros [defnk]]
            [sablono.core :refer-macros [html]]
            [cljs-time.core :as t]
            [potpuri.core :as util]
            [lomakkeet.fields :as f]
            [lomakkeet.datepicker :as df]
            [lomakkeet.file :as ff]
            [example.forms :as forms]
            [example.autocomplete :as eac]
            [om-dev-tools.core :as dev]
            [om-dev-tools.state-tree :as dev-state]))

(def LocalDate goog.date.Date)

(defn DateRange [start end]
  (s/pred (fn [x]
            (and (or (not start) (.equals x start) (t/after?  x start))
                 (or (not end)   (.equals x end)   (t/before? x end))))
          'invalid-date))

(def email-pattern (js/RegExp. "^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,4}$" "i"))

(s/defschema Thingie
  {:name (s/both s/Str (s/pred seq 'required))
   :email (s/both s/Str (s/pred #(re-find email-pattern %) 'email))
   :dates {:start LocalDate
           :end   (s/maybe LocalDate)}
   :desc s/Str
   :file (s/maybe (s/both js/File (s/pred (fn [f] (if f (< (.-size f) 1000000))) 'large-file)))
   :country s/Str
   :gender s/Keyword})

(defn ThingieDates [{{:keys [start end]} :dates}]
  (-> Thingie
      (update-in [:dates :start] #(s/both % (DateRange (t/today) end)))
      (assoc-in  [:dates :end]    (s/maybe (s/both LocalDate (DateRange start nil))))))

; Description of the state tree
(def empty-thing
  {:name "Luke Skywalker"
   :email "luke@rebel.gov"
   :dates {:start (t/today)
           :end   nil}
   :desc ""
   :file nil
   :country "FI"
   :gender :other})

(def initial-state
  {:example-page (f/->form-state empty-thing Thingie)})

(defonce state (atom initial-state))
(defonce dev-state (atom (-> (dev/empty-state)
                             (assoc :open? false :current :instrumentation)
                             (assoc-in [:state-tree-state :example-page :value :dates] {})
                             (assoc-in [:state-tree-state :example-page :initial-value :dates] {}))))

;; VIEWS

(defnk render-thingie-form
  [form-state form ch
   [:value [:dates start end]]]
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
       (f/select    form "Select"   [:gender]
                 {:male   "Male"
                  :female "Female"
                  :other  "Other"})]

      [:div.row
       [:div.col-sm-6 [:h2 "Datepicker (using " [:a {:href "https://github.com/dbushell/Pikaday"} "Pikaday"] ")"]]
       [:div.col-sm-6 [:h2 "Filepicker"]]]

      [:div.row
       (df/date form "Start date" [:dates :start]
                {:size 3
                 :state {:min-date (t/today) :max-date end}
                 :help-text "Today or later. Before end date."})
       (df/date form "End date"   [:dates :end]
                {:size 3
                 :empty-btn? true
                 :state {:min-date start}
                 :help-text "Optional. After start date."})
       (ff/file form "File"        [:file]
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

(defcomponent thing-view
  [page-state
   owner]
  (render [_]
    (html
      (om/build
        f/form page-state
        {:opts {:form {:humanize-error forms/humanize-error}
                :form-validation-fn (fn [v] (s/check (ThingieDates v) v))
                :actions {:save save-thing}
                :render-fn render-thingie-form}}))))

(defcomponent app-view
  [app-state owner]
  (render [_]
    (html
      [:div
       [:h1 "Example form "
        [:a {:href "https://github.com/metosin/lomakkeet/blob/master/example/src/cljs/example/main.cljs"} "(Code)"]]
       (om/build thing-view (:example-page app-state))
       [:h2 "Om state tree"]
       [:div.om-dev-tools-state-tree
        (let [dev-state (om/observe owner (om/ref-cursor (:state-tree-state (om/root-cursor dev-state))))]
          (om/build dev-state/state-view {:state-tree-state dev-state
                                          :app-state app-state}))]])))

(defn restart! []
  (dev/root app-view state {:target (.getElementById js/document "app")
                            :dev-target (.getElementById js/document "dev")
                            :dev-state dev-state}))

(restart!)
