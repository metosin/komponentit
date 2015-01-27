(ns lomakkeet.autocomplete-test
  (:require [cljs.test :as test :refer-macros [deftest testing is]]
            [lomakkeet.autocomplete :as [ac]]))

(deftest highlight-match-test
  (is (= (highlight-match "FI: Finland" ["fi"])
         [:span [:span.highlight "FI"] ": Finland"])))

(test/run-tests)
