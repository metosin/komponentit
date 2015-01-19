(defproject metosin/lomakkeet-example "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :source-paths ["src/clj"]
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2665"]
                 [metosin/lomakkeet "0.1.0-SNAPSHOT"]
                 [metosin/potpuri "0.2.1"]

                 ; Example server
                 [org.clojure/tools.namespace "0.2.8"]
                 [ring "1.3.2"]
                 [compojure "1.3.1"]
                 [http-kit "2.1.19"]

                 [figwheel "0.2.2-SNAPSHOT"]]
  :plugins [[lein-pprint "1.1.2"]])
