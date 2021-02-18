(ns example.autocomplete-tree
  (:require [komponentit.autocomplete :as autocomplete]
            [reagent.core :as r]
            [devcards.core :as dc :include-macros true]
            [clojure.string :as str]
            [cljs.test :refer-macros [is]]))

(def tree-data
  [{:id 1
    :name "Foo"
    :selectable? false
    :items [{:id 2
             :name "Bar"
             :selectable? false
             :items [{:id 3
                      :name "System Module"
                      :price 1380}
                     {:id 4
                      :name "ABC"
                      :price 1340}]}
            {:id 5
             :name "Ooooo"
             :selectable? false
             :items [{:id 6
                      :name "asdasd"
                      :price 9000}]}]}
   {:id 7
    :name "Bar"
    :selectable? false
    :items [{:id 8
             :name "A"
             :selectable? false
             :items [{:id 9
                      :name "Foo"
                      :price 50000}]}]}
   {:id 10
    :name "Lorem ipsum"
    :price 90}])

(defn tree-items-by-id [by-id items path]
  (reduce (fn [by-id item]
            (let [item (assoc item :path path)]
              (tree-items-by-id (assoc by-id (:id item) item)
                                (:items item)
                                (conj path (:id item)))))
          by-id
          items))

(dc/defcard-rg tree-autocomplete
  (fn [value _]
    [autocomplete/autocomplete
     {:value @value
      :cb (fn [item] (reset! value (:id item)))
      :search-fields [:name]
      :item->key :id
      :item->text (fn [item]
                    (str (::autocomplete/i item) " " (:name item) " (" (:id item) ")"))
      :value->text (fn [items id]
                     (if id
                       ;; FIXME: This is probably ran too often?
                       (let [items-by-id (tree-items-by-id {} items []) ]
                         (if-let [{:keys [id name path]} (get items-by-id id)]
                           (let [path (str/join " > " (map (comp :name items-by-id) path))]
                             (str (if (seq path) (str path " > "))
                                  name
                                  " (" id ")"))
                           (str "Unknown item, ID: " id)))))
      ;; Enable tree
      :item->items :items
      :items tree-data
      :debounce-timeout 250}])
  (r/atom nil))

(defn create-tree [index n depth]
  (into [] (map (fn [i]
                  (let [id (swap! index inc)
                        item {:id id
                              :name (str "Option " id)}]
                    (if (> depth 0)
                      (assoc item :items (create-tree index (/ (- n 2) 2) (dec depth)))
                      item)))
                (range (if (> depth 0)
                         2
                         n)))))

(def tree-data-large (create-tree (atom 0) 1000 4))

(dc/defcard-rg tree-autocomplete-lots-of-items
  (fn [value _]
    [autocomplete/autocomplete
     {:value @value
      :cb (fn [item] (reset! value (:id item)))
      :search-fields [:name]
      :item->key :id
      :item->text (fn [item]
                    (str (::autocomplete/i item) " " (:name item) " (" (:id item) ")"))
      :value->text (fn [items id]
                     (if id
                       ;; FIXME: This is probably ran too often?
                       (let [items-by-id (tree-items-by-id {} items []) ]
                         (if-let [{:keys [id name path]} (get items-by-id id)]
                           (let [path (str/join " > " (map (comp :name items-by-id) path))]
                             (str (if (seq path) (str path " > "))
                                  name
                                  " (" id ")"))
                           (str "Unknown item, ID: " id)))))
      ;; Enable tree
      :item->items :items
      :items tree-data-large
      :debounce-timeout 250}])
  (r/atom nil))

(dc/deftest sub-query-match?-test
  (let [match-fn (autocomplete/create-matcher* [:name])]
    (is (= [["foo"] ["bar"]] (autocomplete/sub-query-match? match-fn {:name "foo"} ["foo" "bar"])))))
