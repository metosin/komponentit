(ns user
  (:require
    [clojure.tools.namespace.repl :as ns-tools])
  (:gen-class))

(ns-tools/disable-reload!)

(defonce system (atom nil))

(defn init []
  (require 'lomakkeet.server)
  (swap! system (constantly {})))

(defn start []
  (swap! system (resolve 'lomakkeet.server/start)))

(defn stop []
  (swap! system (resolve 'lomakkeet.server/stop)))

(defn go []
  (init)
  (start))

(defn reset []
  (stop)
  (ns-tools/refresh :after 'saapas.main/go))
