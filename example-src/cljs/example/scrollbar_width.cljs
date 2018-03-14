(ns example.scrollbar-width
  (:require [komponentit.scrollbar-width :as scrollbar-width]
            [reagent.core :as r]
            [cljs.test :refer-macros [is]]
            [devcards.core :as dc :include-macros true]
            [example.core :as e]))

(dc/defcard (str
(e/header 'scrollbar_width "Scrollbar-width")
"This component can calculate scrollbar width and add padding to compensate for it.
This can be useful for compensating for scrollbar width in cases with fixed header
and scroll container.
"))

(dc/defcard-rg scrollbar-width
  "In this example the fixed header is implemented as separate table.
  Both tables are 100% wide and use fixed layout.
  Notice how header table width and columns matches the content table,
  as header table has padding on right to compensate for scrollbar.
  NOTE: If you are using OS X or other system where scrollbar is hidden
  until used, the width might be zero."
  [:div
   [scrollbar-width/scrollbar-padding
    {}
    [:table.scroll-table
     [:thead
      [:tr
       [:th "Column"]
       [:th "Column"]
       [:th "Column"]]]]]
   [:div.scroll-container
    [:table.scroll-table
     [:tbody
      (for [i (range 100)]
        [:tr
         {:key i}
         [:td "Column"]
         [:td "Column"]
         [:td "Column"]])]]]])
