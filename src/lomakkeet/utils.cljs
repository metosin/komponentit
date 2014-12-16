(ns lomakkeet.utils)

;; These should be especially useful with updating om state

; Collection first so these are usable with ->

; FIXME: https://lodash.com/docs#where
; "where" could be map: {:id 1} would update first match where item has :id with value 1
; "where" {:id 1 :foo "bar"} would check both kvs?
; if where is not map?, check for equal value?
; if where is set...?
(defn find-index
  "Find index of vector where item has matching value on given key."
  [coll k v]
  (first (keep-indexed #(if (= v (get %2 k)) %1) coll)))

(defn find-first
  "Find first value from collection where item has matching value for given key."
  [coll k v]
  (some (fn [x] (if (= v (get x k)) x)) coll))

; Collection last as these are used with partial (update-in state [:collection] (partial conjv {:id 1 :foo "bar"}))
(defn conjv [el coll]
  (into [] (conj coll el)))

(defn consv [el coll]
  (into [] (cons el coll)))
