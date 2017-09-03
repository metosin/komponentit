(set-env!
  :source-paths #{"example-src/cljs" "example-src/less" "example-src/html"}
  :resource-paths #{"src/cljs" "src/less"}
  ; :checkouts '[[reagent "0.6.0-SNAPSHOT"]]
  :dependencies '[[org.clojure/clojure    "1.8.0"      :scope "provided"]
                  [org.clojure/clojurescript "1.9.908" :scope "provided"]
                  [adzerk/boot-cljs       "2.1.3"      :scope "test"]
                  [adzerk/boot-cljs-repl  "0.3.3"      :scope "test"]
                  [com.cemerick/piggieback "0.2.2"     :scope "test"]
                  [weasel                  "0.7.0"     :scope "test"]
                  [org.clojure/tools.nrepl "0.2.13"    :scope "test"]
                  [adzerk/boot-reload     "0.5.2"      :scope "test"]
                  [deraen/boot-less       "0.6.2"      :scope "test"]
                  [org.slf4j/slf4j-nop    "1.7.25"     :scope "test"]
                  [metosin/boot-alt-http  "0.1.2"      :scope "test"]

                  ;; FIXME: Drop
                  [com.andrewmcveigh/cljs-time "0.5.1"]
                  ;; Reagent before devcards to use proper React version
                  [reagent "0.8.0-alpha1"]

                  ;; Dev
                  [cljsjs/react-transition-group "2.2.0-0" :scope "test"]
                  [cljsjs/leaflet "1.1.0-2" :scope "test"]
                  ;; FIXME: Exclusions can be removed once reagent has direct dep
                  [cljsjs/react-leaflet "1.4.1-2" :scope "test" :exclusions [cljsjs/react]]
                  [cljsjs/react-input-autosize "1.1.0-0" :scope "test" :exclusions [cljsjs/react]]
                  [metosin/clj-suomi "0.2.0" :scope "test"]
                  [cljsjs/codemirror "5.24.0-1" :scope "test"]
                  [metosin/codemirror-parinfer "0.1.0-SNAPSHOT" :scope "test"]

                  ;; Devcards has "closer" dependency to cljsjs/react package which
                  ;; overwrites Reagent version
                  [devcards "0.2.3" :scope "test" :exclusions [cljsjs/react]]
                  [binaryage/devtools "0.9.4" :scope "test"]])

(require
  '[adzerk.boot-cljs      :refer [cljs]]
  '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl repl-env]]
  '[adzerk.boot-reload    :refer [reload]]
  '[deraen.boot-less      :refer [less]]
  '[metosin.boot-alt-http :refer [serve]])

(def +version+ "0.3.0")

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
    (cljs :optimizations :none)
    (serve :prefixes #{""} :port 4081)
    ;; FIXME: build should only include source files, not cljs results
    (build)))

(deftask build-example []
  (comp
    (less)
    (cljs :optimizations :advanced
          :compiler-options {:preloads nil})
    (sift :to-resource #{#"^index\.html"})
    (sift :include #{#"^(main.js|example.css|index.html)"})
    (target)))

(deftask deploy []
  (comp
    (build)
    (push :repo "clojars" :gpg-sign (not (.endsWith +version+ "-SNAPSHOT")))))
