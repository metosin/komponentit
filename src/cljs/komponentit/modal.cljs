(ns komponentit.modal
  (:require [reagent.core :refer [atom]]))

(defn modal
"- :title      The el for modal header
- :content    The el for modal body
- :footer     The elements for modal footer
- :on-close   (Optional) callback to be called when modal is closed by clicking outside of the modal
- :class      (Optional) additional classes for .modal-dialog; Examples: modal-sm, modal-lg"
  [{:keys [title content footer on-close class]}]
  [:div.modal.fade.in
   {:style {:display "block"}}
   [:div.modal-backdrop.in
    (if on-close {:on-click (fn [_] (on-close) nil)})]
   [:div
    {:class (str "modal-dialog " class)
     ; Z-index on backdrop is 1040
     :style {:z-index 1050}}
    [:div.modal-content
     [:div.modal-header
      (if on-close
        [:button.close
         {:aria-label "Close"
          :type "button"
          :on-click (fn [_] (on-close) nil)}
         "×"])
      title]
     [:div.modal-body content]
     (into [:div.modal-footer] footer)]]])

(defn confirm-modal
"- :title        The el for modal header
- :content      The el for modal content
- :success      Function to call if confirmed
- :failure      Function to call if cancelled
- :ok-label     Label for OK button
- :cancel-label Label for Cancel button
- :class        (Optional) additional classes for .modal-dialog"
  [{:keys [title content class
           success failure
           cancel-label ok-label]
    :or {title "Yes or no?"
         content "Are you sure?"
         cancel-label "Cancel"
         ok-label "OK"}}]
  [modal
   {:class (str class)
    :title title
    :content content
    ; When using .btn-group-justified with buttons, each button needs to be wrapped
    ; in another .btn-group.
    :footer [[:div.btn-group.btn-group-justified
              [:div.btn-group
               [:button.btn.btn-default
                {:type "button"
                 :on-click (fn [_]
                             (when failure (failure))
                             nil)}
                cancel-label]]
              [:div.btn-group
               [:button.btn.btn-success
                {:type "button"
                 :on-click (fn [_]
                             (when success (success))
                             nil)}
                ok-label]]]]
    :on-close (fn []
                (when failure (failure)))}])
