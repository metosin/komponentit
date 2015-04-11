(ns lomakkeet.reagent
  (:refer-clojure :exclude [update])
  (:require [reagent.ratom :as ratom]
            [lomakkeet.core :as core]
            [lomakkeet.util :refer [dissoc-in]]
            [lomakkeet.reagent.impl :as impl]
            [lomakkeet.reagent.datepicker :as date]
            [lomakkeet.reagent.filepicker :as file]))

;; BUILD

(defn input [form label ks & [opts]]
  [impl/default-form-group form impl/input* (assoc opts :label label :ks ks)])

(defn textarea [form label ks & [opts]]
  [impl/default-form-group form impl/input* (assoc opts :el impl/input-textarea :label label :ks ks)])

(defn static [form label ks & [opts]]
  [impl/default-form-group form impl/input* (assoc opts :el impl/input-static :label label :ks ks)])

(defn checkbox [form label ks & [opts]]
  [impl/default-form-group form impl/checkbox* (assoc opts :label label :ks ks)])

(defn select [form label ks options & [opts]]
  [impl/default-form-group form impl/select* (assoc opts :label label :ks ks :options options)])

(defn date [form label ks & [opts]]
  [impl/default-form-group form date/date* (assoc opts :label label :ks ks)])

(defn file [form label ks & [opts]]
  [impl/default-form-group form file/file* (assoc opts :label label :ks ks)])

(def ->fs core/->fs)
(def reset core/reset)
(def commit core/commit)
(def save core/save)
(def update core/update)
(def dirty? core/dirty?)
(def errors? core/errors?)
(def get-value core/get-value)
