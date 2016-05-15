(ns example.input
  (:require [komponentit.input :as input]
            [reagent.core :as r]
            [devcards.core :as dc :include-macros true]
            [example.options :as options]))

(dc/defcard-rg text-input
  "The state is updated when user presses Enter or leaves the input (on-blur event, tab, clicks elsewhere etc.)"
  (fn [value _]
    [:div
     [input/text
      {:value @value
       :on-change (fn [x] (reset! value x))}]])
  (r/atom "Hello World")
  {:inspect-data true})

(dc/defcard-rg number-input
  (fn [value _]
    [:div
     [:div.form-group
      [:label "Normal"]
      [input/number
       {:value @value
        :on-change (fn [x] (reset! value x))}]]
     [:div.form-group
      [:label "Multiplier 100"]
      [input/number
       {:value @value
        :on-change (fn [x] (reset! value x))
        :multiplier 100}]] ])
  (r/atom 100)
  {:inspect-data true})

(dc/defcard-rg password-input
  (fn [value _]
    [:div
     [input/password
      {:value @value
       :on-change (fn [x] (reset! value x))}]])
  (r/atom "Hello World")
  {:inspect-data true})

(def lorem
"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar vitae ex non tincidunt. Vivamus rutrum enim eget elit congue pulvinar. Ut eu sodales odio, sit amet pellentesque libero. Curabitur suscipit non urna non convallis. Nulla bibendum massa nec nunc feugiat mattis. Duis velit felis, mattis nec aliquam et, dictum ac ipsum. Praesent condimentum aliquam magna, vel molestie erat vulputate vel. Quisque nec imperdiet magna, nec ultricies nisl. Phasellus ac dui ante. Donec egestas, felis eu tincidunt feugiat, lacus est lacinia enim, quis egestas arcu velit et velit. Aenean nec felis vel quam tincidunt egestas sed a felis. Sed nibh tortor, ultricies vitae bibendum sit amet, dictum vel lorem. Duis venenatis orci euismod tempus iaculis. Quisque venenatis eget leo vel laoreet.

Suspendisse id bibendum velit. Phasellus cursus mauris finibus diam tempor, a feugiat neque maximus. Pellentesque ultricies tellus et ex consectetur, a eleifend magna aliquam. In hac habitasse platea dictumst. Aliquam nibh nibh, malesuada eget augue et, varius eleifend erat. Aenean vel lectus ut tortor iaculis cursus id eget diam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.")

(dc/defcard-rg textarea
  (fn [value _]
    [:div
     [input/textarea
      {:value @value
       :on-change (fn [x] (reset! value x))
       :style {:height "200px"}}]])
  (r/atom lorem)
  {:inspect-data true})

(defn safe-long [s]
  (let [i (long s)]
    (if (js/isNaN i) s i)))

(dc/defcard-rg select
  (fn [value _]
    [:div
     [input/select
      {:value @value
       :on-change (fn [x] (reset! value x))
       :options [{:value 1 :text "Option 1"}
                 {:value 2 :text "Option 2"}
                 {:value 3 :text "Option 3"}
                 {:value "foo" :text "Option foo"}]
       :empty-option? true
       :value-fn safe-long}]])
  (r/atom 1)
  {:inspect-data true})

(dc/defcard-rg checkbox
  (fn [value _]
    [:div
     [input/checkbox
      {:value @value
       :on-change (fn [x] (reset! value x))}]])
  (r/atom true)
  {:inspect-data true})
