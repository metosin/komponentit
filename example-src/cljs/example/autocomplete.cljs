(ns example.autocomplete
  (:require [lomakkeet.reagent.autocomplete :as autocomplete]
            [reagent.core :as r]
            [devcards.core :as dc :include-macros true]))

(dc/defcard-rg autocomplete
  "- Opens when focused or clicked.
  - Item is selected by mouse or enter.
  - Closes when unfocused, with ESC or when clicked outside.
  - Selection can be moved with up and down arrows.
  - Searchable. Matches are highlighted."
  (fn [value _]
    [autocomplete/autocomplete
     {:value @value
      :cb (fn [item] (reset! value (:value item)))
      :items (map (fn [i]
                    {:key i :value (str "Option " i)})
                  (range 10))}])
  (r/atom nil)
  {:inspect-data true})

(dc/defcard-rg autocomplete-multiple
  (fn [value _]
    [autocomplete/autocomplete
     {:value @value
      :cb (fn [item] (swap! value conj (:value item)))
      ; FIXME: Remove-cb is called with value, not item
      :remove-cb (fn [x] (swap! value disj x))
      :items (map (fn [i]
                    {:key i :value (str "Option " i)})
                  (range 10))
      :multiple? true}])
  (r/atom #{})
  {:inspect-data true})
