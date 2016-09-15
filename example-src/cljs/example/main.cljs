(ns example.main
  (:require [devcards.core :as dc :include-macros true]
            example.datepicker
            example.filepicker
            example.autocomplete
            example.autocomplete-tree
            example.calendar
            example.timepicker
            example.currency-input
            example.search-highlight
            example.dropdown
            example.input
            example.form-group
            example.modal
            example.nav
            example.autosize
            example.timeago))

(defn restart! []
  (dc/start-devcard-ui!))

(restart!)
