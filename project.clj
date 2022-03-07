(defproject metosin/komponentit "0.3.10"
  :description "Collection of bespoke Reagent components"
  :license {"Eclipse Public License" "http://www.eclipse.org/legal/epl-v10.html"}
  :url "https://github.com/metosin/komponentit"
  :scm {:url "https://github.com/metosin/komponentit"}

  :dependencies [[com.andrewmcveigh/cljs-time "0.5.2"]
                 [reagent "1.1.0"]]

  :plugins [[deraen/lein-less4clj "0.7.4"]
            [deraen/lein-sass4clj "0.5.1"]
            [lein-figwheel "0.5.19"]]

  :source-paths ["src/cljs"]
  :resource-paths ["src/less"]

  :profiles {:dev {:dependencies [[org.clojure/clojurescript "1.11.4"]

                                  [cljsjs/react-transition-group "4.3.0-0"]
                                  [cljsjs/leaflet "1.7.1-0"]
                                  [cljsjs/react-leaflet "3.1.0-0"]
                                  [cljsjs/react-input-autosize "2.2.1-1"]
                                  [metosin/clj-suomi "0.2.1"]
                                  [cljsjs/codemirror "5.44.0-1"]
                                  [cljsjs/parinfer "3.11.0-0"]
                                  [cljsjs/parinfer-codemirror "1.4.1-2"]

                                  [devcards "0.2.7"]
                                  [binaryage/devtools "1.0.5"]]
                   :resource-paths ["dev-target" "example-src/html"]}}

  :sass4clj {:source-map true
             :source-paths ["example-src/less" "src/less"]
             :target-path "dev-target/public/"}
  :less4clj {:source-map true
             :source-paths ["example-src/less" "src/less"]
             :target-path "dev-target/public/"}
  :figwheel {:server-port 3677}

  :cljsbuild {:builds [{:id "example"
                        :source-paths ["src/cljs" "example-src/cljs"]
                        :figwheel {:devcards true}
                        :compiler {:main "example.main"
                                   :asset-path "out"
                                   :output-to "dev-target/public/main.js"
                                   :output-dir "dev-target/public/out"
                                   :preloads [devtools.preload]
                                   :npm-deps false
                                   :external-config {:devtools/config {:features-to-install [:formatters :hints]}}
                                   :foreign-libs [{:file "public/codemirror/mode/clojure/clojure-parinfer.js"
                                                   :provides ["parinfer.codemirror"]
                                                   :requires ["cljsjs.codemirror"]}]}}

                       {:id "prod"
                        :source-paths ["src/cljs" "example-src/cljs"]
                        :compiler {:main "example.main"
                                   :devcards true
                                   :optimizations :advanced
                                   :asset-path "out"
                                   :output-to "build-target/public/main.js"
                                   :output-dir "build-target/public/out"
                                   :npm-deps false
                                   :stable-names true
                                   :source-map "build-target/public/main.js.map"
                                   :foreign-libs [{:file "public/codemirror/mode/clojure/clojure-parinfer.js"
                                                   :provides ["parinfer.codemirror"]
                                                   :requires ["cljsjs.codemirror"]}]}} ]})
