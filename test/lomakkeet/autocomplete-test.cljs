(ns lomakkeet.autocomplete-test
  (:require [cemerick.cljs.test :as test :refer-macros [deftest testing is]]
            [lomakkeet.autocomplete :as ac]))

(deftest highlight-match-test
  (is (= (ac/highlight-match [:span "Finland"] ["fi"])
         [:span "" [:span.highlight "Fi"] "nland"])))
