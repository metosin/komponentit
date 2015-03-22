(ns lomakkeet.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [put! chan <!]]
            [sablono.core :refer-macros [html]]
            [schema.core :as s :include-macros true]
            [schema.coerce :as sc]
            [schema.utils :as su]
            [om.core :as om]
            [schema-tools.core :as st]
            [lomakkeet.impl :as impl]
            [lomakkeet.util :refer [chan? dissoc-in]]
            [lomakkeet.file :as file]
            [lomakkeet.datepicker :as date]))

;; BUILD

(defn build
  [{:keys [fs form-group ks] :as opts}]
  (let [{value ::value errors ::errors schema ::schema} fs]
    (om/build form-group
              {:value  (get-in @value ks)
               :error  (if errors (get-in @errors ks))
               :schema (if schema (st/get-in @schema ks))}
              {:opts (dissoc opts :state)
               :state (:state opts)})))

(defn input [form label ks & [opts]]
  (build (merge form opts {:input impl/input* :label label :ks ks})))

(defn textarea [form label ks & [opts]]
  (build (merge form opts {:input impl/input* :label label :ks ks :el impl/input-textarea})))

(defn static [form label ks & [opts]]
  (build (merge form opts {:input impl/input* :label label :ks ks :el impl/input-static})))

(defn checkbox [form label ks & [opts]]
  (build (merge form opts {:input impl/checkbox* :label label :ks ks})))

(defn select [form label ks options & [opts]]
  (build (merge form opts {:input impl/select* :label label :ks ks :options options})))

(defn date [form label ks & [opts]]
  (build (merge form opts {:input date/date* :label label :ks ks})))

(defn file [form label ks & [opts]]
  (build (merge form opts {:input file/file* :label label :ks ks})))

;; FORM

(defn- coerce [coercion-matcher schema value]
  (if schema
    (let [coerced ((sc/coercer schema coercion-matcher) value)]
      (if (su/error? coerced)
        value
        coerced))
    value))

(s/defschema FormState
  {::value s/Any
   ::initial-value s/Any
   ::errors s/Any
   ::schema s/Any
   ::metadata s/Any
   ::disabled s/Bool
   s/Keyword s/Any})

(defn ->fs
  ([value] (->fs value nil))
  ([value schema]
   {::value value
    ::initial-value value
    ::errors (if schema (s/check schema value))
    ::schema schema
    ::metadata nil
    ::disabled false}))

(defn reset [fs]
  (assoc fs ::value (::initial-value fs)))

(defn save-form
  ([{schema ::schema :as fs} value]
   (assoc fs
          ::value value
          ::initial-value value
          ::errors (if schema (s/check schema value)))))

(defn update-form
  [fs f & args]
  (let [value (::value fs)
        new-value (apply f value args)]
    (save-form fs new-value)))

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
  [{value ::value initial-value ::initial-value :as fs} :- FormState
   owner
   {:keys [actions component form form-validation-fn after-change]
    :as opts}]
  (reify
    om/IDisplayName
    (display-name [_] "form")
    om/IInitState
    (init-state [_]
      (assert (nil? (s/check FormState fs)))
      (merge {:ch (chan)
              :form-group impl/default-form-group
              :coercion-matcher sc/json-coercion-matcher}
             form))
    om/IWillMount
    (will-mount [_]
      (let [schema (if (::schema fs) @(::schema fs))
            {:keys [ch coercion-matcher]} (om/get-state owner)]
        (go-loop []
          (let [evt (<! ch)
                prev-value @value]
            (case (:type evt)
              :action (if-let [action-fn (get actions (:action evt))]
                        (let [next (action-fn @fs evt)]
                          (if (chan? next)
                            (go (om/update! fs (<! next)))
                            (om/update! fs next)))
                        (prn (str "WARNING: " (:action evt) " is unknown")))

              :cancel (om/transact! fs reset)

              :change (let [{:keys [ks]} evt]
                        (->> evt :value
                             (coerce coercion-matcher (st/get-in schema ks))
                             (change-value value schema ks)))
              (prn (str "Unknown event-type: " (:type evt))))

            ; FIXME:
            (if after-change
              (after-change {:fs fs
                             :value @value
                             :value-cursor value
                             :prev-value prev-value})))

          ; Update fs because :errors can be nil and (:errors fs) could return not-a-cursor
          (om/update! fs ::errors (merge
                                    ; FIXME:
                                    (if form-validation-fn (form-validation-fn @value))
                                    (if schema (s/check schema @value))))
          (recur))))
    om/IRender
    (render [_ ]
      (om/build component fs {:opts {:ch (om/get-state owner :ch)
                                     :form (assoc (om/get-state owner) :fs fs)}}))))

(defn dirty? [fs]
  (not= (::value fs) (::initial-value fs)))

(defn errors? [fs]
  (seq (::errors fs)))
