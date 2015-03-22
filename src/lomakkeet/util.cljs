(ns lomakkeet.util
  (:require-macros [cljs.core.async.macros :as a])
  (:require cljs.core.async.impl.channels
            [cljs.core.async :as a]))

(defn- chan? [v]
  (instance? cljs.core.async.impl.channels.ManyToManyChannel v))

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

; Source: https://gist.github.com/Deraen/946ac9e6c6211c83f1e9
(defn debounce [in ms]
  "Creates a channel which will change put a new value to the output channel
   after timeout has passed. Each value change resets the timeout. If value
   changes more frequently only the latest value is put out.

   When input channel closes, the output channel is closed."
  (let [out (a/chan)]
    (a/go-loop [last-val nil]
      (let [val (if (nil? last-val) (a/<! in) last-val)
            timer (a/timeout ms)]
        (a/alt!
          in ([v] (if v
                    (recur v)
                    (a/close! out)))
          timer ([_] (do (a/>! out val) (recur nil))))))
    out))

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
