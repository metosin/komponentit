(ns lomakkeet.controller
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [om.core :as om :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]
            [cljs.core.async :refer [chan]]
            [sablono.core :refer-macros [html]]
            [lomakkeet.fields :as f]))

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


