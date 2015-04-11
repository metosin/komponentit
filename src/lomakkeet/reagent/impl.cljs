(ns lomakkeet.reagent.impl
  (:require [reagent.ratom :refer-macros [reaction]]
            [lomakkeet.core :as l]))

(defn cb [form ks value]
  (swap! (:cursor form) l/change-value ks value))

(defn get-or-deref [x]
  (if (satisfies? IDeref x) @x x))

;; FORM GROUP ("bootstrap")

(defn default-form-group
  [form content {:keys [ks size label help-text]
                 :or {size 6}
                 :as opts}]
  {:pre [(map? form) (satisfies? IDeref (:cursor form))]}
  (let [form-errors (reaction (:errors @(:cursor form)))
        form-not-pristine (reaction (:not-pristine @(:cursor form)))
        error (reaction (get-in @form-errors ks))
        pristine (reaction (not (get-in @form-not-pristine ks)))]
    (fn []
      [:div.form-group
       {:class (str (if (and (not @pristine) @error) (str "has-error "))
                    (if size (str " col-md-" size)))}
       [:label label]
       [content form opts]
       (if help-text
         [:span.help-block help-text])
       (if (and (not @pristine) @error)
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
  (let [form-value (reaction (:value @(:cursor form)))
        value (reaction (get-in @form-value ks))]
    (fn []
      (el (transform-value @value) #(cb form ks (.. % -target -value))))))

;; CHECKBOX

(defn checkbox*
  [form {:keys [ks]}]
  (let [form-value (reaction (:value @(:cursor form)))
        value (reaction (get-in @form-value ks))]
    (fn []
      [:input
       {:type "checkbox"
        :checked (boolean @value)
        :on-change #(cb form ks (.. % -target -checked))}])))

;; SELECT

(defn select*
  [form {:keys [ks options]}]
  (let [form-value (reaction (:value @(:cursor form)))
        value (reaction (get-in @form-value ks))]
    (fn []
      [:select.form-control
       {:value @value
        :on-change #(cb form ks (.. % -target -value))}
       (cond
         (map? options)
         (for [[k v] options]
           [:option {:value k :key v} v]))])))
