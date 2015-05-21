(defproject metosin/lomakkeet-example "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :source-paths ["src/clj"]
  :dependencies [[org.clojure/clojure "1.7.0-beta3"]
                 [org.clojure/clojurescript "0.0-3269"]
                 [metosin/lomakkeet "0.2.0-SNAPSHOT"]
                 [metosin/potpuri "0.2.2"]
                 [reagent "0.5.0"]
                 [org.omcljs/om "0.8.8"]
                 [sablono "0.3.4"]
                 [metosin/om-dev-tools "0.1.7"]

                 [org.webjars/bootstrap "3.3.4"]

                 [figwheel "0.3.3"]]
  :plugins [[lein-pprint "1.1.2"]]

  :cljsbuild
  {:builds {:dev {:source-paths ["src/cljs" "checkouts/lomakkeet/src" "checkouts/lomakkeet/test"]
                  :figwheel true
                  :compiler {:main "example.main"
                             :asset-path "js/out"
                             :output-to "target/cljsbuild-dev/public/js/app.js"
                             :output-dir "target/cljsbuild-dev/public/js/out"
                             :verbose true
                             :source-map true
                             :optimizations :none}}
            :adv {:source-paths ["src/cljs" "checkouts/lomakkeet/src"]
                  :compiler {:main "example.main"
                             :output-to "target/cljsbuild-adv/public/js/app.js"
                             :output-dir "target/cljsbuild-adv/public/js/out"
                             :source-map "target/cljsbuild-adv/public/js/out.js.map"
                             :optimizations :advanced}}}}

  :less {:source-paths ["src/less" "checkouts/lomakkeet/resources"]
         :target-path "target/generated/css/public"
         :source-map true}

  :figwheel {:http-server-root "public"
             :server-port 3450
             :css-dirs ["target/generated/css/public"]
             :repl false}

  :profiles {:dev {:source-paths ["dev-src/clj"]
                   :plugins [[lein-cljsbuild "1.0.4"]
                             [lein-figwheel "0.3.3"]
                             [deraen/lein-less4j "0.2.1"]
                             [lein-pdo "0.1.1"]]

                   :resource-paths ["resources" "target/cljsbuild-dev" "target/generated/css"]}

             :uberjar {:resource-paths ["resources" "target/cljsbuild-adv" "target/generated/css"]}}

  :aliases {"develop" ["pdo" ["less4j" "auto"] ["figwheel"]]})
