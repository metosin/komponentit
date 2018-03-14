(ns example.dropdown
  (:require [komponentit.dropdown :refer [dropdown ->menu-item dropdown-button dropdown-li dropdown-a]]
            [reagent.core :as r]
            [cljs.test :refer-macros [is]]
            [devcards.core :as dc :include-macros true]
            [example.options :as options]
            [example.core :as e]))

(dc/defcard (str
(e/header 'dropdown "Dropdown")
"`[dropdown]` component uses by default `:div` and `:a` elements. These can be overriden using `:container-el`
and `:toggle-el` options. Also three helper components are provided, which set these options:
`[dropdown-a]` (same as default), `[dropdown-button]` and `[dropdown-li]`.

Dropdowns can be used for several use cases:

- Linking to other pages
- As select box

## Options
" (:doc (meta #'dropdown)) "

## Item maps
" (:doc (meta #'->menu-item)) "

## Notes

If item doesn't have `:href` attribute, `:on-click` default action is prevented."))

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

(dc/defcard-rg link
  (fn [value _]
    [dropdown-a
     {:text "A link with dropdown"
      :content (map (fn [i]
                      {:key i :value i :text (str "Option " i)})
                    (range 5))
      :value @value
      :on-change #(reset! value (:value %))}])
  (r/atom nil)
  {:inspect-data true})

(dc/defcard-rg selectbox-2
  "List items with on-click handlers"
  (fn [value _]
    [dropdown-button
     {:text "A button with dropdown"
      :content (map (fn [i]
                      {:key i :on-click #(js/alert (str "Option " i)) :text (str "Option " i)})
                    (range 5))}]))

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
