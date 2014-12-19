{:shared
 {:cljsbuild {:builds {:app {:source-paths ["src" "example"]
                             :compiler {:output-to "resources/public/js/app.js"
                                        :output-dir "resources/public/js/out"
                                        :source-map "resources/public/js/out.js.map"
                                        :preamble ["react/react.min.js"
                                                   "META-INF/resources/webjars/momentjs/2.8.3/min/moment.min.js"
                                                   "META-INF/resources/webjars/Pikaday/1.2.0/pikaday.js"]
                                        :externs ["react/externs/react.js"]
                                        :optimizations :none
                                        :pretty-print true}}}}}

 :dev
 [:shared
  {:repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}

   :plugins [[lein-cljsbuild "1.0.3"]
             [lein-figwheel "0.1.7-SNAPSHOT"]]

   :figwheel {:http-server-root "public"
              :server-port 3450
              :css-dirs ["resources/public/css"]}

   :cljsbuild {:builds {:app {:source-paths ["dev-src"]}}}}]

 :prod
 [:shared
  {:cljsbuild {:builds {:app {:compiler {:optimizations :advanced
                                         :pretty-print false}}}}}]}
