(defproject metosin/lomakkeet "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :source-paths ["src"]
  :dependencies [[org.clojure/clojure "1.6.0" :scope "provided"]
                 [org.clojure/clojurescript "0.0-2511" :scope "provided"]

                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [prismatic/schema "0.3.3"]
                 [prismatic/plumbing "0.3.5"]
                 [om "0.8.0-rc1"]
                 [prismatic/om-tools "0.3.10" :exclusions [org.clojure/clojure]]
                 [sablono "0.2.22"]
                 [com.andrewmcveigh/cljs-time "0.2.4"]
                 [org.webjars/momentjs "2.8.3"]
                 [org.webjars/Pikaday "1.2.0"]]
  :plugins [[lein-pprint "1.1.2"]])
