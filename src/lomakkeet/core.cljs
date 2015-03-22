(ns lomakkeet.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [cljs.core.async :refer [put! chan <! >! timeout]]
            cljs.core.async.impl.channels
            [sablono.core :refer-macros [html]]
            [schema.core :as s :include-macros true]
            [schema.coerce :as sc]
            [schema.utils :as su]
            [om.core :as om]
            [schema-tools.core :as st]
            [lomakkeet.util :refer [chan? dissoc-in]]
            [lomakkeet.file :as file]
            [lomakkeet.datepicker :as date]))

;; EMPTYABLE INPUT

(defn- empty-cb [{:keys [ch ks]}]
  (fn [e]
    (put! ch {:type :change
              :value nil
              :ks ks})))

(defn emptyable-input
  [state
   owner
   {:keys [real-input] :as opts}]
  (reify
    om/IDisplayName
    (display-name [_] "emptyable-input")
    om/IRenderState
    (render-state [_ s]
      (html
        [:div.input-group
         (om/build real-input state {:opts opts :state s})
         [:span.input-group-btn
          [:button.btn.btn-default
           {:type "button"
            :on-click (empty-cb opts)}
           "×"]]]))))

;; FORM GROUP ("bootstrap")

(defn default-form-group
  [{:keys [error] :as input-state}
   owner
   {:keys [input label label-separator size help-text]
    :or {size 6 label-separator ":"}
    :as opts}]
  (reify
    om/IDisplayName
    (display-name [_] "default-form-group")
    om/IRenderState
    (render-state [_ s]
      (html
        [:div.form-group
         {:class (cond-> []
                   (and error) (conj "has-error")
                   size (conj (str "col-md-" size)))}
         [:label label label-separator]
         (om/build input input-state {:opts opts :state s})
         (if help-text
           [:span.help-block help-text])
         (if (and (not empty?) error)
           [:span.help-block (str error)])]))))

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

;; BASIC INPUTS

(defn input-input [value cb]
  [:input.form-control
   {:type "text"
    :value (or value "")
    :on-change cb}])

(defn input-textarea [value cb]
  [:textarea.form-control
   {:value (or value "")
    :on-change cb}])

(defn input-static [value cb]
  [:p.form-control-static
   value])

(defn input*
  [{:keys [value]}
   owner
   {:keys [ch ks el transform-value]
    :or {el input-input
         transform-value identity}
    :as opts}]
  (om/component
    (html
      (el (transform-value value)
          (fn [e]
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

;; CHECKBOX

(defn checkbox*
  [{:keys [value]}
   owner
   {:keys [ch ks]
    :as opts}]
  (om/component
    (html
      [:input
       {:type "checkbox"
        :checked (boolean value)
        :on-change (fn [e]
                     (put! ch {:type :change
                               :ks ks
                               :value (.. e -target -checked)}))}])))

(defn checkbox
  [form label ks & [opts]]
  (build (merge form opts {:input checkbox* :label label :ks ks})))

;; SELECT

(defn select*
  [{:keys [value]}
   owner
   {:keys [ch ks options]
    :as opts}]
  (om/component
    (html
      [:select.form-control
       {:value (if (keyword? value)
                 (name value)
                 value)
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

(defn date [form label ks & [opts]]
  (build (merge form opts
                {:label label :ks ks}
                (if (:empty-btn? opts)
                  {:input emptyable-input :real-input date/date*}
                  {:input date/date*}))))

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
  [{:keys [value] :as fs} f & args]
  (let [new-value (apply f value args)]
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
   {:keys [actions render-fn form form-validation-fn after-change]
    :as opts}]
  (reify
    om/IDisplayName
    (display-name [_] "form")
    om/IInitState
    (init-state [_]
      (assert (nil? (s/check FormState fs)))
      (merge {:ch (chan)
              :form-group default-form-group
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

            (if after-change
              (after-change {:fs fs
                             :value @value
                             :value-cursor value
                             :prev-value prev-value})))

          ; Update fs because :errors can be nil and (:errors fs) could return not-a-cursor
          (om/update! fs ::errors (merge
                                    (if form-validation-fn (form-validation-fn @value))
                                    (if schema (s/check schema @value))))
          (recur))))
    om/IRenderState
    (render-state [_ form]
      (html (render-fn {:fs fs
                        :value @value
                        :initial-value @initial-value
                        :form (assoc form :fs fs)
                        :ch (:ch form)})))))

(defn dirty? [fs]
  (not= (::value fs) (::initial-value fs)))

(defn errors? [fs]
  (seq (::errors fs)))
