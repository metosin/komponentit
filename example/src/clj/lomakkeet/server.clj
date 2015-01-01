(ns lomakkeet.server
  (:require [clojure.java.io :as io]
            [compojure.core :refer [GET defroutes]]
            [compojure.route :refer [resources]]
            [compojure.handler :refer [api]]
            [ring.util.response :refer [redirect resource-response]]
            [org.httpkit.server :refer [run-server]]))

(defroutes routes
  (resources "/" {:root "public"})
  (resources "/react" {:root "react"})
  (resources "/webjars" {:root "META-INF/resources/webjars"})
  (GET "/" []
    (resource-response "index.html" {:root "public"})))

(defn stop
  [{:keys [http-kit] :as ctx}]
  (when http-kit
    (http-kit))
  {})

(defn start
  [ctx & [port]]
  (let [port (Integer. (or port 10555))
        http-kit (run-server #'routes {:port port :join? false})]
    (println "Starting web server on port" port)
    {:http-kit http-kit}))
