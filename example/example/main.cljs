(ns example.main
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]
            [cljs.core.async :refer [put!]]
            [schema.core :as s :include-macros true]
            [plumbing.core :refer-macros [defnk]]
            [sablono.core :refer-macros [html]]
            [cljs-time.core :as t]
            [lomakkeet.fields :as f]
            [lomakkeet.datepicker :as df]
            [lomakkeet.file :as ff]
            [lomakkeet.utils :as util]
            [example.forms :as forms]
            [example.dev :as dev]))

; goog.date.Date?
(def LocalDate (s/pred t/date?))

(s/defschema Thingie
  {:name (s/both s/Str (s/pred seq 'required))
   :email s/Str
   :date (s/maybe LocalDate)
   :foobar {:desc s/Str
            :file (s/maybe (s/both js/File (s/pred (fn [f] (if f (< (.-size f) 1000000))) 'large-file)))}})

; Description of the state tree
(def empty-thing
  {:name "Luke Skywalker"
   :email "luke@rebel.gov"
   :date nil
   :foobar {:desc ""
            :file nil}})

(def initial-state
  {:thing-page (f/->form-state empty-thing Thingie)})

(defonce state (atom initial-state))

;; VIEWS

(defnk render-thingie-form
  [form-state form ch]
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
       (df/date form "Date" [:date] {:size 3 :empty-btn? true})]

      [:div.row
       (f/textarea  form "Description" [:foobar :desc])
       (ff/file     form "File"        [:foobar :file])]]

     [:div.btn-toolbar.pull-right
      (forms/save-btn form-state ch)]]))

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
                :actions {:save save-thing}
                :render-fn render-thingie-form}}))))

(defcomponent app-view
  [app-state owner]
  (render [_]
    (html
      [:div
       (om/build thing-view (:thing-page app-state))
       (om/build dev/state-view app-state)])))

(defn restart! []
  (om/root app-view state {:target (.getElementById js/document "app")}))

(restart!)
