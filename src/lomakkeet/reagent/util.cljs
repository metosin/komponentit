(ns lomakkeet.reagent.util
  (:require [reagent.core :as reagent]
            [lomakkeet.reagent.mixins :as mixins]))

(defn dropdown-container [& {:keys [el open? content]}]
  [:div.selectize-control.single
   el
   (if @open?
     [:div.selectize-dropdown.single content])])
