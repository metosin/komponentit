(ns example.filepicker
  (:require [lomakkeet.reagent.filepicker :as filepicker]
            [reagent.core :as r]
            [devcards.core :as dc :include-macros true]))

(dc/defcard-rg filepicker
  (fn [value1 _]
    [filepicker/filepicker {:value @value1
                            :on-select #(reset! value1 %)
                            :file-select-label "Select a file"}])
  (r/atom nil))

(dc/defcard-rg filepicker-clearable
  (fn [value1 _]
    [filepicker/filepicker {:value @value1
                            :on-select #(reset! value1 %)
                            :file-select-label "Select a file"
                            :clearable? true}])
  (r/atom nil))

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
