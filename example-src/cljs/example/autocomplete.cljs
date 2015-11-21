(ns example.autocomplete
  (:require [lomakkeet.reagent.autocomplete :as autocomplete]
            [reagent.core :as r]
            [devcards.core :as dc :include-macros true]))

(defn simple-items [n]
  (into (sorted-map)
        (map (fn [i]
               [i (str "Option " i)])
             (range n))))

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
      :search-fields [:value]
      :items (simple-items 50)}])
  (r/atom nil)
  {:inspect-data true})

(dc/defcard-rg autocomplete-multiple
  (fn [value _]
    [autocomplete/autocomplete
     {:value @value
      :cb (fn [item] (swap! value conj (:key item)))
      ; FIXME: Remove-cb is called with value, not item
      :remove-cb (fn [x] (swap! value disj x))
      :search-fields [:value]
      :items (simple-items 50)
      :multiple? true}])
  (r/atom #{})
  {:inspect-data true})

(dc/defcard-rg create-new-items
  (fn [state _]
    [autocomplete/autocomplete
     {:value (:value @state)
      :cb (fn [item] (swap! state assoc :value (:key item)))
      :search-fields [:value]
      :items (:items @state)
      :create (fn [s]
                (swap! state assoc-in [:items (long s)] (str "Option " s))
                (swap! state assoc :value (long s)))}])
  (r/atom {:items (simple-items 5)
           :value nil})
  {:inspect-data true})

(dc/defcard
"# TODO

- Long search text doesn't show as the input element is small")
