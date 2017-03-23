(ns komponentit.filepicker
  (:require [goog.dom :as dom]
            [reagent.core :as reagent]
            [reagent.ratom :refer-macros [reaction]]))

; Directory support: https://github.com/enyo/dropzone/blob/master/dist/dropzone.js#L908-L933

(defn humanize-filesize
  ([bytes] (humanize-filesize bytes nil))
  ([bytes {:keys [locale iec? locale-opts]}]
   (let [units (if iec?
                 ["bytes" "KiB" "MiB" "GiB" "TiB" "PiB"]
                 ["bytes" "kB" "MB" "GB" "TB" "PB"])
         m (if iec? 1024 1000)
         unit (if (zero? bytes)
                0
                (js/Math.floor (/ (js/Math.log bytes) (js/Math.log m))))
         size (/ bytes (js/Math.pow m unit))]
     (str (.toLocaleString size (or locale js/undefined) (clj->js (or locale-opts {})))
          " " (get units unit)))))

(defn file-list->vec [file-list]
  (vec (mapv #(.item file-list %) (range (.-length file-list)))))

(def noop (constantly nil))

(defn filepicker [_]
  (let [input-ref (atom nil)
        input-ref-fn #(reset! input-ref %)]
    (fn [{:keys [on-select on-blur value file-select-label on-clear clearable?]
          :as opts}]
      (let [on-select (or on-select noop)
            ;; FIXME:
            on-clear  (if clearable? (or on-clear (fn [] (on-select nil))) noop)
            on-blur   (or on-blur noop)
            file-select-label (or file-select-label "Select file")]
        [:div
         {:style {:display "inline-block"}}
         [:input
          {:style {:display "none"}
           :type "file"
           :ref input-ref-fn
           :on-change (fn [e]
                        (if-let [file (.item e.target.files 0)]
                          (on-select file)))
           :on-blur on-blur
           ;; This ensures that the on-change event is emited even if the
           ;; same file is selected again.
           :value nil}]
         [:button.btn.btn-primary
          (-> opts
              (dissoc :on-select :on-blur :value :file-select-label :on-clear :clearable?)
              (assoc :type "button"
                     :on-click (fn [e] (.click @input-ref))))
          file-select-label]
         (if clearable?
           [:button.btn.btn-default
            {:type "button"
             :on-click #(on-clear)}
            "×"])
         (if value
           [:span.selected-file
            " " (.-name value) ", " (humanize-filesize (.-size value) (select-keys opts [:locale :iec? :locale-opts]))])]))))

;;
;; Drag and drop utilities
;;

(defn on-drag-over-handler [{:keys [on-active-change]}]
  (fn [e]
    ; Chrome bug - drop even doesn't fire without this
    (.preventDefault e)
    (.stopPropagation e)
    (if on-active-change (on-active-change true))
    nil))

(defn on-drag-leave-handler [{:keys [on-active-change]}]
  (fn [e]
    (if on-active-change (on-active-change false))
    nil))

(defn on-drop-handler
  "Create handler when can be used for file drag'n'drop.

   Options:

   - :files - The IReactiveAtom containing vector of Files.
   - :active? - (optional) IReactiveAtom containing status if the drag'n'drop
     is active."
  [{:keys [on-file-drop on-active-change]}]
  (fn [e]
    (.preventDefault e)
    (.stopPropagation e)
    (if on-active-change (on-active-change false))
    (on-file-drop (file-list->vec (.. e -dataTransfer -files)))
    nil))

(defn drop-area
  "Create attribute map for drop area."
  [{:keys [on-file-drop on-active-change] :as opts}]
  {:on-drag-over  (on-drag-over-handler opts)
   :on-drag-leave (on-drag-leave-handler opts)
   :on-drop       (on-drop-handler opts)})
