{:shared
 ; Watch the changes in the lib
 {:cljsbuild {:builds {:app {:source-paths ["src/cljs" "checkouts/lomakkeet/src"]
                             :compiler {:output-to "target/cljsbuild/public/js/app.js"
                                        :output-dir "target/cljsbuild/public/js/out"
                                        :source-map "target/cljsbuild/public/js/out.js.map"
                                        :preamble ["react/react.min.js"
                                                   "META-INF/resources/webjars/momentjs/2.8.3/min/moment.min.js"
                                                   "META-INF/resources/webjars/Pikaday/1.2.0/pikaday.js"]
                                        :externs ["react/externs/react.js"]
                                        :optimizations :none
                                        :pretty-print true}}}}
  :source-paths ["dev-src/clj"]
  :resource-paths ["resources" "target/cljsbuild"]}

 :dev
 [:shared
  {:repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}

   :plugins [[lein-cljsbuild "1.0.4"]
             [lein-figwheel "0.2.0-SNAPSHOT"]]

   :figwheel {:http-server-root "public"
              :server-port 3450
              :css-dirs ["resources/public/css"]}

   :cljsbuild {:builds {:app {:source-paths ["dev-src/cljs"]
                              :compiler {:output-to "target/cljsbuild/public/js/cljsbuild-main.js"}}}}}]

 :prod
 [:shared
  {:cljsbuild {:builds {:app {:compiler {:optimizations :advanced
                                         :pretty-print false}}}}}]}
