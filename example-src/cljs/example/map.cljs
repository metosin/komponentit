(ns example.map
  (:require [reagent.core :as r]
            [devcards.core :as dc :include-macros true]
            [leaflet :as leaflet]
            [react-leaflet :as react-leaflet]))

(def copy-osm "&copy; <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors")
(def osm-url (str js/window.location.protocol "//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"))

(def Map (r/adapt-react-class react-leaflet/Map))
(def Marker (r/adapt-react-class react-leaflet/Marker))
(def Popup (r/adapt-react-class react-leaflet/Popup))
(def TileLayer (r/adapt-react-class react-leaflet/TileLayer))
(def LayerGroup (r/adapt-react-class react-leaflet/LayerGroup))
(def Circle (r/adapt-react-class react-leaflet/Circle))
(def CircleMarker (r/adapt-react-class react-leaflet/CircleMarker))

(defn make-icon [image-url opts]
  (leaflet/icon (-> opts (assoc :iconUrl image-url) (clj->js))))

(defn latLng->latlon [lat-lng]
  (if lat-lng [(.-lat lat-lng) (.-lng lat-lng)]))

(defn make-bounds [{:keys [sw ne]}]
  (leaflet/latLngBounds (clj->js sw) (clj->js ne)))

(defn map-bounds [map]
  (let [b (.getBounds map)]
    {:sw (-> b (.getSouthWest) (latLng->latlon))
     :nw (-> b (.getNorthWest) (latLng->latlon))
     :ne (-> b (.getNorthEast) (latLng->latlon))
     :se (-> b (.getSouthEast) (latLng->latlon))}))

(dc/defcard
  (str
"# React leaflet example ([View source](https://github.com/metosin/komponentit/blob/master/example-src/cljs/example/map.cljs))

Just example, no wrapper code is provided to work with React-leaflet."))

(def default-bounds {:sw [59.7121 14.9854]
                     :nw [70.5102 14.9854]
                     :ne [70.5102 37.3096]
                     :se [59.7121 37.3096]})

(def default-center [65.6583 26.1475])

(def default-highlight-opts {:stroke true
                             :color "#000000"
                             :weight 5
                             :opacity 0.3
                             :fill true
                             :fill-color "#000000"
                             :fill-opacity 0.1})

(def hover-highlight-opts (merge default-highlight-opts
                                 {:stroke false
                                  :fill-color "#555555"
                                  :fill-opacity 0.25}))
(def select-highlight-opts (merge default-highlight-opts
                                  {:color "#0494D2"
                                   :opacity 0.5
                                   :fill-color "#0494D2"}))

(defn random-coordinates []
  (let [[lat1 lng1] (:nw default-bounds)
        [lat2 lng2] (:se default-bounds)]
    (->> (repeatedly (fn []
                       [(long (+ lat1 (* (- lat2 lat1) (js/Math.random))))
                        (long (+ lng1 (* (- lng2 lng1) (js/Math.random))))]))
         (take 10))))

(dc/defcard-rg leaflet-example
  (fn [state _]
    (let [ref-fn (fn [el]
                   (swap! state assoc :leaflet (if el (.-leafletElement el))))]
      (fn [state _]
        [:div
         [Map
          {:center default-center
           :max-zoom 18
           :min-zoom 5
           :bounds (make-bounds default-bounds)
           :on-click #(swap! state assoc :selected nil)
           :on-move-end (fn [e] (swap! state assoc :bounds (map-bounds (.-target e))))
           :on-zoom-end (fn [e] (swap! state assoc :bounds (map-bounds (.-target e))))
           :style {:min-height "640px"}
           :ref ref-fn}

          [TileLayer
           {:url osm-url
            :attribution copy-osm}]

          (for [[id latlng] (:points @state)]
            [Marker
             {:key id
              :title (str id)
              :position latlng
              :on-click #(swap! state assoc :selected id)
              :on-mouse-over #(swap! state assoc :hover id)
              :on-mouse-out #(swap! state assoc :hover nil)}])

          (if-let [s (:selected @state)]
            [CircleMarker
             (merge select-highlight-opts
                    {:key "selected"
                     :center (get (:points @state) s)
                     :radius 25})])

          (if-let [h (:hover @state)]
            [CircleMarker
             (merge hover-highlight-opts
                    {:key "hovering"
                     :center (get (:points @state) h)
                     :radius 25})])]])))

  (r/atom {:points (into {} (map vector (range) (random-coordinates)))
           :bounds default-bounds
           :selected nil
           :hover nil
           :leaflet nil})
  {:inspect-data true})
