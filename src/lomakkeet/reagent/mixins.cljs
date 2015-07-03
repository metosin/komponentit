(ns lomakkeet.reagent.mixins
  (:require [lomakkeet.util :as u]
            [goog.events :as events])
  (:import [goog.events EventType]))

;;
;; Mixin: Close the component if user clicks outside the element
;;

(defn create-closable
  "Returns a function which can be called to remove the event handlers."
  [open?]
  (let [click-handler (fn [e]
                        (reset! open? false))
        key-handler (fn [e]
                      (case (.-key e)
                        "Esc" (reset! open? false)
                        nil))]
    (events/listen js/window EventType.CLICK click-handler)
    (events/listen js/window EventType.KEYUP key-handler)
    (fn []
      (events/unlisten js/window EventType.CLICK click-handler)
      (events/unlisten js/window EventType.KEYUP key-handler))))
