(set-env!
  :source-paths #{"example-src/cljs" "example-src/less" "example-src/html"}
  :resource-paths #{"src/cljs" "src/less"}
  :dependencies '[[org.clojure/clojure    "1.7.0"      :scope "provided"]
                  [org.clojure/clojurescript "1.7.170" :scope "provided"]
                  [boot/core              "2.5.2"      :scope "test"]
                  [adzerk/boot-cljs       "1.7.170-3"  :scope "test"]
                  [adzerk/boot-cljs-repl  "0.3.0"      :scope "test"]
                  [com.cemerick/piggieback "0.2.1"     :scope "test"]
                  [weasel                  "0.7.0"     :scope "test"]
                  [org.clojure/tools.nrepl "0.2.12"    :scope "test"]
                  [adzerk/boot-reload     "0.4.2"      :scope "test"]
                  [deraen/boot-less       "0.4.2"      :scope "test"]
                  [pandeiro/boot-http     "0.7.0"      :scope "test"]
                  [devcards               "0.2.0-8"    :scope "test"]

                  [prismatic/schema "1.0.3"]
                  [metosin/schema-tools "0.7.0"]
                  [com.andrewmcveigh/cljs-time "0.3.14"]
                  [cljsjs/pikaday "1.4.0-1"]
                  [reagent "0.5.1"]

                  ; LESS
                  [org.webjars/bootstrap "3.3.4"]])

(require
  '[adzerk.boot-cljs      :refer [cljs]]
  '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl repl-env]]
  '[adzerk.boot-reload    :refer [reload]]
  '[deraen.boot-less      :refer [less]]
  '[pandeiro.boot-http    :refer [serve]])

(def +version+ "0.3.0-SNAPSHOT")

(task-options!
  pom {:project 'metosin/lomakkeet
       :version +version+
       :description "Proof of concept: Form library for Reagent"
       :license {"Eclipse Public License" "http://www.eclipse.org/legal/epl-v10.html"}
       :url "https://github.com/metosin/lomakkeet"
       :scm {:url "https://github.com/metosin/lomakkeet"}}
  cljs {:source-map true}
  less {:source-map true})

(deftask dev []
  (comp
    (watch)
    (less)
    (reload :on-jsload 'example.main/restart!)
    (cljs-repl)
    (cljs)
    (serve :port 3001 :resource-root "")))

(deftask build-example []
  (comp
    (less)
    (cljs :optimizations :advanced)
    (sift :to-resource #{#"^index\.html"})
    (sift :include #{#"^(main.js|example.css|index.html)"})))

(deftask build []
  (comp
    (pom)
    (jar)
    (install)))

(deftask deploy []
  (comp
    (build)
    (push :repo "clojars" :gpg-sign (not (.endsWith +version+ "-SNAPSHOT")))))
