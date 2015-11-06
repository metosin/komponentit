(ns example.autocomplete
  (:require [lomakkeet.reagent.autocomplete :as autocomplete]
            [reagent.core :as r]
            [devcards.core :as dc :include-macros true]))

(def simple-items (into (sorted-map)
                        (map (fn [i]
                               [i (str "Option " i)])
                             (range 50))))

(dc/defcard
"# Autocomplete

## Features

- Opens when focused or clicked.
- Item is selected by mouse or enter.
- Closes when unfocused, with ESC or when clicked outside.
- Selection can be moved with up and down arrows.
- Searchable. Matches are highlighted.
- Multiple selection

## Items

Items can be provided as:

- Map from key to value
- Seq of values
- Function which sets the items
")

(dc/defcard-rg simple-autocomplete
  (fn [value _]
    [autocomplete/autocomplete
     {:value @value
      :cb (fn [item] (reset! value (:key item)))
      :items simple-items}])
  (r/atom nil)
  {:inspect-data true})

(dc/defcard-rg autocomplete-multiple
  (fn [value _]
    [autocomplete/autocomplete
     {:value @value
      :cb (fn [item] (swap! value conj (:key item)))
      ; FIXME: Remove-cb is called with value, not item
      :remove-cb (fn [x] (swap! value disj x))
      :items simple-items
      :multiple? true}])
  (r/atom #{})
  {:inspect-data true})
