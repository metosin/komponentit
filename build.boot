(set-env!
  :source-paths #{"example-src/cljs" "example-src/less" "example-src/html"}
  :resource-paths #{"src/cljs" "src/less"}
  ; :checkouts '[[reagent "0.6.0-SNAPSHOT"]]
  :dependencies '[[org.clojure/clojure    "1.8.0"      :scope "provided"]
                  [org.clojure/clojurescript "1.9.89"  :scope "provided"]
                  [adzerk/boot-cljs       "1.7.228-2"  :scope "test"]
                  [adzerk/boot-cljs-repl  "0.3.3"      :scope "test"]
                  [com.cemerick/piggieback "0.2.1"     :scope "test"]
                  [weasel                  "0.7.0"     :scope "test"]
                  [org.clojure/tools.nrepl "0.2.12"    :scope "test"]
                  [adzerk/boot-reload     "0.5.0"      :scope "test"]
                  [deraen/boot-less       "0.6.0"      :scope "test"]
                  [org.slf4j/slf4j-nop    "1.7.21"     :scope "test"]
                  [metosin/boot-alt-http  "0.1.1"      :scope "test"]

                  ;; FIXME: Drop
                  [com.andrewmcveigh/cljs-time "0.4.0"]
                  ;; Reagent before devcards to use proper React version
                  [reagent "0.6.0"]

                  ;; Dev
                  [cljsjs/leaflet "0.7.7-8" :scope "test"]
                  [cljsjs/react-leaflet "0.12.3-4" :scope "test"]
                  [cljsjs/react-input-autosize "1.1.0-0" :scope "test"]

                  ;; Devcards has "closer" dependency to cljsjs/react package which
                  ;; overwrites Reagent version
                  [cljsjs/react-with-addons "15.3.0-0" :scope "test"]
                  [devcards "0.2.1-7" :scope "test"]
                  [binaryage/devtools "0.8.3" :scope "test"]]
  :exclusions '[cljsjs/react])

(require
  '[adzerk.boot-cljs      :refer [cljs]]
  '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl repl-env]]
  '[adzerk.boot-reload    :refer [reload]]
  '[deraen.boot-less      :refer [less]]
  '[metosin.boot-alt-http :refer [serve]])

(def +version+ "0.2.3-SNAPSHOT")

(task-options!
  pom {:project 'metosin/komponentit
       :version +version+
       :description "Collection of bespoke Reagent components"
       :license {"Eclipse Public License" "http://www.eclipse.org/legal/epl-v10.html"}
       :url "https://github.com/metosin/komponentit"
       :scm {:url "https://github.com/metosin/komponentit"}}
  cljs {:source-map true}
  less {:source-map true})

(deftask build []
  (comp
    (pom)
    (jar)
    (install)))

(deftask dev []
  (comp
    (watch)
    (less)
    (reload :on-jsload 'example.main/restart!)
    (cljs-repl)
    (cljs)
    (serve :prefixes #{""} :port 4081)
    (build)))

(deftask build-example []
  (comp
    (less)
    (cljs :optimizations :advanced)
    (sift :to-resource #{#"^index\.html"})
    (sift :include #{#"^(main.js|example.css|index.html)"})
    (target)))

(deftask deploy []
  (comp
    (build)
    (push :repo "clojars" :gpg-sign (not (.endsWith +version+ "-SNAPSHOT")))))
