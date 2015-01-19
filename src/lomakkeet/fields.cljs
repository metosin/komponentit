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

(defn dissoc-in
  "Dissociates an entry from a nested associative structure returning a new
   nested structure. keys is a sequence of keys. Any empty maps that result
   will not be present in the new structure."
  [m [k & ks :as keys]]
  (if ks
    (if-let [nextmap (get m k)]
      (let [newmap (dissoc-in nextmap ks)]
        (if (seq newmap)
          (assoc m k newmap)
          (dissoc m k)))
      m)
    (dissoc m k)))

;; EMPTYABLE INPUT

(defn- empty-cb [{:keys [ch ks]}]
  (fn [e]
    (put! ch {:type :change
              :value nil
              :ks ks})))

(defcomponent emptyable-input
  [state
   owner
   {:keys [real-input] :as opts}]
  (render-state [_ s]
    (html
      [:div.input-group
       (om/build real-input state {:opts opts :state s})
       [:span.input-group-btn
        [:button.btn.btn-default
         {:type "button"
          :on-click (empty-cb opts)}
         "×"]]])))

;; FORM GROUP ("bootstrap")

(defcomponent default-form-group
  [{:keys [error] :as input-state}
   owner
   {:keys [input label size help-text]
    :or {size 6}
    :as opts}]
  (render-state [_ s]
    (html
      [:div.form-group
       {:class (cond-> []
                 (and error) (conj "has-error")
                 size (conj (str "col-md-" size)))}
       [:label label ":"]
       (om/build input input-state {:opts opts :state s})
       (if help-text
         [:span.help-block help-text])
       (if (and (not empty?) error)
         [:span.help-block (str error)])])))

;; BUILD

(defn build
  [{:keys [form-state form-group ks] :as opts}]
  (let [{:keys [value errors schema]} form-state]
    (om/build form-group
              {:value  (get-in @value ks)
               :error  (if errors (get-in @errors ks))
               :schema (if schema (get-in-schema @schema ks))}
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

(defcomponent input*
  [{:keys [value]}
   owner
   {:keys [ch ks el transform-value]
    :or {el input-input
         transform-value identity}
    :as opts}]
  (render [_]
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

(defcomponent checkbox*
  [{:keys [value]}
   owner
   {:keys [ch ks]
    :as opts}]
  (render [_]
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

(defn update-form
  [{:keys [value] :as form-state} f & args]
  (let [new-value (apply f value args)]
    (save-form form-state new-value)))

(defn- change-value
  "Takes cursor, schema, vector of keywords and new value.

   If new value is nil, schema is checked if value is in optional-key,
   value it is, instead of setting value to nil, the key is dissoced."
  [value-cursor schema ks value]
  (if value
    (om/update! value-cursor ks value)
    (let [schema (get-in-schema schema (butlast ks))]
      (if (contains? schema (s/optional-key (last ks)))
        (om/transact! value-cursor #(dissoc-in % ks))
        (om/update! value-cursor ks value)))))

(defcomponent form
  [{:keys [value initial-value]
    :as form-state} :- FormState
   owner
   {:keys [actions render-fn form form-validation-fn after-change]
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
    ; Going around JSC error by retrieving schema from form-state
    ; For some destructuring schema at defcomponent + letting it would generate
    ; invalid JS
    (let [schema (if (:schema form-state) @(:schema form-state))
          {:keys [ch coercion-matcher]} (om/get-state owner)]
      (go-loop []
        (let [evt (<! ch)
              prev-value @value]
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
                           (change-value value schema ks)))
            (prn (str "Unknown event-type: " (:type evt))))

          (if after-change
            (after-change {:form-state form-state
                           :value @value
                           :value-cursor value
                           :prev-value prev-value})))

        ; Update form-state because :errors can be nil and (:errors form-state) could return not-a-cursor
        (om/update! form-state :errors (merge
                                         (if form-validation-fn (form-validation-fn @value))
                                         (if schema (s/check schema @value))))
        (recur))))
  (render-state [_ form]
    (html (render-fn {:form-state form-state
                      :value @value
                      :initial-value @initial-value
                      :form (assoc form :form-state form-state)
                      :ch (:ch form)}))))

(defn dirty? [form-state]
  (not= (:value form-state) (:initial-value form-state)))

(defn errors? [form-state]
  (seq (:errors form-state)))
