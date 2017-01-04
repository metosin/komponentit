(ns example.search-highlight
  (:require [komponentit.highlight :refer [highlight-string]]
            [komponentit.autocomplete :as ac]
            [reagent.core :as r]
            [cljs.test :refer-macros [is]]
            [devcards.core :as dc :include-macros true])
  (:import [goog.date Date]))

(defn wrapper [s]
  [:span {:style {:background "#ccccff"}} s])

(dc/defcard
  (str
"# Highlight ([View source](https://github.com/metosin/komponentit/blob/master/src/cljs/komponentit/highlight.cljs))

Highlights matches in a string."))

(dc/defcard-rg highlight-example
  [:ul
   [:li [highlight-string "Pekka" ["pek"] wrapper]]
   [:li [highlight-string "This is a string" ["this" "str"] wrapper]]])

(def lorem "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")

(dc/defcard-rg lorem-highlight
  (fn [search _]
    [:div
     [:p [highlight-string lorem (ac/default->query @search) wrapper]]
     [:input {:type "text"
              :placeholder "Search terms"
              :value @search
              :on-change #(reset! search (.. % -target -value))}]])
  (r/atom ""))

(dc/deftest highlight-string-test
  (is (= [:span]
         (highlight-string nil ["pek"])))
  (is (= [:span "xx"]
         (highlight-string "xx" nil)))
  (is (= [:span "empty search term"]
         (highlight-string "empty search term" [""])))
  (is (= [:span [:span.highlight "Pek"] "ka"]
         (highlight-string "Pekka" ["pek"])))
  (is (= [:span [:span.foo "Pek"] "ka"]
         (highlight-string "Pekka" ["pek"] (fn [s] [:span.foo s])))
      "wrapper")
  (is (= [:span [:span.highlight "Yeah"] " " [:span.highlight "okay"] ", here is some text."]
         (highlight-string "Yeah okay, here is some text." ["yeah" "okay"])))

  (is (= [:span "Matches terms " [:span.highlight "in"] " " [:span.highlight "any"] " " [:span.highlight "order"] ""]
         (highlight-string "Matches terms in any order"
                              ["order" "any" "in"]))))
