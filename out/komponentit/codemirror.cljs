(ns komponentit.codemirror
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            cljsjs.codemirror))

(def default-codemirror-opts {})

(defn codemirror [{:keys [codemirror-opts]}]
  (let [cm (atom nil)]
    (r/create-class
      {:display-name "komponentit.codemirror.codemirror"
       :component-did-mount
       (fn [this]
         (reset! cm  (js/CodeMirror.fromTextArea (rdom/dom-node this)
                                                 (clj->js (merge default-codemirror-opts
                                                                 codemirror-opts))))
         (if-let [f (:on-mount (r/props this))]
           (f @cm))

         ;; Get the fn for each event from current props
         (doto @cm
           (.setValue (or (:value (r/props this))
                          (:default-value (r/props this))))
           (.on "change" (fn [cm change] ((:on-change (r/props this) identity) cm change)))
           (.on "beforeChange" (fn [cm change] ((:on-before-change (r/props this) identity) cm change)))
           (.on "cursorActivity" (fn [cm] ((:on-cursor-activity (r/props this) identity) cm)))))
       :component-did-update
       (fn [this [_ prev-props]]
         ;; TODO: Handle codemirror-opts changes?

         (if-let [new-value (:value (r/props this))]
           ;; Not checked against (:value prev-props) as that causes problems with parinfer
           ;; not sure if any benefit in using that when not using parinfer?
           (when (not= (.getValue @cm) new-value)
             (.setValue @cm new-value))))
       :reagent-render
       (fn []
         [:textarea])})))


