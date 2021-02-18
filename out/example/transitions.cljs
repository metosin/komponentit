(ns example.transitions
  (:require [reagent.core :as r]
            [devcards.core :as dc :include-macros true]
            ["react-dom/server" :as react-dom-server]
            ["react-transition-group/TransitionGroup" :as TransitionGroup]
            ["react-transition-group/Transition" :as Transition]
            ["react-transition-group/CSSTransition" :as CSSTransition]
            ["react-transition-group/SwitchTransition" :as SwitchTransition]
            ; or [react-transition-group :as transition-group]
            ))

(dc/defcard
  (str
"# React-transition-group example ([View source](https://github.com/metosin/komponentit/blob/master/example-src/cljs/example/transitions.cljs))

Just example, no wrapper code is provided to work with React-transition-group."))

(dc/defcard-rg transition-group-example
  "Look for lifecycle messages in console."
  (fn [state _]
    [:div
     [:button
      {:on-click (fn [_]
                   (swap! state (fn [s]
                                  (-> s
                                      (update :i inc)
                                      (update :elements conj (inc (:i s)))))))}
      "Append element"]
     [:button
      {:on-click (fn [_]
                   (swap! state (fn [s]
                                  (-> s
                                      (update :elements #(vec (drop-last %)))))))}
      "Remove element"]
     [:> TransitionGroup
      {:component "ul"}
      (for [e (:elements @state)]
        ;; Looks like :key from props doesn't work with native components
        ^{:key e}
        ;; Can't move this to separate function, or reagent will add component in between and transitions break
        [:> CSSTransition
         {:classNames "fade"
          :timeout 500
          :on-enter #(js/console.log "enter" e)
          :on-entering #(js/console.log "entering" e)
          :on-entered #(js/console.log "entered" e)
          :on-exit #(js/console.log "enter" e)
          :on-exiting #(js/console.log "exiting" e)
          :on-exited #(js/console.log "exited" e)}
         [:li "item " e]])] ])

  (r/atom {:i 1
           :elements [0]}))

(dc/defcard-rg css-transition-example
  (fn [state _]
    [:div
     [:button
      {:on-click (fn [_] (swap! state not))}
      "Toggle"]
     [:> CSSTransition
      {:classNames "fade"
       :timeout 500
       :in @state
       :on-enter #(js/console.log "enter")
       :on-entering #(js/console.log "entering")
       :on-entered #(js/console.log "entered")
       :on-exit #(js/console.log "enter")
       :on-exiting #(js/console.log "exiting")
       :on-exited #(js/console.log "exited")}
      [:div {:class (if-not @state "hide")} "foobar"]]])
  (r/atom true))

(dc/defcard-rg switch-transition-example
  (fn [state _]
    [:div
     [:> SwitchTransition
      [:> CSSTransition
       {:key (if @state "active" "disabled")
        ; :in @state
        :classNames "fade"
        :timeout 500}
       [:button
        {:on-click (fn [_] (swap! state not))}
        (if @state "Active" "Disabled")]]]])
  (r/atom true))
