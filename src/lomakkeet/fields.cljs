(ns lomakkeet.fields
  (:require-macros [cljs.core.async.macros :refer [go-loop alt!]])
  (:require [cljs.core.async :refer [put! chan <! >! timeout]]
            [om-tools.core :refer-macros [defcomponent]]
            [sablono.core :refer-macros [html]]
            [schema.core :as s]
            [schema.coerce :as sc]
            [schema.utils :as su]
            [om.core :as om]))

;; FIXME:
(defn- get-in-schema
  "Get "
  [schema ks & [not-found]]
  (reduce (fn [acc k]
            (or (get acc k) (get acc (s/optional-key k) (get acc (s/required-key k))) not-found))
          schema
          ks))

;; BUILD

(defn build
  [{:keys [form-group cursor ks owner schema]
    :as opts}]
  ; NOTE: why is deref necessary?
  (let [value (get-in @cursor ks)
        schema (get-in schema ks)
        opts (assoc opts
                    :schema schema)]
    (om/build form-group
              {:value value
               :error  (om/get-state owner (concat [:form :errors] ks))
               :empty? (om/get-state owner [:form :empty?])}
              {:opts opts})))

;; FORM GROUP ("bootstrap")

(defcomponent default-form-group
  [{:keys [error empty?] :as state}
   owner
   {:keys [input label size]
    :or {size 6}
    :as opts}]
  (render [_]
    (html
      [:div.form-group
       {:class (cond-> []
                 (and (not empty?) error) (conj "has-error")
                 size (conj (str "col-md-" size)))}
       [:label label ":"]
       (om/build input state {:opts opts})
       (if (and (not empty?) error)
         [:span.help-block (str error)])])))

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
   {:keys [ch ks el schema]
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

(defn create-form [{:keys [cursor form-group schema coercion-matcher] :as opts}]
  (assoc opts
         :dirty? false
         :errors (s/check schema @cursor)
         :form-group (or form-group default-form-group)
         :ch (chan)
         :coercion-matcher (or coercion-matcher sc/json-coercion-matcher)))

(defn- coerce [coercion-matcher schema value]
  (if schema
    (let [coerced (sc/coerce coercion-matcher schema value)]
      (if (su/error? coerced)
        value
        coerced))
    value))

(defn init-form [owner]
  (let [{:keys [initial-cursor cursor ch schema coercion-matcher]} (om/get-state owner :form)]
    (go-loop []
      (let [{:keys [type value ks] :as evt} (<! ch)]
        (case type
          :change (do
                    (->> value (coerce coercion-matcher (get-in-schema schema ks)) (om/update! cursor ks))
                    (om/set-state! owner [:form :errors] (s/check schema @cursor)))
          (prn (str "Unknown event-type: " type)))
        (om/set-state! owner [:form :empty?] false)
        (om/set-state! owner [:form :dirty?] (not= @cursor @initial-cursor)))
      (recur))))
