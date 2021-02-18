(ns example.autocomplete
  (:require-macros [example.autocomplete :refer [get-postalcodes]])
  (:require [komponentit.autocomplete :as autocomplete]
            [komponentit.mixins :as mixins]
            [reagent.core :as r]
            [devcards.core :as dc :include-macros true]
            [clojure.string :as str]
            [example.options :as options]
            [example.core :as e]))

(def postalcodes (get-postalcodes))

(defn simple-items [n]
  (into (sorted-map)
        (map (fn [i]
               [i (str "Option " i)])
             (range n))))

(dc/defcard (str
(e/header 'autocomplete "Autocomplete")
"## Features

- Tries to mimick [Selectize.js](http://selectize.github.io/selectize.js/)
- Opens when focused or clicked.
- Item is selected by mouse or enter.
- Closes when unfocused, with ESC or when clicked outside.
- Selection can be moved with up and down arrows.
- The selection can be reset with backspace
- In multiple selection mode, selected items can be removed with Backspace.
- Searchable. Matches are highlighted.
- Multiple selection
- Items provided to component can be updated during the components lifecycle
- Possible to add new items based on search
- Implemented using Reagent's lowlevel React utilities, should be possible to
eventually implement using pure React + Sablono to support all React wrappers.

## Items

Items can be provided as:

- Map from key to value
- Seq of values
- Function which sets the items
"))

(dc/defcard-rg simple-autocomplete
  (fn [state _]
    [:div
     {:style {:padding "1rem"
              :background "lightsalmon"}}
     [options/table
      (:options @state)
      (fn [k v] (swap! state assoc-in [:options k] v))
      [[:disabled :bool]]]

     (let [props (merge (:options @state)
                        {:value (:value @state)
                         :on-change (fn [item]
                                      (js/console.log item)
                                      (swap! state assoc :value (:key item)))
                         :search-fields [:value]
                         :items postalcodes
                         :max-results 100})]
       [:<>
        [:div
         {:style {:width "150px"}}
         [autocomplete/autocomplete props]]

        [:div.scroll
         {:style {:border "1px solid red"
                  :display "flex"
                  :justify-content "flex-end"
                  :overflow "scroll"
                  :height "200px"}}
         [:div
          {:style {:width "150px"}}
          [autocomplete/autocomplete props]]]])])
  (r/atom {:value "33100"})
  {:inspect-data true})

(dc/defcard-rg autocomplete-multiple
  (fn [value _]
    [autocomplete/multiple-autocomplete
     {:value @value
      :on-change (fn [item] (swap! value conj (:key item)))
      :on-remove (fn [v] (swap! value disj v))
      :search-fields [:value]
      :items (simple-items 50)}])
  (r/atom #{})
  {:inspect-data true})

(dc/defcard-rg create-new-items
  (fn [state _]
    [autocomplete/autocomplete
     {:value (:value @state)
      :on-change (fn [item] (swap! state assoc :value (:key item)))
      :search-fields [:value]
      :items (:items @state)
      :on-create (fn [s]
                   (let [v (inc (apply max (keys (:items @state))))]
                     (swap! state assoc-in [:items v] s)
                     (swap! state assoc :value v)))}])
  (r/atom {:items (simple-items 5)
           :value nil})
  {:inspect-data true})

(defn person-popup [person change-fn submit-fn cancel-fn]
  [mixins/window-event-listener
   {:on-key-down (fn [e]
                   (case (.-keyCode e)
                     27 (cancel-fn)
                     nil))}
   [:div {:style {:background-color "#fff"
                  :padding "10px 13px"
                  :border "1px solid #e3e3e3"
                  :position "absolute"
                  :box-shadow "1px 2px 5px #888"}}
    [:h2 "Add new person"]
    [:form {:on-submit (fn [e]
                         (.preventDefault e)
                         (submit-fn))}
     [:p
      [:label {:for "first-name"
               :style {:width "100px"}}
       "First name"]
      [:input {:type "text"
               :auto-focus true
               :id "first-name"
               :value (:first-name person)
               :on-change #(change-fn :first-name (.. % -target -value))}]]
     [:p
      [:label {:for "last-name"
               :style {:width "100px"}}
       "Last name"]
      [:input {:type "text"
               :id "last-name"
               :value (:last-name person)
               :on-change #(change-fn :last-name (.. % -target -value))}]]
     [:button {:type "button"
               :on-click cancel-fn
               :style {:margin-right "7px"}}
      "Cancel"]
     [:button {:type "submit"}
      "Add"]]]])

(dc/defcard-rg create-new-items-complex
  (fn [state _]
    [:div
     [autocomplete/autocomplete
      {:value (:value @state)
       :on-change (fn [item] (swap! state assoc :value (:key item)))
       :search-fields [:value]
       :items (into (sorted-map)
                    (map (fn [{:keys [id first-name last-name]}]
                           [id (str first-name " " last-name)])
                         (:persons @state)))
       :on-create (fn [s]
                    (let [id (inc (apply max (map :id (:persons @state))))
                          [first-name last-name] (str/split s #" ")]
                      (swap! state merge {:new {:id id
                                                :first-name first-name
                                                :last-name last-name}})))}]
     (if (:new @state)
       [person-popup
        (:new @state)
        (fn [k v]
          (swap! state assoc-in [:new k] v))
        (fn []
          (let [new-persons (conj (:persons @state) (:new @state))]
            (swap! state merge {:persons new-persons
                                :new nil
                                :value (get-in @state [:new :id])})))
        (fn []
          (swap! state dissoc :new))])])
  (r/atom {:persons [{:id 0 :first-name "Jane" :last-name "Doe"}
                     {:id 1 :first-name "John" :last-name "Doe"}]
           :value nil})
  {:inspect-data true})

(dc/defcard-rg autocomplete-lots-of-items
  (fn [value _]
    [autocomplete/autocomplete
     {:value @value
      :on-change (fn [item] (reset! value (:key item)))
      :search-fields [:value]
      :items (simple-items 5000)}])
  (r/atom 5)
  {:inspect-data true})
