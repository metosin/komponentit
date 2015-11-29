(ns lomakkeet.reagent.filepicker
  (:require [goog.string :as gs]
            [goog.dom :as dom]
            [reagent.core :as reagent]
            [reagent.ratom :refer-macros [reaction]]
            [lomakkeet.reagent.impl :as impl]))

; Directory support: https://github.com/enyo/dropzone/blob/master/dist/dropzone.js#L908-L933

(defn humanize-filesize
  [bytes & [fmt]]
  (let [units ["bytes" "kB" "MB" "GB" "TB" "PB"]
        unit (if (zero? bytes)
               0
               (js/Math.floor (/ (js/Math.log bytes) (js/Math.log 1000))))
        size (/ bytes (js/Math.pow 1000 unit))]
    (gs/format (or fmt "%0.1f %s") size (get units unit))))

(defn file-list->vec [file-list]
  (vec (mapv #(.item file-list %) (range (.-length file-list)))))

(def noop (constantly nil))

(defn filepicker [{:keys [on-select on-blur value file-select-label clear clearable?]}]
  (let [this      (reagent/current-component)
        on-select (or on-select noop)
        clear     (if clearable? (or clear (fn [] (on-select nil))) noop)
        on-blur   (or on-blur noop)
        file-select-label (or file-select-label "Select file")]
    [:div
     {:style {:display "inline-block"}}
     [:input
      {:style {:display "none"}
       :type "file"
       :on-change (fn [e]
                    (if-let [file (.item e.target.files 0)]
                      (on-select file)))
       :on-blur on-blur}]
     [:button.btn.btn-primary
      {:type "button"
       :on-click (fn [e]
                   (-> (reagent/dom-node this)
                       (.getElementsByTagName "input")
                       (.item 0)
                       (.click))
                   nil)}
      file-select-label]
     (if clearable?
       [:button.btn.btn-default
        {:type "button"
         :on-click #(clear)}
        "×"])
     (if value
       [:span.selected-file
        " " (.-name value) ", " (humanize-filesize (.-size value))])]))

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

;;
;; Form integration
;;

(defn file* [form {:keys [ks file-select-label clearable?]}]
  (let [this       (reagent/current-component)
        form-value (reaction (:value @(:data form)))
        value      (reaction (get-in @form-value ks))]
    (fn [_]
      [filepicker {:value @value
                   :on-blur #(impl/blur form ks)
                   :on-select (fn [file]
                                (impl/cb form ks file))
                   :clearable? clearable?
                   :file-select-label file-select-label}])))
