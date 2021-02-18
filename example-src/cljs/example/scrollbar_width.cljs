(ns example.scrollbar-width
  (:require [komponentit.scrollbar-width :as scrollbar-width]
            [reagent.core :as r]
            [cljs.test :refer-macros [is]]
            [devcards.core :as dc :include-macros true]
            [example.core :as e]))

(dc/defcard (str
(e/header 'scrollbar_width "Scrollbar-width")
"This component can calculate scrollbar width and add padding to compensate for it.
This can be useful for compensating for scrollbar width in cases with separate table
for header and the table contents, e.g. when table contents are scrollable and the
header is fixed (is shown at the top of the table always)."))

(dc/defcard-rg scrollbar-width
  "To implmement fixed header for table,
  the table contents need to be placed inside a scroll container (red borders, div with `overflow-y: scroll` or `auto`).

  Now that the header table and contents table are separate elements, the columns widths can't be
  reliably set as relative (percentages) because the total width of the table elements can be different.
  Usually this is because the content table container will have the scrollbar which takes up some width, and
  the header doesn't have such scrollbar.

  Simple fix would be to always force header container to display scrollbar with `overflow-y: scroll`,
  but that will look unpolished.

  This component first renders the header in a div with scrollbar forced on, and after first render,
  it checks the difference of the DOM element width and it's content width, which is the width of the
  scrollbar. The header container is then rendered again, without the scrollbar but using
  the scrollbar width as right padding (green box on the example).

  Now 50% column width is the same on both the header table, and on the content table.
  (Note that table is using `table-layout: fixed`, so that the cell contents don't force
  any column to stretch. This would break the widths, as the separate tables can't know if
  column widths are different on the other table due to cell contents.)

  "
  [:div
   [:div {:style {:border "1px solid red"}}
    ;; Adding paddings or borders to scrollbar-padding component would throw of the calculation.
    [scrollbar-width/scrollbar-padding
     {:style {:background "green"}}
     [:table.scroll-table
      {:style {:background "white"}}
      [:thead
       [:tr
        [:th {:style {:width "50%"}} "50%"]
        [:th {:style {:width "30%"}} "30%"]
        [:th "20%"]]]]]]
   [:div.scroll-container
    {:style {:border "1px solid red"}}
    [:table.scroll-table
     [:tbody
      (for [i (range 100)]
        [:tr
         {:key i}
         [:td {:style {:width "50%"}} "50%"]
         [:td {:style {:width "30%"}} "30%"]
         [:td "20%"]])]]]])

(dc/defcard-rg scrollbar-width-osx
"NOTE: If you are using OS X or other system where scrollbar is hidden
until used, and drawn over the contents, the scrollbar width might be zero,
and header will have 0px padding.

Here is screenshot from Linux showing the padding."
  [:div
   [:img {:src "scrollbar.png"}]])
