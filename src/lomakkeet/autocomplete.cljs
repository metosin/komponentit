(ns lomakkeet.autocomplete
  (:require-macros [cljs.core.async.macros :refer [go]]
                   lomakkeet.autocomplete)
  (:require [clojure.string :as string]
            [cljs.core.async :refer [put!]]
            [om.core :as om]
            [sablono.core :refer-macros [html]]
            [lomakkeet.util :as util]
            [lomakkeet.impl.mixins :as mixins]))

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
  true)

(defn click [owner e]
  (om/set-state! owner :open? true)
  (.stopPropagation e)
  true)

(defn focus [owner _]
  (if-not (om/get-state owner :open?)
    (om/set-state! owner :input ""))
  (om/set-state! owner :open? true)
  true)

(defn change [owner cb e]
  (let [v (.. e -target -value)]
    (om/set-state! owner :input v)
    (cb v))
  true)

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

;;
;; Example components, you might reimplement these!
;;

(defn autocomplete-list*
  [_ owner {:keys [cb renderer item->key item->text]}]
  (reify
    om/IDisplayName
    (display-name [_] "autocomplete-list*")
    om/IRenderState
    (render-state [_ {:keys [data selection]}]
      (html
        [:div.selectize-dropdown-content
         (if (seq data)
           (for [{:keys [i] :as item} data]
             [:div
              {:key (item->key item)
               :class (if (= selection i) "active")
               :ref (str "item-" i)
               :data-selectable i}
              (item->text item)])
           [:div {:ref "item-0" :data-selectable 1} [:span "No results"]])]))))

(defn autocomplete*
  [{:keys [value]}
   owner
   {:keys [ch ks item->key value->text load-items find-by-selection ->query]
    :or {value->text identity
         find-by-selection default-find-by-selection
         ->query default->query}
    :as opts}]
  (let [cb (fn [item]
             (put! ch {:type :change
                       :ks ks
                       :value (item->key item)})
             (om/set-state! owner :open? false))]
    (reify
      om/IDisplayName
      (display-name [_] "autocomplete*")
      om/IInitState
      (init-state [_]
        (init-state))
      om/IWillMount
      (will-mount [_]
        (if value (load-items owner (->query value)))
        (mixins/debounce-will-mount (om/get-state owner :debounce) #(load-items owner (->query %)))
        (om/set-state! owner :closable (mixins/create-closable owner)))
      om/IWillUnmount
      (will-unmount [_]
        (mixins/debounce-will-unmount (om/get-state owner :debounce))
        ((om/get-state owner :closable)))
      om/IRenderState
      (render-state [_ {:keys [open? input data selection]}]
        (html
          [:div.selectize-control.single
           [:input.selectize-input
            {:on-focus  (partial focus owner)
             :on-click  (partial click owner)
             :on-change (partial change owner (fn [x]
                                                (put! (om/get-state owner :debounce) x)))
             :on-key-up (partial key-down owner find-by-selection cb)
             :value (or (if open? input (value->text value)) "")
             :class (if open? "input-active dropdown-active")
             :auto-complete false}]
           (when open?
             [:div.selectize-dropdown.single
              (om/build autocomplete-list* nil {:state {:data data
                                                        :selection selection}
                                                :opts (assoc opts :cb cb)})])])))))
