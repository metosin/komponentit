(ns lomakkeet.om.mixins
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [cljs.core.async :refer [close! <! put! tap untap chan]]
            [om.core :as om]
            [lomakkeet.util :as u]
            [goog.events :as events])
  (:import [goog.events EventType]))

;;
;; Mixin: Close the component if user clicks outside the element
;;

(defn create-closable
  "Returns a function which can be called to remove the event handlers."
  [owner]
  (let [click-handler (fn [e]
                        (om/set-state! owner :open? false))
        key-handler (fn [e]
                      (case (.-key e)
                        "Esc" (om/set-state! owner :open? false)
                        nil))]
    (events/listen js/window EventType.CLICK click-handler)
    (events/listen js/window EventType.KEYUP key-handler)
    (fn []
      (events/unlisten js/window EventType.CLICK click-handler)
      (events/unlisten js/window EventType.KEYUP key-handler))))

;;
;; Mixin:
;;

(defn debounce-init []
  (chan))

(defn debounce-will-mount [input cb & [{:keys [timeout]
                                            :or {timeout 200}}]]
  (let [debounced (u/debounce input timeout)]
    (go
      (loop []
        (let [v (<! debounced)]
          (when v
            (cb v)
            (recur)))))))

(defn debounce-will-unmount [input]
  (close! input))

