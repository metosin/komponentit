(ns komponentit.mixins
  (:require [reagent.core :as r]
            [clojure.set :as set]
            [clojure.string :as string]))

(defn ->event-type [k]
  (-> k name (string/replace #"^on-" "") (string/replace #"-" "")))

(defn- update-listeners [el listeners props this]
  (swap! listeners
         (fn [listeners]
           (let [current-event-types (set (keys listeners))
                 new-event-types (set (keys props))]
             (as-> listeners $
               (reduce (fn [listeners k]
                         (let [f (fn [e]
                                   ;; Need to retrieve latest callback in case the props have been updated
                                   (let [f (get (r/props this) k)]
                                     (f e)))]
                           (.addEventListener el (->event-type k) f)
                           (assoc listeners k f)))
                       $ (set/difference new-event-types current-event-types))
               (reduce (fn [listeners k]
                         (.removeEventListener el (->event-type k) (get listeners k))
                         (dissoc listeners k))
                       $ (set/difference current-event-types new-event-types)))))))

(defn window-event-listener
  [_]
  (let [listeners (atom nil)]
    (r/create-class
      {:display-name "komponentit.mixins.window_event_listener_class"
       :component-did-mount (fn [this] (update-listeners js/window listeners (r/props this) this))
       :component-did-update (fn [this] (update-listeners js/window listeners (r/props this) this))
       :component-will-unmount (fn [this] (update-listeners js/window listeners {} this))
       :reagent-render
       (fn [props child]
         child)})))
