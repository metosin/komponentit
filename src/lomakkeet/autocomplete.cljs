(ns lomakkeet.autocomplete
  (:require-macros [cljs.core.async.macros :refer [go]]
                   lomakkeet.autocomplete)
  (:require [clojure.string :as string]
            [cljs.core.async :refer [put!]]
            [lomakkeet.util :as util]
            [lomakkeet.impl.mixins :as mixins]
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

(defn blur [owner e]
  (when (.-relatedTarget e)
    (om/set-state! owner :open? false)
    (om/set-state! owner :search nil))
  nil)

(defn click [owner e]
  (om/set-state! owner :open? true)
  (.stopPropagation e)
  nil)

(defn focus [owner _]
  (if-not (om/get-state owner :open?)
    (om/set-state! owner :input ""))
  (om/set-state! owner :open? true)
  nil)

(defn change [owner cb e]
  (let [v (.. e -target -value)]
    (om/set-state! owner :input v)
    (cb v))
  nil)

(defn key-down [owner find-by-selection cb e]
  (let [selected (om/get-state owner :selection)
        n (om/get-state owner :count)
        change-selection (fn change-selection  [f e]
                           (om/update-state! owner :selection (comp (partial util/limit 0 n) f))
                           (.preventDefault e)
                           (.stopPropagation e))]
    (om/set-state! owner :open? true)

    (case (.-key e)
      "Enter" (when-let [v (find-by-selection (om/get-state owner :data) (om/get-state owner :selection))]
                (cb v)
                (om/set-state! owner :open? false)
                (om/set-state! owner :search nil))
      "ArrowUp" (change-selection dec e)
      "ArrowDown" (change-selection inc e)
      nil)))

(defn default-find-by-selection [data x]
  (some (fn [{:keys [i] :as v}]
          (if (= i x) v))
        data))

(defn init-state []
  {:data nil ; The results
   :selection 0 ; Selected item
   :input nil ; Search string
   :open? false
   :debounce (mixins/debounce-init)})
