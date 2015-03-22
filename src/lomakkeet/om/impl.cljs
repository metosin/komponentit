(ns lomakkeet.om.impl
  (:require [sablono.core :refer-macros [html]]
            [om.core :as om]
            [lomakkeet.action :refer [action!]]))

;; FORM GROUP ("bootstrap")

(defn default-form-group
  [{:keys [error] :as input-state}
   owner
   {:keys [input label size help-text]
    :or {size 6}
    :as opts}]
  (reify
    om/IDisplayName
    (display-name [_] "default-form-group")
    om/IRender
    (render [_]
      (html
        [:div.form-group
         {:class (str (if error "has-error") " " (if size (str "col-md-" size)))}
         [:label label]
         (om/build input input-state {:opts opts})
         (if help-text
           [:span.help-block help-text])
         (if error
           [:span.help-block (str error)])]))))

;; BASIC INPUTS

(defn- cb [form ks e]
  (action! form {:type :change, :ks ks, :value (.. e -target -value)}))

(defn- cb-checked [form ks e]
  (action! form {:type :change, :ks ks, :value (.. e -target -checked)}))

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
   _
   {:keys [form ks el transform-value]
    :or {el input-input
         transform-value identity}
    :as opts}]
  (reify
    om/IDisplayName
    (display-name [_] "input*")
    om/IRender
    (render [_]
      (html
        (el (transform-value value) (partial cb form ks))))))

;; CHECKBOX

(defn checkbox*
  [{:keys [value]}
   _
   {:keys [form ch ks]
    :as opts}]
  (om/component
    (html
      [:input
       {:type "checkbox"
        :checked (boolean value)
        :on-change (partial cb-checked form ks)}])))

;; SELECT

(defn select*
  [{:keys [value]}
   _
   {:keys [form ch ks options]
    :as opts}]
  (om/component
    (html
      [:select.form-control
       {:value (if (keyword? value)
                 (name value)
                 value)
        :on-change (partial cb form ks)}
       (cond
         (map? options)
         (for [[k v] options]
           [:option {:value k :key k} v]))])))
