(ns lomakkeet.fields
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [cljs.core.async :refer [put! chan <! >! timeout]]
            cljs.core.async.impl.channels
            [om-tools.core :refer-macros [defcomponent]]
            [sablono.core :refer-macros [html]]
            [schema.core :as s :include-macros true]
            [schema.coerce :as sc]
            [schema.utils :as su]
            [om.core :as om]))

;; FIXME:
(defn- get-in-schema
  [schema ks & [not-found]]
  (reduce (fn [acc k]
            (or (get acc k) (get acc (s/optional-key k) (get acc (s/required-key k))) not-found))
          schema
          ks))

(defn- chan? [v]
  (instance? cljs.core.async.impl.channels.ManyToManyChannel v))

;; FORM GROUP ("bootstrap")

(defcomponent default-form-group
  [{:keys [error] :as input-state}
   owner
   {:keys [input label size]
    :or {size 6}
    :as opts}]
  (render [_]
    (html
      [:div.form-group
       {:class (cond-> []
                 (and error) (conj "has-error")
                 size (conj (str "col-md-" size)))}
       [:label label ":"]
       (om/build input input-state {:opts opts})
       (if (and (not empty?) error)
         [:span.help-block (str error)])])))

;; BUILD

(defn build
  [{:keys [form-state form-group ks] :as opts}]
  (let [{:keys [value errors schema]} form-state]
    (om/build form-group
              {:value  (get-in value ks)
               :error  (get-in errors ks)
               :schema (get-in-schema schema ks)}
              {:opts opts})))

;; BASIC INPUTS

(defn input-input [value cb]
  [:input.form-control
   {:type "text"
    :value value
    :on-change cb}])

(defn input-textarea [value cb]
  [:textarea.form-control
   {:value value
    :on-change cb}])

(defn input-static [value cb]
  [:p.form-control-static
   value])

(defcomponent input*
  [{:keys [value]}
   owner
   {:keys [ch ks el]
    :or {el input-input}
    :as opts}]
  (render [_]
    (html
      (el value (fn [e]
                  (put! ch {:type :change
                            :ks ks
                            :value (.. e -target -value)}))))))

(defn input
  [form label ks & [opts]]
  (build (merge form opts {:input input* :label label :ks ks})))

(defn textarea
  [form label ks & [opts]]
  (build (merge form opts {:input input* :label label :ks ks :el input-textarea})))

(defn static
  [form label ks & [opts]]
  (build (merge form opts {:input input* :label label :ks ks :el input-static})))


;; SELECT

(defcomponent select*
  [{:keys [value]}
   owner
   {:keys [ch ks options]
    :as opts}]
  (render [_]
    (html
      [:select.form-control
       {:value value
        :on-change (fn [e]
                     (put! ch {:type :change
                               :ks ks
                               :value (.. e -target -value)}))}
       (cond
         (map? options)
         (for [[k v] options]
           [:option {:value k :key k} v]))])))

(defn select
  [form label ks options & [opts]]
  (build (merge form opts {:input select* :label label :ks ks :options options})))

;; FORM

(defn- coerce [coercion-matcher schema value]
  (if schema
    (let [coerced ((sc/coercer schema coercion-matcher) value)]
      (if (su/error? coerced)
        value
        coerced))
    value))

(s/defschema FormState
  {:value s/Any
   :initial-value s/Any
   :errors s/Any
   :schema s/Any
   s/Keyword s/Any})

(defn ->form-state
  ([value] (->form-state value nil))
  ([value schema]
   {:value value
    :initial-value value
    :errors (if schema (s/check schema value))
    :schema schema}))

(defn cancel-form [form-state]
  (assoc form-state :value (:initial-value form-state)))

(defn save-form
  ([{:keys [schema] :as form-state} value]
   (assoc form-state
          :value value
          :initial-value value
          :errors (if schema (s/check schema value)))))

(defcomponent form
  [{:keys [schema value initial-value]
    :as form-state} :- FormState
   owner
   {:keys [actions render-fn form]
    :as opts}]
  (init-state [_]
    ; (js/console.log (str @state))
    ; (js/console.log (str (s/check FormState form-state)))
    (assert (nil? (s/check FormState form-state)))
    (-> {:ch (chan)
         :form-group default-form-group
         :coercion-matcher sc/json-coercion-matcher}
        (merge form)))
  (will-mount [_]
    (let [schema (if schema @schema)
          {:keys [ch coercion-matcher]} (om/get-state owner)]
      (go-loop []
        (let [evt (<! ch)]
          (case (:type evt)
            :action (if-let [action-fn (get actions (:action evt))]
                      (let [next (action-fn @form-state evt)]
                        (if (chan? next)
                          (go (om/update! form-state (<! next)))
                          (om/update! form-state next)))
                      (prn (str "WARNING: " (:action evt) " is unknown")))

            :cancel (om/transact! form-state cancel-form)

            :change (let [{:keys [ks]} evt]
                      (->> evt :value
                           (coerce coercion-matcher (get-in-schema schema ks))
                           (om/update! value ks)))
            (prn (str "Unknown event-type: " (:type evt)))))
        ; Update form-state because :errors can be nil and (:errors form-state) could return not-a-cursor
        (om/update! form-state :errors (s/check schema @value))
        (recur))))
  (render-state [_ form]
    (html (render-fn {:form-state form-state
                      :value @value
                      :form (assoc form :form-state form-state)
                      :ch (:ch form)}))))

(defn dirty? [form-state]
  (not= (:value form-state) (:initial-value form-state)))

(defn errors? [form-state]
  (seq (:errors form-state)))
