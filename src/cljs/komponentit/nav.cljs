(ns komponentit.nav
  (:require [reagent.core :as reagent]))

(enable-console-print!)

(defn nav
"- :class      Bootstrap style to use
- :active     Selected item
- :on-change  (Optional) function to be called with key of tab when new tab is selected
- :content    Collection of items"
  [{:keys [active on-change content class]}]
  [:ul
   {:class (str "nav " class)}
   (for [{:keys [value text]} content]
     [:li {:key value
           :class (if (= active value) "active")}
      [:a {:href "#" ; Href is useful styling
           :on-click (fn [e]
                       (.preventDefault e)
                       (when on-change (on-change value)))}
       text]])])
