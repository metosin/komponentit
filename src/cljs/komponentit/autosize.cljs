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

(def size-style-props
  "List of style properties which affect the size of textarea"
  ["letter-spacing" "line-height"
   "font-family" "font-kerning-settings" "font-kerning" "font-size" "font-stretch" "font-style" "font-variant" "font-variant-caps" "font-variant-ligatures" "font-variant-numeric" "font-weight"
   "text-rendering" "text-indent"
   "padding-left" "padding-right" "padding-top" "padding-bottom"
   "box-sizing"
   "border-left" "border-right" "border-bottom" "border-top"])

(defn copy-styles [style]
  (reduce (fn [s prop] (str s prop ":" (.getPropertyValue style prop) ";"))
          "" size-style-props))

(defn get-property-value [style k]
  (or (js/parseFloat (.getPropertyValue style k)) 0))

;;
;; Input
;;

(defn input-node-styles [el]
  (if el
    (let [style (js/window.getComputedStyle el)]
      {:box-sizing (.getPropertyValue style "box-sizing")
       :border-size (+ (get-property-value style "border-left-width")
                       (get-property-value style "border-right-width"))
       :padding-size (+ (get-property-value style "padding-left")
                        (get-property-value style "padding-right"))
       :sizer-style (copy-styles style)})))

;; One hidden element for all autosize inputs
(defonce input-sizer (delay (doto (js/document.createElement "input")
                              (js/document.body.appendChild))))

(defn node-width [value placeholder placeholder-is-min-width? {:keys [box-sizing border-size padding-size sizer-style]}]
  (let [_ (set! (.-value @input-sizer) (if (seq value) value placeholder))
        _ (set! (.-style @input-sizer) (str base-sizer-style-str "width:0;" sizer-style))
        width (.-scrollWidth @input-sizer)
        width (case box-sizing
                "border-box" (+ width border-size)
                "content-box" (- width padding-size)
                width)
        placeholder-width (when placeholder-is-min-width?
                            (set! (.-value @input-sizer) placeholder)
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
       (fn [this [_ prev-props]]
         (when (or (not= (:class (r/props this)) (:class prev-props))
                   (not= (:style (r/props this)) (:style prev-props)) )
           (reset! state (input-node-styles (r/dom-node this)))))
       :reagent-render
       (fn [{:keys [class style value placeholder] :as props}]
         [:input
          (-> props
              (dissoc :min-width :placeholder-is-min-width?)
              (assoc :style (merge style (node-width value placeholder placeholder-is-min-width? @state))))])})))

;;
;; Textaraa
;;

(defn textarea-node-styles [el]
  (if el
    (let [style (js/window.getComputedStyle el)]
      {:box-sizing (.getPropertyValue style "box-sizing")
       :border-size (+ (get-property-value style "border-bottom-width")
                       (get-property-value style "border-top-width"))
       :padding-size (+ (get-property-value style "padding-bottom")
                        (get-property-value style "padding-top"))
       :sizer-style (copy-styles style)})))

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
       (fn [this [_ prev-props]]
         (when (or (not= (:class (r/props this)) (:class prev-props))
                   (not= (:style (r/props this)) (:style prev-props)) )
           (reset! state (textarea-node-styles (r/dom-node this)))))
       :reagent-render
       (fn [{:keys [style value min-rows max-rows] :as props}]
         [:textarea
          (-> props
              (dissoc :min-rows :max-rows)
              (assoc :style (merge style (node-height value min-rows max-rows @state))))])})))
