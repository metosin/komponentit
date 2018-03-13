(ns example.codemirror
  (:require [reagent.core :as r]
            [devcards.core :as dc :include-macros true]
            [clojure.string :as str]
            ;; This already includes cljsjs.codemirror
            [komponentit.codemirror :as cm]
            ;; Require additional addons and modes in application
            cljsjs.codemirror.addon.edit.matchbrackets
            cljsjs.codemirror.mode.javascript
            cljsjs.codemirror.mode.clojure
            [parinfer-codemirror :as parinfer-codemirror]))

(dc/defcard
  (str
"# Codemirror ([View source](https://github.com/metosin/komponentit/blob/master/src/cljs/komponentit/codemirror.cljs))

Komponentit doesn't currently provide dependency on `cljsjs/codemirror` or `metosin/codemirror-parinfer`, include
these yourself in the application if needed.

- [Examples](https://github.com/metosin/komponentit/blob/master/example-src/cljs/example/codemirror.cljs)"))

(dc/defcard-rg codemirror
  "Basic codemirror intergration with `:value` and `:on-change` properties."
  (fn [state _]
    [:div
     [cm/codemirror
      {:value (:code @state)
       :on-change (fn [cm change] (swap! state assoc :code (.getValue cm)))
       :codemirror-opts {:mode "clojure"
                         :matchBrackets true}}]])

  (r/atom {:code "(defn hello
  []
  \"world\")"})
  {:inspect-data true})

(dc/defcard-rg parinfer
  "The new [parinfer-codemirror](https://github.com/shaunlebron/parinfer-codemirror)
  only requires calling `init` function with CodeMirror instance to initialize
  parinfer mode."
  (fn [state _]
    [:div
     [cm/codemirror
      {:value (:code @state)
       :on-mount #(parinfer-codemirror/init % "smart" #js {})
       :on-change (fn [cm change]
                    (swap! state assoc :code (.getValue cm)))
       :codemirror-opts {:mode "clojure"
                         :matchBrackets true}}]])

  (r/atom {:code "(defn hello
  []
  \"world\")"})
  {:inspect-data true})
