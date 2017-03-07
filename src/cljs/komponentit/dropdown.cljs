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
- `:text` Text"
  [open?
   {:keys [on-change close-on-click? active-item-class disabled
           separator-class menu-item-class menu-item-a-class]
    :or {active-item-class "dropdown-menu__item--active"
         ;; FIXME:
         separator-class "divider"}
    :as dropdown-opts}
   {:keys [separator key text value href on-click]
    :as item-opts}]
  (let [menu-item-class (or (:menu-item-class item-opts)
                            (:menu-item-class dropdown-opts)
                            "dropdown-menu__item")
        menu-item-a-class (or (:menu-item-a-class item-opts)
                              (:menu-item-a-class dropdown-opts)
                              "dropdown-menu__link")]
    (cond
      separator [:li
                 {:class separator-class
                  :key key}]
      :else
      [:li {:key key
            :class (str menu-item-class " " (if (and value (= (:value dropdown-opts) value)) active-item-class))}
       [:a {:href (or href "#")
            :class menu-item-a-class
            :on-click (fn [e]
                        (if-not href (.preventDefault e))
                        (if-not (false? close-on-click?) (reset! open? false))
                        (if on-click (on-click e))
                        (if on-change (on-change item-opts))
                        nil)
            :disabled disabled}
        text]])))

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
  (let [open? (r/atom false)
        dropdown-el (atom nil)
        dropdown-el-ref #(reset! dropdown-el %)]
    (fn [{:keys [el content children dropdown-class]
          :or {dropdown-class "dropdown-menu"}
          :as opts}]
      [el
       open?
       dropdown-el-ref
       (if @open?
         [mixins/window-event-listener
          {:on-click (fn [e]
                       ; If the click target is outside of navbar
                       (if (and @dropdown-el (not (dom/contains @dropdown-el (.. e -target))))
                         (reset! open? false)))
           :on-key-down (fn [e]
                          (case (.-keyCode e)
                            ;; Esc
                            27 (reset! open? false)
                            nil))}
          (into [:ul {:class dropdown-class}]
                (if children
                  children
                  (map (partial ->menu-item open? opts) content)))])
       opts])))

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

(defn dropdown-li'
  [open? ref dropdown
   {:keys [text li-class open-class a-class]
    :or {a-class "dropdown-toggle"
         open-class "open"
         li-class "dropdown-container"}
    :as opts}]
  [:li
   {:class (str li-class " " (if @open? open-class))
    :ref ref}
   [:a
    {:class a-class
     :href "#"
     :on-click (partial toggle open?)
     :aria-haspopup true
     :aria-expanded @open?}
    text
    [caret' open? opts]]
   dropdown])

(defn dropdown-li [opts]
  [dropdown (assoc opts :el dropdown-li')])

(defn dropdown-button'
  [open? ref dropdown
   {:keys [text container-class open-class button-class disabled]
    :or {container-class "btn-group dropdown-container"
         open-class "open"
         button-class "btn btn-default dropdown-toggle"}
    :as opts}]
  [:div
   {:class (str container-class " " (if @open? open-class))
    :ref ref}
   [:button
    {:class button-class
     :type "button"
     :on-click (partial toggle open?)
     :aria-haspopup true
     :aria-expanded @open?
     :disabled disabled}
    text
    [caret' open? opts]]
   dropdown])

(defn dropdown-button [opts]
  [dropdown (assoc opts :el dropdown-button')])

(defn dropdown-a'
  [open? dropdown {:keys [text container-class open-class a-class disabled]
                   :or {container-class ""
                        open-class "open"
                        a-class "dropdown-toggle"}
                   :as opts}]
  [:div
   {:class (str container-class " " (if @open? open-class))}
   [:a
    {:href "#"
     :class a-class
     :on-click (fn [e]
                 (.preventDefault e)
                 (toggle open? e))
     :aria-haspopup true
     :aria-expanded @open?
     :disabled disabled}
    text
    [caret' open? opts]]
   dropdown])

(defn dropdown-a [opts]
  [dropdown (assoc opts :el dropdown-a')])
