(ns example.modal
  (:require [komponentit.modal :as modal]
            [reagent.core :as r]
            [devcards.core :as dc :include-macros true]
            [example.options :as options]))

(dc/defcard (str
"# Modals

## Basic options
" (:doc (meta #'modal/modal)) "

## Confirm modal options
" (:doc (meta #'modal/confirm-modal))))

(dc/defcard-rg modal
  "With basic modal the buttons need to be defined manually"
  (fn [open? _]
    [:div
     (if @open?
       [modal/modal
        {:title "Example modal"
         :content [:p "Some content"]
         :footer [[:button.btn.btn-default
                   {:on-click #(reset! open? false)}
                   "Close"]]
         :on-close #(reset! open? false)}])
     [:button.btn.btn-default
      {:on-click #(reset! open? true)}
      "Open"]])
  (r/atom false))

(dc/defcard-rg confirm-modal
  "Confirm modal provides default buttons"
  (fn [open? _]
    [:div
     (if @open?
       [modal/confirm-modal
        {:title "Example confirm-modal"
         :content [:p "Would you please confirm this action?"]
         :success (fn []
                    (reset! open? false)
                    (js/alert "SUCCESS!!"))
         :failure (fn []
                    (reset! open? false))}])
     [:button.btn.btn-default
      {:on-click #(reset! open? true)}
      "Open"]])
  (r/atom false))
