(defproject metosin/lomakkeet-example "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :source-paths ["src/clj"]
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2850"]
                 [metosin/lomakkeet "0.1.0-SNAPSHOT"]
                 [metosin/potpuri "0.2.1"]
                 [metosin/om-dev-tools "0.1.0"]

                 ; Example server
                 [org.clojure/tools.namespace "0.2.8"]
                 [ring "1.3.2"]
                 [compojure "1.3.1"]
                 [http-kit "2.1.19"]

                 [org.webjars/bootstrap "3.3.2"]
                 [org.webjars/selectize.js "0.11.2"]

                 [figwheel "0.2.2-SNAPSHOT"]]
  :plugins [[lein-pprint "1.1.2"]]

  :cljsbuild
  {:builds {:dev {:source-paths ["src/cljs" "checkouts/lomakkeet/src" "dev-src/cljs"]
                  :compiler {:main "example.figwheel"
                             :asset-path "js/out"
                             :output-to "target/cljsbuild-dev/public/js/app.js"
                             :output-dir "target/cljsbuild-dev/public/js/out"
                             :source-map true
                             :optimizations :none
                             :cache-analysis true
                             :pretty-print true}}
            :adv {:source-paths ["src/cljs" "checkouts/lomakkeet/src"]
                  :compiler {:main "example.main"
                             :output-to "target/cljsbuild-adv/public/js/app.js"
                             :output-dir "target/cljsbuild-adv/public/js/out"
                             :source-map "target/cljsbuild-adv/public/js/out.js.map"
                             :optimizations :advanced
                             :pretty-print false}}}}

  :less {:source-paths ["src/less"]
         :target-path "target/generated/css/public"
         :source-map true}

  :profiles
  {:dev
   {:source-paths ["dev-src/clj"]
    :plugins [[lein-cljsbuild "1.0.4"]
              [lein-figwheel "0.2.2-SNAPSHOT"]
              [lein-less4j "0.1.0-SNAPSHOT"]
              [lein-pdo "0.1.1"]]

    :figwheel {:http-server-root "public"
               :server-port 3450
               :css-dirs ["target/generated/css/public"]
               :repl false}

    :resource-paths ["resources" "target/cljsbuild-dev" "target/generated/css"]}

   :uberjar
   {:resource-paths ["resources" "target/cljsbuild-adv" "target/generated/css"]}}

  :aliases {"develop" ["pdo" ["less4j" "auto"] ["figwheel"]]})
