(ns example.figwheel
  (:require [figwheel.client :as fw]
            [example.main :as example]))

(fw/watch-and-reload
  :websocket-url "ws://localhost:3450/figwheel-ws"
  :jsload-callback (fn [] (example/restart!)))
