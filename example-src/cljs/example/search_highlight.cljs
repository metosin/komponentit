(ns example.search-highlight
  (:require [lomakkeet.autocomplete :as ac]
            [reagent.core :as r]
            [cljs.test :refer-macros [is]]
            [devcards.core :as dc :include-macros true])
  (:import [goog.date Date]))

(defn wrapper [s]
  [:span {:style {:background "#ccccff"}} s])

(dc/defcard-rg highlight-example
  [:ul
   [:li [ac/highlight-string "Pekka" ["pek"] wrapper]]
   [:li [ac/highlight-string "Tämä on joku merkkijono" ["tämä" "merkki"] wrapper]]])

(dc/deftest highlight-string-test
  (is (= [:span [:span.highlight "Pek"] "ka"]
         (ac/highlight-string "Pekka" ["pek"])))
  (is (= [:span [:span.foo "Pek"] "ka"]
         (ac/highlight-string "Pekka" ["pek"] (fn [s] [:span.foo s])))
      "wrapper")
  (is (= [:span "Joo tässä " [:span.highlight "on"] ". Tekstiä " [:span.highlight "okei"] " moi kivaa!"]
         (ac/highlight-string "Joo tässä on. Tekstiä okei moi kivaa!" ["on" "okei"]))))
