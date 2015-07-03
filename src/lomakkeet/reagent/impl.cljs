(ns lomakkeet.reagent.impl
  (:require [reagent.ratom :refer-macros [reaction]]
            [lomakkeet.core :as l]))

(defn cb [form ks value]
  (swap! (:data form) l/change-value ks value (:validation-fn form)))

(defn blur [form ks]
  ; https://github.com/reagent-project/reagent/issues/135
  (swap! (:data form) update :not-pristine assoc-in ks {::hack true}))

(defn get-or-deref [x]
  (if (satisfies? IDeref x) @x x))

(defn error-explanation
  "Should convert error from e.g. predicate to single word.

   (not (required \"\")) => \"required\""
  [validation-error]
  (if (instance? schema.utils.ValidationError validation-error)
    (pr-str (first @(.-expectation-delay validation-error)))))

;; FORM GROUP ("bootstrap")

(defn default-form-group
  [form content {:keys [ks size label help-text]
                 :or {size 6}
                 :as opts}]
  {:pre [(map? form) (satisfies? IDeref (:data form))]}
  (let [form-errors (reaction (:errors @(:data form)))
        error (reaction (get-in @form-errors ks))
        pristine (reaction (not (get-in (:not-pristine @(:data form)) ks)))]
    (fn []
      [:div.form-group
       {:class (str (if (and (not @pristine) @error) "has-error ")
                    (if (and @pristine @error) "needs-attention ")
                    (if size (str " col-md-" size " ")))}
       [:label label]
       [content form opts]
       (if help-text
         [:span.help-block help-text])
       (if (and (not @pristine) @error)
         [:span.help-block (error-explanation @error)])])))

;; BASIC INPUTS

(defn input-input [attrs value cb blur]
  [:input.form-control
   (merge attrs
          {:type "text"
           :value (or value "")
           :on-change cb
           :on-blur blur})])

(defn input-textarea [attrs value cb blur]
  [:textarea.form-control
   (merge attrs
          {:value (or value "")
           :on-change cb
           :on-blur blur})])

(defn input-static [attrs value _ _]
  [:p.form-control-static
   value])

(defn input*
  [form {:keys [ks transform-value el attrs]
         :or {transform-value identity
              el input-input}}]
  (let [form-value (reaction (:value @(:data form)))
        value (reaction (get-in @form-value ks))]
    (fn []
      (el
        (merge (get-or-deref (:attrs form)) attrs)
        (transform-value @value)
        #(cb form ks (.. % -target -value))
        #(blur form ks)))))

;; CHECKBOX

(defn checkbox*
  [form {:keys [ks]}]
  (let [form-value (reaction (:value @(:data form)))
        value (reaction (get-in @form-value ks))]
    (fn []
      [:input
       {:type "checkbox"
        :checked (boolean @value)
        :on-change #(cb form ks (.. % -target -checked))
        :on-blur #(blur form ks)}])))

;; SELECT

(defn select*
  [form {:keys [ks options attrs]}]
  (let [form-value (reaction (:value @(:data form)))
        value (reaction (get-in @form-value ks))]
    (fn []
      [:select.form-control
       (merge
         (merge (get-or-deref (:attrs form)) attrs)
         {:value @value
          :on-change #(cb form ks (.. % -target -value))
          :on-blur #(blur form ks)})
       (cond
         (map? options)
         (for [[k v] options]
           [:option {:value k :key v} v]))])))
