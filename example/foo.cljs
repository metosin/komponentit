; Description of the state tree
(def initial-state
  {:thing {:thing {} ; domain/Thingie
           :sub-thingies [{}]}})

(defcomponent view-with-controller
  [state
   owner
   {:keys [form actions render-fn] :as options}]
  (init-state [_]
    {:ch (chan)
     :form (f/create-form (assoc form :owner owner))})
  (will-mount [_]
    (let [ch (om/get-state owner :ch)]
      (go-loop []
        (let [evt       (<! ch)
              action-fn (get actions (:action evt))]
          (if action-fn
            (om/transact! state #(action-fn % evt))
            (prn (str "WARNING: " (:action evt) " is unknown"))))
        (recur)))
    (f/init-form owner))
  (render-state [_ {:keys [form ch]}]
    (render-fn state form ch)))

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
                       :schema domain/Thingie
                       :cursor (:thing thing)}
                :actions {:save
                          (fn [state evt]
                            (let [r (http/post "/api/foo" {:edn-params (:thing @state)})]
                              (go (om/update! state :thing (:body (<! r))))))
                          :new-sub-thingie
                          (fn [state evt]
                            (om/transact! state :sub-thingies #(into [] (conj % (domain/empty-sub-thingie)))))}
                :render-fn render-new-thingie}}))))
