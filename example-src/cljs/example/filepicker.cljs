(ns example.filepicker
  (:require [komponentit.filepicker :as filepicker]
            [example.options :as options]
            [reagent.core :as r]
            [devcards.core :as dc :include-macros true]
            [example.core :as e]))

(dc/defcard (str
(e/header 'filepicker "Filepicker")))

(dc/defcard-rg filepicker
  (fn [state _]
    [:div
     [options/table
      (:options @state)
      (fn [k v] (swap! state update :options assoc k v))
      [[:file-select-label :string]
       [:clearable? :bool]
       [:iec? :bool]
       [:locale :string]]]

     [filepicker/filepicker (merge (:options @state)
                                   {:value (:value @state)
                                    :on-select #(swap! state assoc :value %)})]])
  (r/atom {:value nil
           :options {:file-select-label "Select a file"
                     :clearable? false
                     :iec? false
                     :locale "en-US"}}))

(defn clear-button [state]
  [:button
   {:type "button"
    :on-click (fn [_] (swap! state assoc :files []) nil)}
   "Empty"])

(dc/defcard-rg drag-and-drop
  (fn [state _]
    [:div
     (merge (filepicker/drop-area {:on-file-drop (fn [files] (swap! state update :files into files))
                                   :on-active-change #(swap! state assoc :active? %)})
            {:style {:padding "40px"
                     :border (if (:active? @state)
                               "2px dotted #888"
                               "2px dotted #ccc")}})
     "Drop a file here"
     [:div [clear-button state]]])
  (r/atom {:files []
           :active? false})
  {:inspect-data true})
