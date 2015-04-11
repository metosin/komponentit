(ns lomakkeet.reagent.impl
  (:require [reagent.ratom :refer-macros [reaction]]
            [lomakkeet.core :as l]))

(defn cb [form ks value]
  (swap! form l/change-value ks value))

;; FORM GROUP ("bootstrap")

(defn default-form-group
  [form real-el
   {:keys [ks input label label-separator size help-text]
    :or {size 6 label-separator ":"}
    :as opts}]
  (let [error (reaction (get-in (::l/errors @form) ks))
        not-pristine (reaction (get-in (::l/not-pristine @form) ks))]
    (fn []
      [:div.form-group
       {:class (cond-> ""
                 (and @not-pristine @error) (str " has-error")
                 size (str " col-md-" size))}
       [:label label label-separator]
       [real-el form opts]
       (if help-text
         [:span.help-block help-text])
       (if (and @not-pristine @error)
         [:span.help-block (str @error)])])))

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
  [form {:keys [ks transform-value el]
         :or {transform-value identity
              el input-input}}]
  (let [value (reaction (get-in (::l/value @form) ks))]
    (fn []
      (el (transform-value @value) #(cb form ks (.. % -target -value))))))

;; CHECKBOX

(defn checkbox*
  [form {:keys [ks]}]
  (let [value (reaction (get-in (::l/value @form) ks))]
    (fn []
      [:input
       {:type "checkbox"
        :checked (boolean @value)
        :on-change #(cb form ks (.. % -target -checked))}])))

;; SELECT

(defn select*
  [form {:keys [ks options]}]
  (let [value (reaction (get-in (::l/value @form) ks))]
    (fn []
      [:select.form-control
       {:value @value
        :on-change #(cb form ks (.. % -target -value))}
       (cond
         (map? options)
         (for [[k v] options]
           [:option {:value k :key v} v]))])))
