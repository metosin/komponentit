(ns komponentit.scrollbar-width
  (:require [reagent.core :as r]))

;; It would be easy to calculate scrollbar width once and use that for all components,
;; but it is possible that scrollbar width changes per element, if ::-webkit-scrollbar
;; rule is used.

(defn- get-scrollbar-width [el]
  (- (.-offsetWidth el) (.-scrollWidth el)))

(defn scrollbar-padding
  "Renders the container first time with forced scrollbar,
  but once the width of scrollbar can be detected, replaces
  scrollbar with padding."
  [_ & _]
  (let [scrollbar-width (r/atom nil)
        ref-fn (fn [el]
                 (when el
                   (reset! scrollbar-width (get-scrollbar-width el))))]
    (fn [props & children]
      (into [:div
             (-> props
                 (assoc :ref ref-fn)
                 (update :style merge (if @scrollbar-width
                                        {:padding-right @scrollbar-width}
                                        {:overflow-y "scroll"})))]
            children))))
