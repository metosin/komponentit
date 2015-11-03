(ns example.dropdown
  (:require [lomakkeet.reagent.dropdown :refer [dropdown-button dropdown-li]]
            [reagent.core :as r]
            [cljs.test :refer-macros [is]]
            [devcards.core :as dc :include-macros true]
            [example.options :as options])
  (:import [goog.date Date]))

(dc/defcard
"# Dropdowns

There are currently two types of dropdowns on the basis of their container elements:
`[dropdown-button]` (&lt;button&gt;) and `[dropdown-li]` (&lt;li&gt;).

Dropdowns can be used for several use cases:

- Linking to other pages
- As select box

## Options

- `:text` Text for dropdown toggle element.
- `:content` Used to pass in dropdown elements as collection of item-maps.
- `:children` (replaces `:content`) Used to pass in dropdown elements as Reagent hiccup form. Most of other options
do not work with this option.
- `:on-change` (Optional, supported by content) Called with item-map when dropdown item is selected.
- `:value` (Optional, supported by content) Current value, marks list item with equivalent value as active.
- `:close-on-click` (Default `true`) Close dropdown when any item is selected.
- `:caret?` (Default `true`) Whether to automatically append caret to text.

## Item maps

- `:key` React key
- `:value` (Optional) Current value
- `:href` (Optional) A href
- `:text` Text

## Notes

If item doesn't `:href` attribute, `:on-click` default action is prevented.")

(dc/defcard-rg navbar-links
  "If you want to stay on this page, do not click on the items."
  [:div.navbar.navbar-default
   [:ul.nav.navbar-nav
    [:li [:a {:href "#"} "Normal list item"]]
    [dropdown-li
     {:text "List item with dropdown"
      :content (map (fn [i]
                      {:key i :href (str "#foo" i) :text (str "Option " i)})
                    (range 5))}]]])

(dc/defcard-rg selectbox
  (fn [value _]
    [dropdown-button
     {:text "A button with dropdown"
      :content (map (fn [i]
                      {:key i :value i :text (str "Option " i)})
                    (range 5))
      :value @value
      :on-change #(reset! value (:value %))}])
  (r/atom nil)
  {:inspect-data true})

(dc/defcard-rg options
  (fn [options _]
    [:div
     [options/table
      @options
      (fn [k v] (swap! options assoc k v))
      [[:text :string]
       [:close-on-click? :bool]
       [:caret? :bool]]]

     [dropdown-button
      {:text (:text @options)
       :content (map (fn [i]
                       {:key i :value i :text (str "Option " i)})
                     (range 5))
       :value (:value @options)
       :on-change #(swap! options assoc :value (:value %))
       :close-on-click? (:close-on-click? @options)
       :caret? (:caret? @options)}]])
  (r/atom {:text "A dropdown button"
           :close-on-click? true
           :caret? true
           :value nil})
  {:inspect-data true})
