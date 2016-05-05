(ns komponentit.highlight
  (:require [clojure.string :as string]
            [komponentit.util :as util]))

;;
;; Utils
;;

(defn normalize [s]
  ; FIXME: Normalize unicode characters
  (some-> s string/lower-case))

(defn highlight-string
  ([s query] (highlight-string s query (fn [s] [:span.highlight s])))
  ([s query wrapper]
   ; Warning: this persumes that the normalization doesn't change the length of string
   (loop [rst s
          r [:span]]
     ; Find first location for each search term in the given string
     ; Select first match in string
     (if rst
       (let [normalized-rst (normalize rst)
             [i match] (reduce (fn [[i :as acc] term]
                                 (let [x (.indexOf normalized-rst term)]
                                   (if (and (not= x -1) (or (= i -1) (< x i)))
                                     [x (subs rst x (+ x (count term)))]
                                     acc)))
                               [-1 nil]
                               query)]
         ; If match found, recurse the rest of str
         (if (not= i -1)
           (let [a (subs rst 0 i)
                 b (subs rst i (+ i (count match)))
                 c (subs rst (+ i (count match)))]
             (recur c (if (seq a)
                        (conj r a (wrapper b))
                        (conj r (wrapper b)))))
           (conj r rst)))
       r))))
