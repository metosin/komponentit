(ns komponentit.modal
  (:require [reagent.core :as r]
            [komponentit.mixins :as mixins]))

;; TODO: Trap focus within modal

(defn modal
"- :title      The el for modal header
- :content    The el for modal body
- :footer     The elements for modal footer
- :on-close   (Optional) callback to be called when modal is closed by clicking outside of the modal
- :class      (Optional) additional classes for .modal-dialog; Examples: modal-sm, modal-lg"
  [{:keys [title content footer on-close class]}]
  [mixins/window-event-listener
   {:on-key-down (fn [e]
                   (case (.-keyCode e)
                     27 (on-close)
                     nil))}
   [:div.modal__container
    {:style {:display "block"}}
    [:div.modal__backdrop
     ;; could be replaced with window click handler
     (if on-close {:on-click (fn [_] (on-close) nil)})]
    [:div.modal
     {:class class}
     [:div.modal__header
      (if on-close
        [:button.modal__close
         {:aria-label "Close"
          :type "button"
          :on-click (fn [_] (on-close) nil)}
         "×"])
      title]
     [:div.modal__content content]
     (into [:div.modal__footer] footer)]]])

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
   {:class class
    :title title
    :content content
    :footer [[:div.modal__buttons
              [:button.modal__cancel
               {:type "button"
                :on-click (fn [_]
                            (when failure (failure))
                            nil)}
               cancel-label]
              [:button.modal__ok
               {:type "button"
                :autoFocus true
                :on-click (fn [_]
                            (when success (success))
                            nil)}
               ok-label]]]
    :on-close (fn []
                (when failure (failure)))}])
