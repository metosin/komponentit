(ns example.input
  (:require [komponentit.input :as input]
            [komponentit.autosize :as autosize]
            [reagent.core :as r]
            [cljs.test :refer-macros [is]]
            [devcards.core :as dc :include-macros true]
            [example.options :as options]
            [example.core :as e]))

(dc/defcard (str
(e/header 'input "Inputs")
"Collection of input elements which only call `on-change` after small timeout, on
`on-blur` event or when Enter is pressed. This allows good performance where
`on-change` might trigger many re-renders."))

(dc/defcard-rg text-input
  (fn [value _]
    [:div
     [input/text
      {:value @value
       :on-change (fn [v]
                    (js/console.log "on-change" v)
                    (reset! value v))}]])
  (r/atom "Hello World")
  {:inspect-data true})

(dc/defcard-rg autosize-input
  "The input element is configurable with `:el` option so any element behaving like a
  input is supported, like for example [autosize](#!/example.autosize) components"
  (fn [value _]
    [:div
     [input/input
      {:el autosize/input
       :value @value
       :on-change #(reset! value %)}]])
  (r/atom "Hello")
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

(dc/defcard-rg select-boolean
  (fn [value _]
    [:div
     [input/select
      {:value @value
       :on-change (fn [x] (reset! value x))
       :options [{:value true  :text "Option true"}
                 {:value false :text "Option false"}]
       :value-fn {"true" true "false" false}}]])
  (r/atom true)
  {:inspect-data true})

(dc/defcard-rg checkbox
  (fn [value _]
    [:div
     [input/checkbox
      {:value @value
       :on-change (fn [x] (reset! value x))}]])
  (r/atom true)
  {:inspect-data true})


(dc/deftest str->number-test
  (is (= 1.1  (input/str->number "1,1")))
  (is (= 1.1  (input/str->number "1,10")))
  (is (= 1.11 (input/str->number "1,11")))
  (is (= 0.11 (input/str->number ",11")))
  (is (= 10.0012 (input/str->number "10,0012")))

  (let [opts {:multiplier 100}]
  (is (= 1000 (input/str->number "10.0" opts)))
  (is (= 1000 (input/str->number "10,0" opts)))
  (is (= 1050 (input/str->number "10.50" opts)))
  (is (= 1000 (long (input/str->number "10.0012" opts))))
  (is (= 1050 (input/str->number " 	10.50" opts)))
  (is (= 1050 (input/str->number "10.50abc" opts)))
  (is (= 1050 (input/str->number "10,50" opts)))
  (is (= 1050.5 (input/str->number "10.505" opts)))
  (is (= 1000 (input/str->number "10" opts)))
  (is (= 1000000 (input/str->number "10 000" opts)))
  (is (= 100000000 (input/str->number "1 000 000" opts)))
  (is (= 10 (input/str->number ".10" opts)))
  (is (= 10 (input/str->number ",10" opts)))
  (is (= -1055 (input/str->number "-10,55" opts)))
  (is (= nil (input/str->number "" opts)))
  (is (= nil (input/str->number "  	" opts))))


  (is (= 15.5 (input/str->number "15.5")))
  ; (is (= 123456789 (input/number->str "123,456,789")))
  ; (is (= 123456789.012 (input/number->str "123,456,789.012")))

  (is (= 15.5 (input/str->number "15,5" {:locale "fi-FI"})))
  ;; non-breaking spaces
  ; (is (= 123456789 (input/number->str "123 456 789" {:locale "fi-FI"})))
  ; (is (= 123456789.012 (input/number->str "123 456 789,012" {:locale "fi-FI"})))

  ;; unicode "minus signs"
  (is (= -10 (input/str->number "–10")))
  (is (= -10 (input/str->number "−10")))
  )

(dc/deftest number->str-test
  (let [opts {:multiplier 100}]
    (is (= "10" (input/number->str 1000 opts)))
    (is (= "10" (input/number->str 1000 opts)))
    (is (= "-10" (input/number->str -1000 opts)))
    (is (= "-10.45" (input/number->str -1045 opts)))
    (is (= "1" (input/number->str 100 opts)))
    (is (= "" (input/number->str nil opts))))

  (is (= "10.5" (input/number->str 105 {:multiplier 10})))

  (is (= "10.00" (input/number->str 10 {:precision 2 :min-precision 2})))
  (is (= "10" (input/number->str 10 {:precision 2})))
  (is (= "10.5" (input/number->str 10.5 {:precision 2})))
  (is (= "10.50" (input/number->str 10.5 {:precision 2 :min-precision 2})))
  (is (= "10.55" (input/number->str 10.55 {:precision 2})))
  (is (= "10.55" (input/number->str 10.554 {:precision 2})))
  (is (= "10.00" (input/number->str 10.0012 {:precision 2})))

  (is (= "15.5" (input/number->str 15.5)))
  ; (is (= "123,456,789" (input/number->str 123456789)))
  ; (is (= "123,456,789.012" (input/number->str 123456789.012)))

  (is (= "15,5" (input/number->str 15.5 {:delimiter ","})))
  ;; non-breaking spaces
  ; (is (= "123 456 789" (input/number->str 123456789 {:locale "fi-FI"})))
  ; (is (= "123 456 789,012" (input/number->str 123456789.012 {:locale "fi-FI"})))
  )
