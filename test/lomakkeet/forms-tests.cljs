(ns lomakkeet.forms-tests
  (:require [cemerick.cljs.test :refer-macros [deftest testing is done]]
            [lomakkeet.common-test :as c]
            [lomakkeet.fields :as f]
            [sablono.core :refer-macros [html]]
            [schema.core :as s :include-macros true]
            [plumbing.core :refer-macros [defnk]]
            [om.core :as om :include-macros true]
            [om-tools.dom :as dom :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]))

(extend-type js/NodeList
  ISeqable
  (-seq [array] (array-seq array 0)))

(s/defschema Thingie
  {:name s/Str})

(def empty-thing
  {:name "Luke Skywalker"})

(def initial-state
  (f/->form-state empty-thing Thingie))

(def state (atom initial-state))

(declare test-render)

(defn test-render-with-opts [opts more]
  (test-render (assoc more :opts opts)))

(defnk test-render
  [opts form-state form ch value]
  (html
    (f/input form "name" [:name] opts)))

(defn test-view
  [opts state owner]
  (reify
    om/IRender
    (render [this]
      (om/build
        f/form state
        {:opts {:render-fn (partial test-render-with-opts opts)}}))))

(defn label
  [cnt]
  (let [elems (.querySelectorAll cnt "label span")]
    (reduce str (map #(.-innerText %) elems))))

(deftest test-label-separator
  (let [cnt (c/create-container)]
    (om/root (partial test-view {}) state {:target cnt})
    (is (= "name:" (label cnt))))
  (let [cnt (c/create-container)]
    (om/root (partial test-view {:label-separator ""}) state {:target cnt})
    (is (= "name" (label cnt)))))
