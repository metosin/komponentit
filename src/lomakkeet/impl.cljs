(ns lomakkeet.impl
  (:require [cljs.core.async :refer [put!]]
            [sablono.core :refer-macros [html]]
            [schema.core :as s :include-macros true]
            [om.core :as om]))

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
         {:class (str (if error "has-error") " " (if size (str "col-md-" size)))}
         [:label label label-separator]
         (om/build input input-state {:opts opts :state s})
         (if help-text
           [:span.help-block help-text])
         (if (and (not empty?) error)
           [:span.help-block (str error)])]))))

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
  (reify
    om/IDisplayName
    (display-name [_] "input*")
    om/IRender
    (render [_]
      (html
        (el (transform-value value)
            (fn [e]
              (put! ch {:type :change
                        :ks ks
                        :value (.. e -target -value)})))))))

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

