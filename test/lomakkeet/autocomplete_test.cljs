(ns komponentit.autocomplete-test
  (:require [cljs.test :as test :refer-macros [deftest testing is]]
            [komponentit.autocomplete :as ac]))

(deftest highlight-match-test
  (is (= [:span [:span.highlight "Fi"] "nland"]
         (ac/highlight-string "Finland" ["fi"]))))

(test/run-tests)
