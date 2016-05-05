(ns komponentit.common-test)

(defn container-div []
  (let [id  (str "container-" (gensym))
        div (.createElement js/document "div")]
    (aset div "id" id)
    [div (str  id)]))

(defn append-container [container]
  (-> js/document .-body (.appendChild container)))

(defn create-container []
  (let [[n id] (container-div)]
    (append-container n)
    (.getElementById js/document id)))
