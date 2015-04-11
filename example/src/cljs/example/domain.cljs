(ns example.domain
  (:require [schema.core :as s :include-macros true]
            [cljs-time.core :as t]))

(def LocalDate goog.date.Date)

(defn DateRange [start end]
  (s/pred (fn [x]
            (and (or (not start) (.equals x start) (t/after?  x start))
                 (or (not end)   (.equals x end)   (t/before? x end))))
          'invalid-date))

(def email-pattern (js/RegExp. "^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,4}$" "i"))

(s/defschema Thingie
  {:name (s/both s/Str (s/pred seq 'required))
   :email (s/both s/Str (s/pred #(re-find email-pattern %) 'email))
   :dates {:start LocalDate
           :end   (s/maybe LocalDate)}
   :desc s/Str
   :file (s/maybe (s/both js/File (s/pred (fn [f] (if f (< (.-size f) 1000000))) 'large-file)))
   :country s/Str
   :reasons #{s/Keyword}
   :gender s/Keyword})

(defn ThingieDates [{{:keys [start end]} :dates}]
  (-> Thingie
      (update-in [:dates :start] #(s/both % (DateRange (t/today) end)))
      (assoc-in  [:dates :end]    (s/maybe (s/both LocalDate (DateRange start nil))))))

; Description of the state tree
(def empty-thing
  {:name ""
   :email "luke@rebel.gov"
   :dates {:start (t/today)
           :end   nil}
   :desc ""
   :file nil
   :country "FI"
   :reasons #{:a :b}
   :gender :other})

(def genders {:male   "Male"
              :female "Female"
              :other  "Other"})
