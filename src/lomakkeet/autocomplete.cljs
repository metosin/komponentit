(ns lomakkeet.autocomplete
  (:require-macros [cljs.core.async.macros :refer [go]]
                   lomakkeet.autocomplete)
  (:require [clojure.string :as string]
            [cljs.core.async :refer [put!]]
            [lomakkeet.util :as util]
            [lomakkeet.action :refer [action!]]))

;;
;; Utils
;;

(defn normalize [s]
  ; FIXME:
  (some-> s string/lower-case))

(defn highlight-string [s query]
  ; FIXME: If normalized strings length is different, this will break!
  (if query
    (loop [rst s
           r [:span]]
      ; Find first matching term
      (let [[i match]
            (reduce (fn [[i :as acc] term]
                      (let [x (.indexOf (normalize rst) term)]
                        (if (and (not= x -1) (or (= i -1) (< x i)))
                          [x (subs rst x (+ x (count term)))]
                          acc)))
                    [-1 nil]
                    query)
            pre (subs rst 0 i)]
        (if (not= i -1)
          (recur (subs rst (+ i (count match)))
                 (if (seq pre)
                   (conj r pre [:span.highlight match])
                   (conj r [:span.highlight match])))
          (if (seq rst)
            (conj r rst)
            r))))
    [:span s]))

(defn- query-match? [term-match? v query]
  (every? (partial term-match? v) query))

(defn matches [term-match? v query]
  (let [m (group-by (partial term-match? v) query)]
    [(get m true) (get m false)]))

(defn default->query [search]
  (some-> search
    (.toLowerCase)
    (.split #" ")
    (->> (remove empty?))))

(defn default-find-by-selection [data x]
  (some (fn [{:keys [i] :as v}]
          (if (= i x) v))
        data))
