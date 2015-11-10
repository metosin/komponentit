(ns lomakkeet.reagent
  (:refer-clojure :exclude [update time])
  (:require [reagent.ratom :as ratom]
            [lomakkeet.core :as core]
            [lomakkeet.util :refer [dissoc-in]]
            [lomakkeet.reagent.impl :as impl]
            [lomakkeet.reagent.datepicker :as date]
            [lomakkeet.reagent.timepicker :as time]
            [lomakkeet.reagent.filepicker :as file]
            [lomakkeet.reagent.autocomplete :as autocomplete]
            [lomakkeet.reagent.currency-input :as currency-input]))

(defn create-form
  ([data] (create-form data nil))
  ([data opts] (assoc opts :data data)))

;; BUILD

(defn form-group-com [form]
  (or (:form-group form) impl/default-form-group))

(defn input
  ([form label ks] (input form label ks nil))
  ([form label ks opts]
   [(form-group-com form) form impl/input* (assoc (merge (:opts form) opts) :label label :ks ks)]))

(defn password
  ([form label ks] (password form label ks nil))
  ([form label ks opts]
   [(form-group-com form) form impl/input* (assoc (merge (:opts form) opts) :el impl/input-password :label label :ks ks)]))

(defn textarea
  ([form label ks] (textarea form label ks nil))
  ([form label ks opts]
   [(form-group-com form) form impl/input* (assoc (merge (:opts form) opts) :el impl/input-textarea :label label :ks ks)]))

(defn static
  ([form label ks] (static form label ks nil))
  ([form label ks opts]
   [(form-group-com form) form impl/input* (assoc (merge (:opts form) opts) :el impl/input-static :label label :ks ks)]))

(defn checkbox
  ([form label ks] (checkbox form label ks nil))
  ([form label ks opts]
   [(form-group-com form) form impl/checkbox* (assoc (merge (:opts form) opts) :label label :ks ks)]))

(defn select
  ([form label ks options] (select form label ks options nil))
  ([form label ks options opts]
   [(form-group-com form) form impl/select* (assoc (merge (:opts form) opts) :label label :ks ks :options options)]))

(defn date
  ([form label ks] (date form label ks nil))
  ([form label ks opts]
   [(form-group-com form) form date/date* (assoc (merge (:opts form) opts) :label label :ks ks)]))

(defn time
  ([form label ks] (time form label ks nil))
  ([form label ks opts]
   [(form-group-com form) form time/timepicker* (merge (:opts form) opts {:label label :ks ks})]))

(defn file
  ([form label ks] (file form label ks nil))
  ([form label ks opts]
   [(form-group-com form) form file/file* (assoc (merge (:opts form) opts) :label label :ks ks)]))

(defn complete
  ([form label ks] (complete form label ks nil))
  ([form label ks opts]
   [(form-group-com form) form autocomplete/autocomplete* (assoc (merge (:opts form) opts) :label label :ks ks)]))

(defn currency
  ([form label ks] (currency form label ks nil))
  ([form label ks opts]
   [(form-group-com form) form currency-input/currency-input* (assoc (merge (:opts form) opts) :label label :ks ks)]))

(def validation-error->str core/validation-error->str)
(def default-explain-error core/default-explain-error)
(def ->fs core/->fs)
(def value core/value)
(def reset core/reset)
(def commit core/commit)
(def save core/save)
(def validate core/validate)
(def update core/update)
(def dirty? core/dirty?)
(def errors? core/errors?)
