(defproject metosin/lomakkeet "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :source-paths ["src"]
  :dependencies [[org.clojure/clojure "1.6.0" :scope "provided"]
                 [org.clojure/clojurescript "0.0-2850" :scope "provided"]

                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [prismatic/schema "0.3.3"]
                 [prismatic/plumbing "0.3.5"]
                 [org.omcljs/om "0.8.8"]
                 [prismatic/om-tools "0.3.10" :exclusions [org.clojure/clojure]]
                 [sablono "0.3.3"]
                 [com.andrewmcveigh/cljs-time "0.3.0"]
                 [cljsjs/moment "2.6.0-3"]
                 [cljsjs/pikaday "1.2.0-2"]]
  :plugins [[lein-pprint "1.1.2"]])
