(ns komponentit.mixins
  (:require [reagent.core :as r]
            [clojure.set :as set]
            [clojure.string :as string]
            [goog.events :as events]
            [goog.object :as obj]))

(defn- get-event-type [k]
  (or (obj/get events/EventType (-> k name string/upper-case (string/replace #"^ON-" "") (string/replace #"-" "")))
      (throw (js/Error. (str "Event type " (name k) " is not valid.")))))

(defn- update-listeners [listeners props this]
  (swap! listeners
         (fn [listeners]
           (let [current-event-types (set (keys listeners))
                 new-event-types (set (keys props))]
             (as-> listeners $
               (reduce (fn [listeners event-type]
                         (assoc listeners event-type
                                (events/listen js/window (get-event-type event-type)
                                               ;; Need to retrieve latest props incase the function as been updated
                                               (fn [e]
                                                 (let [f (get (r/props this) event-type)]
                                                   (f e))))))
                       $ (set/difference new-event-types current-event-types))
               (reduce (fn [listeners event-type]
                         (events/unlistenByKey (get listeners event-type))
                         (dissoc listeners event-type))
                       $ (set/difference current-event-types new-event-types)))))))

(defn window-event-listener
  "Props can contain on-key-down, on-click..."
  [_]
  (let [listeners (atom nil)]
    (r/create-class
      {:display-name "komponentit.mixins.window_event_listener_class"
       :component-did-mount (fn [this] (update-listeners listeners (r/props this) this))
       :component-did-update (fn [this] (update-listeners listeners (r/props this) this))
       :component-will-unmount (fn [this] (update-listeners listeners {} this))
       :reagent-render
       (fn [props child]
         child)})))
