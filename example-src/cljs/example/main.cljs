(ns example.main
  (:require [reagent.core :as reagent]
            [reagent.ratom :refer-macros [reaction]]
            [devcards.core :as dc :include-macros true]
            example.datepicker
            example.filepicker
            example.autocomplete
            example.calendar
            example.timepicker
            example.currency-input
            example.search-highlight
            example.dropdown
            example.form))

(defn restart! []
  (dc/start-devcard-ui!))

(restart!)
