(ns komponentit.util)

(defn limit
  "Limit x: a < x b"
  [a b x]
  (max a (min b x)))
