(ns lomakkeet.fields
  (:require-macros [plumbing.core :refer [fnk defnk]]
                   [cljs.core.async.macros :refer [go-loop alt!]])
  (:require [plumbing.core :refer []]
            [cljs.core.async :refer [put! chan <! >! timeout]]
            [om-tools.core :refer-macros [defcomponent]]
            [sablono.core :refer-macros [html]]
            [schema.core :as s]
            [schema.coerce :as sc]
            [schema.utils :as su]
            [om.core :as om]
            [cljs-time.core :as t]
            [lomakkeet.schema-utils :refer [get-in-schema]]))

(defn build
  [component {:keys [cursor korks owner schema] :as opts}]
  ; NOTE: why is deref necessary?
  (let [value (get-in @cursor korks)
        schema (get-in schema korks)
        opts (assoc opts
                    :schema schema
                    :required? (d/required? schema))]
    (om/build component
              value
              {:opts opts
               ; FIXME: bad
               :state {:error (om/get-state owner (concat [:form :errors] korks))
                       :empty? (om/get-state owner [:form :empty?])}})))

(defn default-group-tpl
  [{:keys [error label required? size empty?]
    :or {size 6}}
   input]
  [:div.form-group
   {:class (cond-> []
             (and (not empty?) error) (conj "has-error")
             size (conj (str "col-md-" size)))}
   [:label label ":" (if required? "*")]
   input
   (if (and (not empty?) error)
     [:span.help-block (error-message error)])])

(defn horizontal-group-tpl
  [{:keys [error label required? size empty?]
    :or {size 6}}
   input]
  [:div.form-group
   {:class (if (and (not empty?) error) "has-error")}
   [:label.control-label.col-sm-5 label ":" (if required? "*")]
   [:div.col-sm-7 input
    (if (and (not empty?) error)
      [:span.help-block (error-message error)])]])


;; BASIC INPUTS

(defn input-input [value cb]
  [:input.form-control
   {:type "text"
    :default-value value
    :on-change cb}])

(defn input-textarea [value cb]
  [:textarea.form-control
   {:default-value value
    :on-change cb}])

(defn input-static [value cb]
  [:p.form-control-static
   value])

(defcomponent input*
  [data
   owner
   {:keys [ch form-group korks el schema]
    :or {el input-input}
    :as opts}]
  (render-state [_ {:keys [error empty?]}]
    (html
      (form-group
        (assoc opts :error error :empty? empty?)
        (el data (fn [e]
                   (put! ch {:type :change
                             :korks korks
                             :value (.. e -target -value)})))))))

(defn input
  [form label korks & [opts]]
  (build input* (merge form opts {:label label :korks korks})))

(defn textarea
  [form label korks & [opts]]
  (build input* (merge form opts {:label label :korks korks :el input-textarea})))

(defn static
  [form label korks & [opts]]
  (build input* (merge form opts {:label label :korks korks :el input-static})))


;; SELECT

(defcomponent select*
  [data
   owner
   {:keys [ch form-group korks options]
    :as opts}]
  (render-state [_ {:keys [error empty?]}]
    (html
      (form-group
        (assoc opts :error error :empty? empty?)
        [:select.form-control
         {:value data
          :on-change (fn [e]
                       (put! ch {:type :change
                                 :korks korks
                                 :value (.. e -target -value)}))}
         (cond
           (map? options)
           (for [[k v] options]
             [:option {:value k :key k} v]))]))))

(defn select
  [form label korks options & [opts]]
  (build select* (merge form opts {:label label :korks korks :options options})))

;; FORM

(defn create-form [{:keys [cursor form-group schema] :as opts}]
  (assoc opts
         :dirty? false
         :initial-value @cursor
         :errors (s/check schema @cursor)
         :form-group (or form-group default-group-tpl)
         :ch (chan)))

(defn- coerce [schema value]
  (if schema
    (let [coerced (ssc/domain-coercer schema value)]
      (if (su/error? coerced)
        value
        coerced))
    value))

(defn init-form [owner]
  (let [{:keys [cursor ch schema]} (om/get-state owner :form)]
    (go-loop []
      (let [initial-value (om/get-state owner [:form :initial-value])
            {:keys [type value korks] :as evt} (<! ch)]
        (case type
          :change (do
                    (->> value (coerce (get-in-schema schema korks)) (om/update! cursor korks))
                    (om/set-state! owner [:form :errors] (s/check schema @cursor)))
          :saved (do
                   (om/set-state! owner [:form :initial-value] value))
          (prn (str "Unknown event-type: " type)))
        (om/set-state! owner [:form :empty?] false)
        (om/set-state! owner [:form :dirty?] (not= @cursor initial-value)))
      (recur))))
