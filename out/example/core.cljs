(ns example.core
  (:require [clojure.string :as str]))

(defn header [module module-name]
  (str
    "# "
    module-name
    "\n## [view source]("
    "https://github.com/metosin/komponentit/blob/master/src/cljs/komponentit/" (name module) ".cljs"
    "), [view example source]("
    "https://github.com/metosin/komponentit/blob/master/example-src/cljs/example/" (name module) ".cljs"
    ")\n"))
