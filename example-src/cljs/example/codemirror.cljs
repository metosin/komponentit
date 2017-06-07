(ns example.codemirror
  (:require [reagent.core :as r]
            [devcards.core :as dc :include-macros true]
            cljsjs.codemirror
            cljsjs.codemirror.addon.selection.active-line
            cljsjs.codemirror.addon.edit.matchbrackets
            cljsjs.codemirror.mode.javascript
            cljsjs.codemirror.mode.clojure
            ; cljsjs.scroll-monitor
            ; parinfer.codemirror
            ))

(def default-codemirror-opts {})

(defn codemirror [{:keys [codemirror-opts]}]
  (let [cm (atom nil)]
    (r/create-class
      {:display-name "example.codemirror.codemirror"
       :component-did-mount
       (fn [this]
         (let [x (js/CodeMirror.fromTextArea (r/dom-node this)
                                             (clj->js (merge default-codemirror-opts
                                                             codemirror-opts)))
               ; wrapper (.getWrapperElement cm)
               ; watch (js/scrollMonitor.create wrapper)
               ]

           (.setValue x (:value (r/props this)))

           ;; Get the fn for each event from current props

           (.on x "change" (fn [e] ((:on-change (r/props this) identity) e)))
           (.on x "beforeChange" (fn [e] ((:on-before-change (r/props this) identity) e)))
           (.on x "cursorActivity" (fn [e] ((:on-cursor-activity (r/props this) identity) e)))

           (reset! cm x)))
       :component-did-update
       (fn [this [_ prev-props]]
         ;; TODO: Handle codemirror-opts changes?
         ;; CHeck against cm value also, so on-change -> state update doesn't trigger setValue
         ;; as the value is already the same.
         (when (not= (:value prev-props) (:value (r/props this)) (.getValue cm))
           (.setValue @cm (:value (r/props this)))))
       :reagent-render
       (fn []
         [:textarea])})))

(dc/defcard-rg leaflet-example
  (fn [state _]
    [:div
     [codemirror {:value (:code @state)
                  :on-change (fn [cm] (swap! state assoc :code (.getValue cm)))
                  :codemirror-opts {:mode "clojure"
                                    :theme "github"
                                    :matchBrackets true}}]])

  (r/atom {:code "(defn hello
  []
  \"world\")"})
  {:inspect-data true})
