(ns lomakkeet.autocomplete
  (:require-macros [cljs.core.async.macros :refer [go]]
                   lomakkeet.autocomplete)
  (:require [clojure.string :as string]
            [cljs.core.async :refer [put!]]
            [lomakkeet.util :as util]))

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

(defn- query-match? [term-match-fn v query]
  (every? (partial term-match-fn v) query))

(defn matches [term-match-fn v query]
  (let [m (group-by (partial term-match-fn v) query)]
    [(get m true) (get m false)]))

(defn default->query [search]
  (some-> search
    (.toLowerCase)
    (.split #" ")
    (->> (remove empty?))
    vec))

(defn default-find-by-selection [data x]
  (some (fn [v]
          (if (= (::i v) x) v))
        data))

(defn- default-group-find-by-selection [data x]
  (some (fn [[_ data]]
          (some (fn [v]
                  (if (= (::i v) x) v))
                data))
        data))

(defn create-matcher*
  "Fields can be either collection containing multiple key for map,
   or a single key.
   If collection is given, returned function will go through keys using some."
  [fields]
  (if (sequential? fields)
    (fn [item term]
      (some (fn [field]
              (some-> item (get field) (-> (.toLowerCase) (.indexOf term) (not= -1))))
            fields))
    (fn [item term]
      (some-> item (get fields) (-> (.toLowerCase) (.indexOf term) (not= -1))))))
