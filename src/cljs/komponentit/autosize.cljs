(ns komponentit.autosize
  (:require [reagent.core :as r]))

(def base-sizer-style
  {:position "absolute"
   :top 0
   :right 0
   :visibility "hidden"
   :height 0
   :min-height 0
   :max-height "none"
   :overflow "hidden"
   :z-index -1000})

(def base-sizer-style-str
  (reduce-kv (fn [s prop v] (str s (name prop) ":" v ";")) "" base-sizer-style))

;;
;; Input
;;

(def input-size-style-props
  "List of style properties which affect the size of textarea"
  ["letter-spacing" "line-height" "padding-left" "padding-padding-right"
   "font-family" "font-weight" "font-size" "text-rendering" "text-indent"
   "box-sizing" "padding-left" "padding-right" "border-left" "border-right" "border-width"])

(defn input-node-styles [el]
  (if el
    (let [style (js/window.getComputedStyle el)]
      {:box-sizing (.getPropertyValue style "box-sizing")
       :border-size (+ (or (js/parseFloat (.getPropertyValue style "border-left-width")) 0)
                       (or (js/parseFloat (.getPropertyValue style "border-right-width")) 0))
       :padding-size (+ (or (js/parseFloat (.getPropertyValue style "padding-left")) 0)
                        (or (js/parseFloat (.getPropertyValue style "padding-right")) 0))
       :sizer-style (reduce (fn [s prop] (str s prop ":" (.getPropertyValue style prop) ";"))
                            "" input-size-style-props)})))

(defn set-el-text
  "Replaces first child node of the element with given text.

  createTextNode ensures that HTML in string is inserted as text."
  [el s]
  (let [s (if s s "")]
    (if-let [f (.-firstChild el)]
      (.replaceChild el (js/document.createTextNode s) f)
      (.appendChild el (js/document.createTextNode s)))))

;; One hidden element for all autosize inputs
(defonce input-sizer (delay (doto (js/document.createElement "span")
                              (js/document.body.appendChild))))

(defn node-width [value placeholder placeholder-is-min-width? {:keys [box-sizing border-size padding-size sizer-style]}]
  (let [_ (set-el-text @input-sizer (if (seq value) value placeholder))
        _ (set! (.-style @input-sizer) (str base-sizer-style-str sizer-style))
        width (.-scrollWidth @input-sizer)
        width (case box-sizing
                "border-box" (+ width border-size)
                "content-box" (- width padding-size)
                width)
        placeholder-width (when placeholder-is-min-width?
                            (set-el-text @input-sizer placeholder)
                            (- (.-scrollWidth @input-sizer) padding-size))
        min-width (if placeholder-is-min-width?
                    (+ placeholder-width (if (= "border-box" box-sizing) (+ padding-size border-size)) 0)
                    (- js/Infinity))
        ;; extra 2px should provide room for the caret
        width (+ 2 (max min-width (max 1 width)))]
    {:width width
     :min-width min-width}))

(defn input
  "Calculate width of the input based on the contents.

  Content width is calculated using separate hidden element. This
  element is not managed by React and is placed outside of this
  component, for easier styling."
  [{:keys [placeholder placeholder-is-min-width?]}]
  (let [state (r/atom nil)]
    (r/create-class
      {:display-name "komponentit.autosize.input"
       :component-did-mount
       (fn [this]
         (reset! state (input-node-styles (r/dom-node this))))
       :component-did-update
       (fn [this [prev-props]])
       :reagent-render
       (fn [{:keys [class style value placeholder] :as props}]
         [:input
          (-> props
              (dissoc :min-width :placeholder-is-min-width?)
              (assoc :style (merge style (node-width value placeholder placeholder-is-min-width? @state))))])})))

;;
;; Textaraa
;;

(def textarea-size-style-props
  "list of style properties which affect the size of textarea"
  ["letter-spacing" "line-height" "padding-top" "padding-bottom"
   "font-family" "font-weight" "font-size" "text-rendering" "text-indent"
   "width" "box-sizing" "padding-left" "padding-right" "border-top" "border-bottom" "border-width"])

(defn textarea-node-styles [el]
  (if el
    (let [style (js/window.getComputedStyle el)]
      {:box-sizing (.getPropertyValue style "box-sizing")
       :border-size (+ (or (js/parseFloat (.getPropertyValue style "border-bottom-width")) 0)
                       (or (js/parseFloat (.getPropertyValue style "border-top-width")) 0))
       :padding-size (+ (or (js/parseFloat (.getPropertyValue style "padding-bottom")) 0)
                        (or (js/parseFloat (.getPropertyValue style "padding-top")) 0))
       :sizer-style (reduce (fn [s prop] (str s prop ":" (.getPropertyValue style prop) ";"))
                            "" textarea-size-style-props)})))

(defonce textarea-sizer (delay (doto (js/document.createElement "textarea")
                                 (js/document.body.appendChild))))

(defn node-height [value min-rows max-rows {:keys [box-sizing border-size padding-size sizer-style]}]
  (let [_ (set! (.-value @textarea-sizer) value)
        _ (set! (.-style @textarea-sizer) (str base-sizer-style-str sizer-style))
        height (.-scrollHeight @textarea-sizer)
        height (case box-sizing
                 "border-box" (+ height border-size)
                 "content-box" (- height padding-size)
                 height)
        single-row-height (when (or min-rows max-rows)
                            (set! (.-value @textarea-sizer) "x")
                            (- (.-scrollHeight @textarea-sizer) padding-size))
        min-height (if min-rows
                     (+ (* min-rows single-row-height)
                        (if (= "border-box" box-sizing) (+ padding-size border-size)) 0)
                     (- js/Infinity))
        max-height (if max-rows
                     (+ (* max-rows single-row-height)
                        (if (= "border-box" box-sizing) (+ padding-size border-size) 0))
                     js/Infinity)
        height (min max-height (max min-height height))]
    {:height height
     :min-height min-height
     :max-height max-height}))

(defn textarea
  "Calculate height of the textarea based on the text contents.

  Content height is calculated using separate hidden textarea. This
  textarea is not managed by React and is placed outside of this
  component, for easier styling."
  [{:keys [min-rows max-rows]}]
  (let [state (r/atom nil)]
    ;; FIXME: page-resize, element resize?
    (r/create-class
      {:display-name "komponentit.autosize.textarea"
       :component-did-mount
       (fn [this]
         (reset! state (textarea-node-styles (r/dom-node this))))
       :component-did-update
       (fn [this [prev-props]]
         ;; FIXME: detect when class or style changes and update
         ; (reset! state (node-styles @el))
         )
       :reagent-render
       (fn [{:keys [style value min-rows max-rows] :as props}]
         [:textarea
          (-> props
              (dissoc :min-rows :max-rows)
              (assoc :style (merge style (node-height value min-rows max-rows @state))))])})))
