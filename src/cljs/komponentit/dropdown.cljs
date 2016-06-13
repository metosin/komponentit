(ns komponentit.dropdown
  (:require [goog.dom :as dom]
            [goog.events :as events]
            [reagent.core :as r]))

(enable-console-print!)

;; For inspiration:
;; https://github.com/twbs/bootstrap/blob/master/js/dropdown.js

;; TODO: Key handlers, Up/down, enter, esc

(defn ->menu-item
  "- `:key` React key
  - `:value` (Optional) Current value
  - `:href` (Optional) A href
  - `:on-click` (Optional) callback
  - `:text` Text
  "
  [open?
   {:keys [on-change close-on-click? active-item-class]
    :or {active-item-class "active"}
    :as dropdown-opts}
   {:keys [separator key text value href on-click] :as item-opts}]
  (cond
    separator [:li.divider]
    :else
    [:li {:key key
          :class (str (if (and value (= (:value dropdown-opts) value)) active-item-class))}
     [:a {:href (or href "#")
          :on-click (fn [e]
                      (if-not href (.preventDefault e))
                      (if-not (false? close-on-click?) (reset! open? false))
                      (if on-click (on-click e))
                      (if on-change (on-change item-opts))
                      nil)}
      text]]))

(defn dropdown
  "- `:text` Text for dropdown toggle element.
  - `:content` Used to pass in dropdown elements as collection of item-maps.
  - `:children` (replaces `:content`) Used to pass in dropdown elements as Reagent hiccup form. Most of other options
  do not work with this option.
  - `:on-change` (Optional, supported by content) Called with item-map when dropdown item is selected.
  - `:value` (Optional, supported by content) Current value, marks list item with equivalent value as active.
  - `:close-on-click?` (Default `true`) Close dropdown when any item is selected.
  - `:caret?` (Default `true`) Whether to automatically append caret to text."
  [_]
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
       (fn [{:keys [el content children dropdown-class]
             :or {dropdown-class "dropdown-menu"}
             :as opts}]
         [el
          open?
          (if open?
            (into [:ul {:class dropdown-class}]
                  (if children
                    children
                    (map (partial ->menu-item open? opts) content))))
          opts])})))

(defn toggle [open? e]
  (.preventDefault e)
  (swap! open? not)
  nil)

(defn dropdown-li' [open? dropdown {:keys [text caret? li-class open-class a-class]
                                    :or {a-class "dropdown-toggle"
                                         open-class "open"
                                         li-class "dropdown"}}]
  [:li {:class (str li-class " " (if @open? open-class))}
   [:a
    {:class a-class
     :href "#"
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

(defn dropdown-button' [open? dropdown {:keys [text caret? button-container-class open-class button-class]
                                        :or {button-container-class "btn-group"
                                             open-class "open"
                                             button-class "btn btn-default dropdown-toggle"}}]
  [:div
   {:class (str button-container-class " " (if @open? open-class))}
   [:button
    {:class button-class
     :type "button"
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
