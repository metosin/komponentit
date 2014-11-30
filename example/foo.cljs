(ns example
  (:require [schema.core :as s]
            [lomakkeet.fields :as f]
            [lomakkeet.controller :refer [view-with-controller]]))

; Description of the state tree
(def initial-state
  {:thing {:thing {} ; domain/Thingie
           :sub-thingies [{}]}})

; FIXME: Cljs version...
(def LocalDate #+clj org.joda.time.LocalDate #+cljs (s/pred t/date?))

(s/defschema Thingie
  {:name (s/both (s/pred seq 'required) s/Str)
   :email s/Str
   :date LocalDate
   :foobar {:desc s/Str
            :date LocalDate}})

(defn render-new-thingie
  [{:keys [sub-thingies] :as thingie}
   {:keys [empty? errors dirty?] :as form}
   ch]
  (let [save-btn [:button.btn.btn-primary
                  {:type "button"
                   :onClick #(put ch {:action :save})}
                  "Save"]]
    (html
      [:div.tasks
       [:h2
        "New thingie"
        [:div.pull-right
         (cond
           (and (not empty?) errors) "Form has error(s)"
           dirty? "Form has unsaved edits")
         save-btn]]

       [:form.column-content
        [:div.row
         (f/input form "Name"   [:name])
         (f/input form "Email"  [:email])]

        [:div.row
         (df/date form "Date" [:date] {:size 3})]

        [:div.row
         (f/textarea  form "Description" [:foobar :desc])
         (df/date     form "Date 2"      [:foobar :date] {:size 3})]]

       (om/build-all new-sub-thingie sub-thingies {:key :id})

       [:div.column-content
        [:button.action
         {:type "button"
          :onClick #(put! ch {:action :new-sub-thingie})}
         "New sub-thingie"]]
       [:h2.clearfix
        [:div.pull-right save-btn]]])))

(defcomponent foo
  [thing
   owner]
  (render [_]
    (html
      (om/build
        view-with-controller thing
        {:opts {:form {:empty? true
                       :schema Thingie
                       :cursor (:thing thing)}
                :actions {:save
                          (fn [state evt]
                            (let [r (http/post "/api/foo" {:edn-params (:thing @state)})]
                              (go (om/update! state :thing (:body (<! r))))))
                          :new-sub-thingie
                          (fn [state evt]
                            (om/transact! state :sub-thingies #(into [] (conj % (empty-sub-thingie)))))}
                :render-fn render-new-thingie}}))))
