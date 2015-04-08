(ns lomakkeet.om
  (:refer-clojure :exclude [update])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [put! chan <! close!]]
            [sablono.core :refer-macros [html]]
            [schema.core :as s :include-macros true]
            [om.core :as om]
            [schema-tools.core :as st]
            [lomakkeet.core :as core]
            [lomakkeet.action :as action]
            [lomakkeet.util :refer [dissoc-in]]

            [lomakkeet.om.impl :as impl]
            [lomakkeet.om.filepicker :as file]
            [lomakkeet.om.datepicker :as date]))

(defprotocol IFormCoerce
  (coerce [_ schema value]))

(defprotocol IDidChange
  (did-change [_]))

(defprotocol IForm
  (get-fs [this]))

(defrecord Form [form owner]
  IForm
  (get-fs [_] (om/get-props owner))
  action/IActionable
  (action! [_ evt]
    (action/action! form evt))
  action/IActionHandler
  (handle-change [_ evt]
    (action/handle-change form evt))
  action/IPureActionHandler
  (pure-handle-change [_ fs evt]
    (action/pure-handle-change form fs evt)))

;; BUILD

(defn build [form {:keys [ks] :as opts}]
  (let [{value :lomakkeet.core/value errors :lomakkeet.core/errors schema :lomakkeet.core/schema} (get-fs form)]
    (om/build impl/default-form-group
              {:value  (get-in @value ks)
               :error  (if errors (get-in @errors ks))
               :schema (if schema (st/get-in @schema ks))}
              {:opts (-> opts (assoc :form form) (dissoc :state))
               :state (:state opts)})))

(defn input [form label ks & [opts]]
  (build form (merge opts {:input impl/input* :label label :ks ks})))

(defn textarea [form label ks & [opts]]
  (build form (merge opts {:input impl/input* :label label :ks ks :el impl/input-textarea})))

(defn static [form label ks & [opts]]
  (build form (merge opts {:input impl/input* :label label :ks ks :el impl/input-static})))

(defn checkbox [form label ks & [opts]]
  (build form (merge opts {:input impl/checkbox* :label label :ks ks})))

(defn select [form label ks options & [opts]]
  (build form (merge opts {:input impl/select* :label label :ks ks :options options})))

(defn date [form label ks & [opts]]
  (build form (merge opts {:label label :ks ks :input date/date*})))

(defn file [form label ks & [opts]]
  (build form (merge opts {:input file/file* :label label :ks ks})))

(defn- change-value
  "Takes cursor, schema, vector of keywords and new value.

   If new value is nil, schema is checked if value is in optional-key,
   value it is, instead of setting value to nil, the key is dissoced."
  [value-cursor schema ks value]
  (if value
    (om/update! value-cursor ks value)
    (let [schema (st/get-in schema (butlast ks))]
      (if (contains? schema (s/optional-key (last ks)))
        (om/transact! value-cursor #(dissoc-in % ks))
        (om/update! value-cursor ks value)))))

(s/defn form
  [fs :- core/FormState, owner, {:keys [parent component]}]
  (reify
    om/IDisplayName
    (display-name [_] "form")
    om/IInitState
    (init-state [_]
      {:ch (chan)})
    om/IWillMount
    (will-mount [this]
      (go-loop []
        (let [ch (om/get-state owner :ch)
              evt (<! ch)]
          (when evt
            (action/handle-change this evt)
            (recur)))))
    om/IWillUnmount
    (will-unmount [_]
      (let [ch (om/get-state owner :ch)]
        (close! ch)))
    om/IRender
    (render [this]
      (om/build component fs {:opts {:form (Form. this owner)}}))
    action/IActionable
    (action! [this evt]
      (js/console.log "form action!" (pr-str evt))
      (let [ch (om/get-state owner :ch)]
        (put! ch evt))
      nil)
    action/IActionHandler
    (handle-change [this evt]
      (case (:type evt)
        :cancel (om/transact! fs core/reset)
        :change (let [schema (if (:lomakkeet.core/schema fs) @(:lomakkeet.core/schema fs))
                      {ks :ks new-value :value} evt
                      new-value (if (satisfies? IFormCoerce parent)
                                  (coerce parent (st/get-in schema ks) new-value)
                                  new-value)]
                  (change-value (:lomakkeet.core/value fs) schema ks new-value))
        ; Redirect rest of action to form container component
        (action/handle-change parent evt)))))

(def ->fs core/->fs)
(def reset core/reset)
(def commit core/commit)
(def save core/save)
(def update core/update)
(def dirty? core/dirty?)
(def errors? core/errors?)
