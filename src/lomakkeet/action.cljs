(ns lomakkeet.action
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:require [om.core :as om]
            [lomakkeet.util :refer [chan?]]))

(defprotocol IActionable
  (action! [_ evt]))

(defprotocol IActionHandler
  (handle-change [_ evt]))

(defprotocol IPureActionHandler
  (pure-handle-change [_ fs evt]))

(defn pure-handle-wrapper [this fs evt]
  (let [x (pure-handle-change this @fs evt)]
        (if (chan? x)
          (go-loop []
            (when-let [v (<! x)]
              (om/update! fs v)
              (recur)))
          (om/update! fs x))))

