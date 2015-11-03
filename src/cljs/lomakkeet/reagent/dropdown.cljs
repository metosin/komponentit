(ns lomakkeet.reagent.dropdown
  (:require [goog.dom :as dom]
            [goog.events :as events]
            [reagent.core :as r]))

(enable-console-print!)

;; For inspiration:
;; https://github.com/twbs/bootstrap/blob/master/js/dropdown.js

;; TODO: Key handlers, Up/down, enter, esc

(defn ->menu-item [open?
                   {:keys [on-change close-on-click?] :as dropdown-opts}
                   {:keys [separator key text value href] :as item-opts}]
  (cond
    separator [:li.divider]
    :else
    [:li {:key key
          :class (str (if (and value (= (:value dropdown-opts) value)) "active "))}
     [:a {:href (or href "#")
          :on-click (fn [e]
                      (if-not href (.preventDefault e))
                      (if-not (false? close-on-click?) (reset! open? false))
                      (if on-change (on-change item-opts))
                      nil)}
      text]]))

(defn dropdown
  "- :el          Component used to render dropdown container
   - :children    Used to pass in dropdown elements
   - :content     Used to pass in dropdown contents as collection of item-maps, will be rendered using ->menu-item.
   - :on-change   (Supported by :content) Called with item-map when dropdown item is selected.
   - :value       (Supported by :content) Current :value, sets list item as active.
   - :caret?      Whether to automatically append caret to text."
  [{:keys [el content children]}]
  (let [open?  (r/atom false)
        listener (atom nil)]
    (r/create-class
      {:component-did-mount
       (fn [this]
         (reset! listener (events/listen js/window events/EventType.CLICK
                                         (fn [e]
                                           ; If the click target is outside of navbar
                                           (if-not (dom/contains (r/dom-node this) (.. e -target))
                                             (reset! open? false))))))
       :component-will-unmount
       (fn [_]
         (events/unlistenByKey @listener))
       :reagent-render
       (fn [{:keys [el content children] :as opts}]
         [el
          open?
          (if open?
            (into [:ul.dropdown-menu] (if children
                                        children
                                        (map (partial ->menu-item open? opts) content))))
          opts])})))

(defn toggle [open? e]
  (.preventDefault e)
  (swap! open? not)
  nil)

(defn dropdown-li' [open? dropdown {:keys [text caret?]}]
  [:li {:class (str "dropdown " (if @open? "open "))}
   [:a.dropdown-toggle
    {:href "#"
     :on-click (partial toggle open?)
     :aria-haspopup true
     :aria-expanded @open?}
    text
    (if-not (false? caret?)
      [:span " "
       [:span.caret]])]
   dropdown])

(defn dropdown-li [opts]
  [dropdown (assoc opts :el dropdown-li')])

(defn dropdown-button' [open? dropdown {:keys [text caret?]}]
  [:div
   {:class (str "btn-group " (if @open? "open "))}
   [:button.btn.btn-default.dropdown-toggle
    {:type "button"
     :on-click (partial toggle open?)
     :aria-haspopup true
     :aria-expanded @open?}
    text
    (if-not (false? caret?)
      [:span " "
       [:span.caret]])]
   dropdown])

(defn dropdown-button [opts]
  [dropdown (assoc opts :el dropdown-button')])
