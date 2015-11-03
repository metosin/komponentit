(ns example.search-highlight
  (:require [lomakkeet.autocomplete :as ac]
            [reagent.core :as r]
            [cljs.test :refer-macros [is]]
            [devcards.core :as dc :include-macros true])
  (:import [goog.date Date]))

(dc/defcard-rg highlight-example
  (fn [value _]
    [:ul
     [ac/highlight-string "Pekka" ["pek"]]])
  (r/atom nil)
  {:inspect-data true})

(dc/deftest highlight-string-test
  (is (= [:span [:span.highlight "Pek"] "ka"]
         (ac/highlight-string "Pekka" ["pek"])))
  (is (= [:span "Joo tässä " [:span.highlight "on"] ". Tekstiä " [:span.highlight "okei"] " moi kivaa!"]
         (ac/highlight-string "Joo tässä on. Tekstiä okei moi kivaa!" ["on" "okei"]))))
