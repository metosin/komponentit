(ns komponentit.dropdown
  (:require [goog.dom :as dom]
            [komponentit.mixins :as mixins]
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
- `:el` (Default: `:li`)
- `:link-el` (Default: `:a`)
- `:props` (Optional) React props to dropdown list item element
- `:link-props` (Optional) React props to dropdown item element
- `:text` Text"
  [open?
   {:keys [on-change close-on-click?  disabled
           active-item-class separator-class menu-item-class menu-item-a-class]
    :or {active-item-class "dropdown-menu__item--active"
         separator-class "divider"}
    :as dropdown-opts}
   {:keys [el link-el
           props link-props
           separator key text value href on-click]
    :or {el :li
         link-el :a}
    :as item-opts}]
  (let [menu-item-class (or (:menu-item-class item-opts)
                            (:menu-item-class dropdown-opts)
                            "dropdown-menu__item")
        menu-item-a-class (or (:menu-item-a-class item-opts)
                              (:menu-item-a-class dropdown-opts)
                              "dropdown-menu__link")]
    (cond
      separator [el
                 (merge props {:class separator-class
                               :key key})]
      :else
      [el (merge props
                  {:key key
                   :class (str (:class props) " "
                               menu-item-class " "
                               (if (and value (= (:value dropdown-opts) value))
                                 active-item-class))})
       [link-el (merge link-props
                  {:href (or href "#")
                   :class (str (:class link-props) " " menu-item-a-class)
                   :on-click (fn [e]
                               (if-not href (.preventDefault e))
                               (if-not (false? close-on-click?) (reset! open? false))
                               (if on-click (on-click e))
                               (if on-change (on-change item-opts))
                               nil)
                   :disabled disabled})
        text]])))

(defn toggle [open? e]
  (.preventDefault e)
  (swap! open? not)
  nil)

(defn caret'
  [open? {:keys [caret? caret-class caret-up-class]
          :or {caret-class "caret"
               caret-up-class "caret"}}]
  (if-not (false? caret?)
    [:span " "
     [:span {:class (if @open? caret-up-class caret-class)}]]))

(defn dropdown'
  [open? ref dropdown
   {:keys [el container-el
           text open-class toggle-class class
           toggle-props
           ;; deprecated
           container-class button-class li-class a-class]
    :or {el :a
         container-el :div
         toggle-class "dropdown-toggle"
         open-class "open"
         container-class "dropdown-container"}
    :as props}]
  )

(defn dropdown
"- `:text` Text for dropdown toggle element.
- `:content` Used to pass in dropdown elements as collection of item-maps.
- `:children` (replaces `:content`) Used to pass in dropdown elements as Reagent hiccup form. Most of other options
do not work with this option.
- `:on-change` (Optional, supported by content) Called with item-map when dropdown item is selected.
- `:value` (Optional, supported by content) Current value, marks list item with equivalent value as active.
- `:close-on-click?` (Default `true`) Close dropdown when any item is selected.
- `:caret?` (Default `true`) Whether to automatically append caret to text.

HTML elements:

- `:container-el` (Default `:div`) The element used to contain toggle element and dropdown list.
- `:el` (Default `:a`) The toggle element type.

CSS classes:

- `:container-class` (Default `\"dropdown-container\"`)
- `:open-class` (Default `\"open\"`)
- `:dropdown-class` (Default `\"dropdown-menu\"`)
- `:caret-class` (Default `\"caret\"`)
- `:caret-up-class` (Default `\"caret\"`)
- `:separator-class` (Default `\"divider\"`)
- `:menu-item-class` (Default `\"dropdown-menu__item\"`)
- `:menu-item-a-class` (Default `\"dropdown-menu__link\")
- `:active-item-class` (Default `\"dropdown-menu__item--active\"`)

Props:

Any other React props can be passed to the created elements:

- `:toggle-props`
- `:container-props`
- (Item option) `:props`
- (Item option) `:link-props`"
  [_]
  (let [open? (r/atom false)]
    (fn [{:keys [content children
                 el container-el
                 text open-class toggle-class class dropdown-class
                 toggle-props container-props
                 ;; deprecated
                 container-class button-class li-class a-class]
          :or {el :a
               container-el :div
               toggle-class "dropdown-toggle"
               open-class "open"
               dropdown-class "dropdown-menu"
               container-class "dropdown-container"}
          :as props}]
      (when goog/DEBUG
        (when container-class ":container-class option is deprecated, use :class instead")
        (when li-class ":li-class option is deprecated, use :toggle-class or [:toggle-props :class] instead")
        (when a-class ":a-class option is deprecated, use :toggle-class or [:toggle-props :class] instead")
        (when button-class ":button-class option is deprecated, use :toggle-class or [:toggle-props :class] instead"))

      [container-el
       (merge container-props
              {:class (str class " " container-class " " (if @open? open-class))})
       [el
        (merge toggle-props
               {:class (str (:class toggle-props) " " toggle-class)
                :href "#"
                :on-click (partial toggle open?)
                :aria-haspopup true
                :aria-expanded @open?})
        text
        [caret' open? props]]
       (if @open?
         [mixins/window-event-listener
          {:on-click (fn [e]
                       ; If the click target is outside of navbar
                       (if (not (dom/contains (r/dom-node (r/current-component)) (.. e -target)))
                         (reset! open? false)))
           :on-key-down (fn [e]
                          (case (.-keyCode e)
                            ;; Esc
                            27 (reset! open? false)
                            nil))}
          (into [:ul {:class dropdown-class}]
                (if children
                  children
                  (map (partial ->menu-item open? props) content)))])])))

(defn dropdown-li [opts]
  [dropdown (assoc opts :container-el :li :el :a)])

(defn dropdown-button [opts]
  [dropdown (assoc opts :el :button)])

(defn dropdown-a [opts]
  [dropdown (assoc opts :el :a)])
