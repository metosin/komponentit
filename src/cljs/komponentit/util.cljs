(ns komponentit.util)

(defn dissoc-in
  "Dissociates an entry from a nested associative structure returning a new
   nested structure. keys is a sequence of keys. Any empty maps that result
   will not be present in the new structure."
  [m [k & ks :as keys]]
  (if ks
    (if-let [nextmap (get m k)]
      (let [newmap (dissoc-in nextmap ks)]
        (if (seq newmap)
          (assoc m k newmap)
          (dissoc m k)))
      m)
    (dissoc m k)))

(defn keep-visible!
  "Given parent element with scrollbar, keep the children visible."
  [parent el]
  (let [par-offset (.-scrollTop parent)
        par-height (.-clientHeight parent)
        child-offset (.-offsetTop el)
        child-height (.-clientHeight el)]
    ; Scroll down
    (if (> (+ child-offset child-height) (+ par-offset par-height))
      (set! (.-scrollTop parent) (- (+ child-offset child-height) par-height))
      ; Scroll up
      (if (< child-offset par-offset)
        (set! (.-scrollTop parent) child-offset)))))

(defn limit
  "Limit x: a < x b"
  [a b x]
  (max a (min b x)))
