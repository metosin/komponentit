(ns example.figwheel
  (:require [figwheel.client :as fw]
            example.main))

(fw/watch-and-reload
  :websocket-url "ws://localhost:3450/figwheel-ws")
