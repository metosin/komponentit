(defproject metosin/lomakkeet "0.2.0-SNAPSHOT"
  :description "Proof of concept: Form library for Om"
  :url "https://github.com/metosin/lomakkeet"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :source-paths ["src"]
  :dependencies [[org.clojure/clojure "1.7.0-beta3" :scope "provided"]
                 [org.clojure/clojurescript "0.0-3269" :scope "provided"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [prismatic/schema "0.4.2"]
                 [metosin/schema-tools "0.4.1"]
                 [com.andrewmcveigh/cljs-time "0.3.5"]
                 [cljsjs/pikaday "1.3.2-0"]]
  :plugins [[lein-pprint "1.1.2"]]

  :cljsbuild
  {:builds {:test {:source-paths ["src" "test"]
                   :notify-command ["phantomjs" :cljs.test/runner
                                    "test/phantomjs-shims.js"
                                    "target/testable.js"]
                   :compiler {:output-to  "target/testable.js"
                              :output-dir "target/cljsbuild-test"
                              :source-map "target/cljsbuild-test.js.map"
                              :optimizations :whitespace
                              :pretty-print  true
                              :verbose true}}}
   :test-commands {"test" ["phantomjs" :runner
                           "test/phantomjs-shims.js"
                           "target/testable.js"]}}

  :profiles
  {:dev
   {:source-paths ["dev-src/clj"]
    :plugins [[lein-cljsbuild "1.0.4"]
              [com.cemerick/clojurescript.test "0.3.3"]]
    :dependencies [[org.omcljs/om "0.8.8"]
                   [sablono "0.3.4"]
                   [reagent "0.5.0"]]}})
