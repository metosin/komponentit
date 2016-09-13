(ns komponentit.autosize
  (:require [reagent.core :as r]))

;; Idea: https://github.com/JedWatson/react-input-autosize/blob/master/src/AutosizeInput.js

(def sizer-style {:position "absolute"
                  :top 0
                  :left 0
                  :visiblity "hidden"
                  :height 0
                  :overflow "scroll"
                  :white-space "pre"})

(defn input
  "Calculate width for the input automatically.

  For now the width is calculated using element managed by this React
  component, and both real and sizer element are wrapped in a div."
  [{:keys [min-width placeholder-is-min-width?]
              :or {min-width 1}}]
  (let [width (r/atom min-width)
        ;; ref callback function should not change between renders
        placeholder-sizer-el (atom nil)
        placeholder-sizer-el-ref #(reset! placeholder-sizer-el %)
        sizer-el (atom nil)
        sizer-el-ref #(reset! sizer-el %)]
    (r/create-class
      {:display-name "komponentit.autosize.input"
       :component-did-mount
       (fn [this]
         (let [{:keys [value]} (r/props this)
               sizer-width (.-scrollWidth @sizer-el)
               placeholder-sizer-width (if (or placeholder-is-min-width? (empty? value))
                                         (if-let [el @placeholder-sizer-el]
                                           (.-scrollWidth el)))]
           (reset! width (max (+ (max sizer-width placeholder-sizer-width) 2) min-width))))
       :component-did-update
       (fn [this]
         (let [{:keys [value]} (r/props this)
               sizer-width (.-scrollWidth @sizer-el)
               placeholder-sizer-width (if (or placeholder-is-min-width? (empty? value))
                                         (if-let [el @placeholder-sizer-el]
                                           (.-scrollWidth el)))]
           (reset! width (max (+ (max sizer-width placeholder-sizer-width) 2) min-width))))
       :reagent-render
       (fn [{:keys [class style input-class input-style value placeholder] :as props}]
         ;; FIXME: Maybe use global sizer element, like textarea?
         [:div
          {:class class
           :style (merge {:display "inline-block"}
                         style)}
          [:input
           (-> props
               (assoc :style input-style :class input-class)
               (dissoc :min-width :placeholder-is-min-width? :input-class)
               ;; Because padding is not applied to sizers,
               ;; width shouldn't take padding into account
               (update :style #(merge {:box-sizing "content-box"} %))
               (assoc-in [:style :width] @width))]
          [:span
           {:style sizer-style
            :ref sizer-el-ref}
           value]
          (if placeholder
            [:span
             {:style sizer-style
              :ref placeholder-sizer-el-ref}
             placeholder])])})))

(def textarea-sizer-style
  {:position "absolute"
   :top 0
   :right 0
   :visibility "hidden"
   :height 0
   :min-height 0
   :max-height "none"
   :overflow "hidden"
   :z-index -1000})

(def textarea-sizer-style-str
  (reduce-kv (fn [s prop v] (str s (name prop) ":" v ";")) "" textarea-sizer-style))

(def size-style-props
  "List of style properties which affect the size of textarea"
  ["letter-spacing" "line-height" "padding-top" "padding-bottom"
   "font-family" "font-weight" "font-size" "text-rendering" "text-indent"
   "width" "box-sizing" "padding-left" "padding-right" "border-width"])

(defn node-styles [el]
  (let [style (js/window.getComputedStyle el)]
    {:border-box? (= "border-box" (.getPropertyValue style "box-sizing"))
     :border-size (+ (js/parseFloat (.getPropertyValue style "border-bottom-width"))
                     (js/parseFloat (.getPropertyValue style "border-top-width")))
     :padding-size (+ (js/parseFloat (.getPropertyValue style "padding-bottom"))
                      (js/parseFloat (.getPropertyValue style "padding-top")))
     :sizer-style (reduce (fn [s prop] (str s prop ":" (.getPropertyValue style prop) ";"))
                          "" size-style-props)}))

(defonce textarea-sizer (delay (doto (js/document.createElement "textarea")
                                 (js/document.body.appendChild))))

(defn node-height [value min-rows max-rows {:keys [border-box? border-size padding-size sizer-style]}]
  (let [_ (set! (.-value @textarea-sizer) value)
        _ (set! (.-style @textarea-sizer) (str textarea-sizer-style-str sizer-style))
        height (.-scrollHeight @textarea-sizer)
        height (if border-box?
                 (+ height border-size)
                 (- height padding-size))
        single-row-height (when (or min-rows max-rows)
                            (set! (.-value @textarea-sizer) "x")
                            (- (.-scrollHeight @textarea-sizer) padding-size))
        min-height (if min-rows
                     (+ (* min-rows single-row-height) (if border-box? (+ padding-size border-size)) 0)
                     (- js/Infinity))
        max-height (if max-rows
                     (+ (* max-rows single-row-height) (if border-box? (+ padding-size border-size) 0))
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
  (let [state (r/atom nil)
        el (atom nil)
        el-ref #(reset! el %)]
    ;; FIXME: page-resize, element resize?
    (r/create-class
      {:display-name "komponentit.autosize.textarea"
       :component-did-mount
       (fn [this]
         (reset! state (node-styles @el)))
       :component-did-update
       (fn [this [prev-props]]
         ;; FIXME: detect when class or style changes and update
         ; (reset! state (node-styles @el))
         )
       :reagent-render
       (fn [{:keys [style value min-rows max-rows] :as props}]
         [:textarea
          (-> props
              (assoc :ref el-ref
                     :style (merge style (node-height value min-rows max-rows (:sizer-style @state)))))])})))
