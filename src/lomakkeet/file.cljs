(ns lomakkeet.file
  (:require [om.core :as om :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]
            [cljs.core.async :refer [put!]]
            [sablono.core :refer-macros [html]]
            [goog.string :as gs]
            [lomakkeet.fields :as f]))

(defn humanize-filesize
  [bytes & [fmt]]
  (let [units ["bytes" "kB" "MB" "GB" "TB" "PB"]
        unit (js/Math.floor (/ (js/Math.log bytes) (js/Math.log 1000)))
        size (/ bytes (js/Math.pow 1000 unit))]
    (gs/format (or fmt "%0.1f %s") size (get units unit))))

; FIXME: Button label... classes...
(defcomponent file*
  [{:keys [value]}
   owner
   {:keys [ch ks file-select-label]
    :or {file-select-label "Select file"}
    :as opts}]
  (render [_]
    (html
      [:div
       [:input
        {:style {:display "none"}
         :type "file"
         :ref "file-input"
         :on-change (fn [e]
                      (if-let [file (.item e.target.files 0)]
                        (put! ch {:type :change
                                  :ks ks
                                  :value file})))}]
       [:button.btn.btn-primary
        {:type "button"
         :on-click #(.click (om/get-node owner "file-input"))}
        file-select-label]
       ; FIXME: emptyable-input?
       [:button.btn.btn-default
        {:type "button"
         :on-click #(put! ch {:type :change :ks ks :value nil})}
        "×"]
       (if value
         [:span.selected-file
          " " (.-name value) ", " (humanize-filesize (.-size value))])])))

(defn file [form label ks & [opts]]
  (f/build (merge form opts {:input file* :label label :ks ks})))
