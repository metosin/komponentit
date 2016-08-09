(set-env!
  :source-paths #{"example-src/cljs" "example-src/less" "example-src/html"}
  :resource-paths #{"src/cljs" "src/less"}
  :dependencies '[[org.clojure/clojure    "1.8.0"      :scope "provided"]
                  [org.clojure/clojurescript "1.8.51"  :scope "provided"]
                  [adzerk/boot-cljs       "1.7.228-1"  :scope "test"]
                  [adzerk/boot-cljs-repl  "0.3.0"      :scope "test"]
                  [com.cemerick/piggieback "0.2.1"     :scope "test"]
                  [weasel                  "0.7.0"     :scope "test"]
                  [org.clojure/tools.nrepl "0.2.12"    :scope "test"]
                  [adzerk/boot-reload     "0.4.7"      :scope "test"]
                  [deraen/boot-less       "0.5.0"      :scope "test"]
                  [pandeiro/boot-http     "0.7.3"      :scope "test"]

                  [prismatic/schema "1.1.1"]
                  [metosin/schema-tools "0.9.0"]
                  [com.andrewmcveigh/cljs-time "0.4.0"]
                  [cljsjs/pikaday "1.4.0-1"]
                  ;; Reagent before devcards to use proper React version
                  [reagent "0.6.0-SNAPSHOT"]
                  ;; Devcards has "closer" dependency to cljsjs/react package which
                  ;; overwrites Reagent version
                  [cljsjs/react "15.0.2-0" :scope "test"]
                  [devcards "0.2.1-7" :scope "test"]

                  ; LESS
                  [org.webjars/bootstrap "3.3.4"]])

(require
  '[adzerk.boot-cljs      :refer [cljs]]
  '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl repl-env]]
  '[adzerk.boot-reload    :refer [reload]]
  '[deraen.boot-less      :refer [less]]
  '[pandeiro.boot-http    :refer [serve]])

(def +version+ "0.1.4-SNAPSHOT")

(task-options!
  pom {:project 'metosin/komponentit
       :version +version+
       :description "Collection of bespoke Reagent components"
       :license {"Eclipse Public License" "http://www.eclipse.org/legal/epl-v10.html"}
       :url "https://github.com/metosin/komponentit"
       :scm {:url "https://github.com/metosin/komponentit"}}
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
    (sift :include #{#"^(main.js|example.css|index.html)"})
    (target)))

(deftask build []
  (comp
    (pom)
    (jar)
    (install)))

(deftask deploy []
  (comp
    (build)
    (push :repo "clojars" :gpg-sign (not (.endsWith +version+ "-SNAPSHOT")))))
