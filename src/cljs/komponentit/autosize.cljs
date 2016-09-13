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

(defn input [{:keys [min-width placeholder-is-min-width?]
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

(def size-style-props
  "List of style properties which affect the size of textarea"
  [:letter-spacing :line-height :padding-top :padding-bottom
   :font-family :font-weight :font-size :text-rendering
   :width :text-indent :padding-left :padding-right
   :border-width :box-sizing])

(defn node-styles [el]
  (let [style (js/window.getComputedStyle el)]
    {:box-sizing (.getPropertyValue style "box-sizing")
     :border-size (+ (js/parseFloat (.getPropertyValue style "border-bottom-width"))
                     (js/parseFloat (.getPropertyValue style "border-top-width")))
     :padding-size (+ (js/parseFloat (.getPropertyValue style "padding-bottom"))
                      (js/parseFloat (.getPropertyValue style "padding-top")))
     :sizer-style (into {} (map (juxt identity #(.getPropertyValue style (name %))) size-style-props))}))

(def textarea-sizer (delay (doto (js/document.createElement "textarea")
                             (js/document.body.appendChild))))

(defn node-height [el {:keys [box-sizing border-size padding-size sizer-style]}]
  (let [height (.-scrollHeight el)
        height (if (= "border-box" box-sizing)
                 (+ height border-size)
                 (- height padding-size))]
    {:height height}))

(defn textarea [{:keys [value use-cache? min-rows max-rows]}]
  (let [height (r/atom nil)
        state (r/atom nil)
        el (atom nil)
        el-ref #(reset! el %)
        sizer-el (atom nil)
        sizer-el-ref #(reset! sizer-el %)
        update' (fn [_]
                 (let [new-state (node-styles @el)
                       new-height (node-height @sizer-el new-state) ]
                   (if-not (= state new-state)
                     (reset! state new-state))
                   (if-not (= height new-height)
                     (reset! height new-height))))]
    ;; FIXME: page-resize, element resize?
    (r/create-class
      {:display-name "komponentit.autosize.textarea"
       :component-did-mount
       (fn [this]
         (js/window.addEventListener "resize" update')
         (update' nil))
       :component-did-update update'
       :component-will-unmount
       (fn [this]
         (js/window.removeEventListener "resize" update'))
       :reagent-render
       (fn [{:keys [class style value placeholder] :as props}]
         [:div
          {:style {:display "inline-block"}}
          [:textarea
           (-> props
               (assoc :ref el-ref
                      :style (merge style @height)
                      :class class)
               (dissoc :textarea-class :textarea-style))]
          [:textarea
           {:value value
            :read-only true
            :ref sizer-el-ref
            :style (merge textarea-sizer-style (:sizer-style @state))}]])})))
