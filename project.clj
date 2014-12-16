(defproject lomakkeet "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [prismatic/schema "0.3.3"]
                 [prismatic/plumbing "0.3.5"]
                 [org.clojure/clojurescript "0.0-2411"]
                 [om "0.8.0-beta3"]
                 [prismatic/om-tools "0.3.6" :exclusions [org.clojure/clojure]]
                 [sablono "0.2.22"]
                 [com.andrewmcveigh/cljs-time "0.2.4"]
                 [cljs-http "0.1.22"]
                 [org.webjars/momentjs "2.8.3"]
                 [org.webjars/Pikaday "1.2.0"]
                 [figwheel "0.1.7-SNAPSHOT"]
                 ]

  :figwheel {:http-server-root "public"
             :server-port 3450
             :css-dirs ["resources/public/css"]}

  :cljsbuild {:builds {:app {:source-paths ["src" "example"]
                             :compiler {:output-to "resources/public/js/example.js"
                                        :output-dir "resources/public/js/out"
                                        :source-map "resources/public/js/out.js.map"
                                        :preamble ["react/react.min.js"
                                                   "META-INF/resources/webjars/momentjs/2.8.3/moment.js"
                                                   "META-INF/resources/webjars/Pikaday/1.2.0/pikaday.js"]
                                        :externs ["react/externs/react.js"]
                                        :optimizations :none
                                        :pretty-print true}}}}

  :profiles {:dev
             {:repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}

              :plugins [[lein-cljsbuild "1.0.3"]
                        [lein-figwheel "0.1.7-SNAPSHOT"]]}})
