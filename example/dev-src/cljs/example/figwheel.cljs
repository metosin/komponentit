(ns example.figwheel
  (:require [figwheel.client :as fw]
            example.om
            example.reagent
            lomakkeet.autocomplete-test))

(fw/watch-and-reload
  :websocket-url "ws://localhost:3450/figwheel-ws")
