(ns example.main
  (:require [devcards.core :as dc :include-macros true]
            example.datepicker
            example.filepicker
            example.autocomplete
            example.autocomplete-tree
            example.calendar
            example.timepicker
            example.highlight
            example.dropdown
            example.input
            example.modal
            example.autosize
            example.timeago
            example.clipboard
            example.map
            example.codemirror
            example.transitions
            example.font-awesome
            example.scrollbar-width))

(defn restart! []
  (dc/start-devcard-ui!))

(restart!)
