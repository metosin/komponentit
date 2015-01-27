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
            [example.dev :as dev]
            [example.autocomplete :as eac]))

(def LocalDate goog.date.Date)

(defn DateRange [start end]
  (s/pred (fn [x]
            (and (or (not start) (.equals x start) (t/after?  x start))
                 (or (not end)   (.equals x end)   (t/before? x end))))
          'invalid-date))

(s/defschema Thingie
  {:name (s/both s/Str (s/pred seq 'required))
   :email s/Str
   :start-date LocalDate
   :end-date   (s/maybe LocalDate)
   :foobar {:desc s/Str
            :file (s/maybe (s/both js/File (s/pred (fn [f] (if f (< (.-size f) 1000000))) 'large-file)))}
   :country s/Str})

(defn ThingieDates [{:keys [start-date end-date] :as thingie}]
  (-> Thingie
      (update-in [:start-date] #(s/both % (DateRange (t/today) end-date)))
      (assoc-in  [:end-date]    (s/maybe (s/both LocalDate (DateRange start-date nil))))))

; Description of the state tree
(def empty-thing
  {:name "Luke Skywalker"
   :email "luke@rebel.gov"
   :start-date (t/today)
   :end-date nil
   :foobar {:desc ""
            :file nil}})

(def initial-state
  {:thing-page (f/->form-state empty-thing Thingie)})

(defonce state (atom initial-state))

;; VIEWS

(defnk render-thingie-form
  [form-state form ch
   [:value start-date end-date]]
  (html
    [:div.tasks
     [:h2
      "New thingie"
      [:div.btn-toolbar.pull-right
       (forms/form-status form-state)
       (forms/cancel-btn form-state ch)
       (forms/save-btn form-state ch)]]

     [:form.column-content
      [:div.row
       (f/input form "Name"   [:name])
       (f/input form "Email"  [:email])]

      [:div.row
       (df/date form "Start date" [:start-date]
                {:size 3
                 :state {:min-date (t/today) :max-date end-date}
                 :help-text "Today or later. Before end date."})
       (df/date form "End date"   [:end-date]
                {:size 3
                 :empty-btn? true
                 :state {:min-date start-date}
                 :help-text "Optional. After start date."})]

      [:div.row
       (f/textarea  form "Description" [:foobar :desc])
       (ff/file     form "File"        [:foobar :file]
                {:help-text "Under 1MB"})]
      [:div.row
       [:div.col-sm-12 [:h2 "Autocomplete"]]
       (eac/country-select form "Country" [:country])]]]))

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
        [:a {:href "https://github.com/metosin/lomakkeet/blob/master/example/example/main.cljs"} "(Code)"]]
       (om/build thing-view (:thing-page app-state))
       [:h1 "Om state tree"]
       (om/build dev/state-view app-state)])))

(defn restart! []
  (om/root app-view state {:target (.getElementById js/document "app")}))

(restart!)
