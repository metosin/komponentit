(ns lomakkeet.reagent.filepicker
  (:require [goog.string :as gs]
            [goog.dom :as dom]
            [reagent.core :as reagent]
            [reagent.ratom :refer-macros [reaction]]
            [lomakkeet.reagent.impl :as impl]))

(defn humanize-filesize
  [bytes & [fmt]]
  (let [units ["bytes" "kB" "MB" "GB" "TB" "PB"]
        unit (if (zero? bytes)
               0
               (js/Math.floor (/ (js/Math.log bytes) (js/Math.log 1000))))
        size (/ bytes (js/Math.pow 1000 unit))]
    (gs/format (or fmt "%0.1f %s") size (get units unit))))

(defn file* [form {:keys [ks file-select-label clearable?]
                   :or {file-select-label "Select file"}}]
  (let [this (reagent/current-component)
        form-value (reaction (:value @(:data form)))
        value (reaction (get-in @form-value ks))]
    (fn []
      [:div
       [:input
        {:style {:display "none"}
         :type "file"
         :on-change (fn [e]
                      (if-let [file (.item e.target.files 0)]
                        (impl/cb form ks file)))
         :on-blur #(impl/blur form ks)}]
       [:button.btn.btn-primary
        {:type "button"
         :on-click #(-> (reagent/dom-node this)
                        (.getElementsByTagName "input")
                        (.item 0)
                        (.click))}
        file-select-label]
       (if clearable?
         [:button.btn.btn-default
          {:type "button"
           :on-click #(impl/cb form ks nil)}
          "×"])
       (if @value
         [:span.selected-file
          " " (.-name @value) ", " (humanize-filesize (.-size @value))])])))
