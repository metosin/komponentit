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

;; BUILD

(defn build
  [{:keys [form-group cursor korks owner schema]
    :as opts}]
  ; NOTE: why is deref necessary?
  (let [value (get-in @cursor korks)
        schema (get-in schema korks)
        opts (assoc opts
                    :schema schema
                    ; FIXME:
                    :required? (d/required? schema))]
    (om/build form-group
              {:value value
               :error  (om/get-state owner (concat [:form :errors] korks))
               :empty?  (om/get-state owner [:form :empty?])}
              {:opts opts})))

;; FORM GROUP ("bootstrap")

(defcomponent default-form-group
  [{:keys [error empty?] :as state}
   owner
   {:keys [input label required? size]
    :or {size 6}
    :as opts}]
  (render [_]
    (html
      [:div.form-group
       {:class (cond-> []
                 (and (not empty?) error) (conj "has-error")
                 size (conj (str "col-md-" size)))}
       [:label label ":" (if required? "*")]
       (om/build input state {:opts opts})
       (if (and (not empty?) error)
         [:span.help-block (error-message error)])])))

(defcomponent horizontal-form-group
  [{:keys [error empty?] :as state}
   owner
   {:keys [input label required?]
    :as opts}]
  (render [_]
    (html
      [:div.form-group
       {:class (if (and (not empty?) error) "has-error")}
       [:label.control-label.col-sm-5 label ":" (if required? "*")]
       [:div.col-sm-7
        (om/build input state {:opts opts})
        (if (and (not empty?) error)
          [:span.help-block (error-message error)])]])))

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
  [{:keys [value]}
   owner
   {:keys [ch korks el schema]
    :or {el input-input}
    :as opts}]
  (render [_]
    (html
      (el value (fn [e]
                  (put! ch {:type :change
                            :korks korks
                            :value (.. e -target -value)}))))))

(defn input
  [form label korks & [opts]]
  (build (merge form opts {:input input* :label label :korks korks})))

(defn textarea
  [form label korks & [opts]]
  (build (merge form opts {:input input* :label label :korks korks :el input-textarea})))

(defn static
  [form label korks & [opts]]
  (build (merge form opts {:input input* :label label :korks korks :el input-static})))


;; SELECT

(defcomponent select*
  [{:keys [value]}
   owner
   {:keys [ch korks options]
    :as opts}]
  (render [_]
    (html
      [:select.form-control
       {:value value
        :on-change (fn [e]
                     (put! ch {:type :change
                               :korks korks
                               :value (.. e -target -value)}))}
       (cond
         (map? options)
         (for [[k v] options]
           [:option {:value k :key k} v]))])))

(defn select
  [form label korks options & [opts]]
  (build (merge form opts {:input select* :label label :korks korks :options options})))

;; FORM

(defn create-form [{:keys [cursor form-group schema] :as opts}]
  (assoc opts
         :dirty? false
         :errors (s/check schema @cursor)
         :form-group (or form-group default-form-group)
         :ch (chan)))

(defn- coerce [schema value]
  (if schema
    (let [coerced (ssc/domain-coercer schema value)]
      (if (su/error? coerced)
        value
        coerced))
    value))

(defn init-form [owner]
  (let [{:keys [initial-cursor cursor ch schema]} (om/get-state owner :form)]
    (go-loop []
      (let [{:keys [type value korks] :as evt} (<! ch)]
        (case type
          :change (do
                    (->> value (coerce (get-in-schema schema korks)) (om/update! cursor korks))
                    (om/set-state! owner [:form :errors] (s/check schema @cursor)))
          (prn (str "Unknown event-type: " type)))
        (om/set-state! owner [:form :empty?] false)
        (om/set-state! owner [:form :dirty?] (not= @cursor @initial-cursor)))
      (recur))))
