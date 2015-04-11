(ns lomakkeet.reagent.util
  (:require [reagent.core :as reagent]
            [lomakkeet.reagent.mixins :as mixins]))

(defn dropdown-container [& {:keys [el open? content]}]
  (let [closable (mixins/create-closable open?)]
    (reagent/create-class
      {:component-did-unmount
       (fn [] (closable))
       :reagent-render
       (fn []
         [:div.selectize-control.single
          el
          (if @open?
            [:div.selectize-dropdown.single content])])})))
