(ns example.codemirror
  (:require [reagent.core :as r]
            [devcards.core :as dc :include-macros true]
            [clojure.string :as str]
            [komponentit.codemirror :as cm]
            ;; Require additional addons and modes in application
            cljsjs.codemirror.addon.edit.matchbrackets
            cljsjs.codemirror.mode.javascript
            cljsjs.codemirror.mode.clojure
            ;; Parinfer example
            [parinfer-codemirror :as parinfer-codemirror]
            ;; Hint example
            cljsjs.codemirror
            cljsjs.codemirror.addon.hint.show-hint))

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


(def word-re #"[\w$]+")

(defn simple-completions [editor opts]
  (let [cur (.getCursor editor)
        cur-line (.getLine editor (.-line cur))
        end (.-ch cur)
        ;; find the start of the word
        start (loop [start end]
                (if (.test word-re (.charAt cur-line (dec start)))
                  (recur (dec start))
                  start))
        cur-word (if (not= start end)
                   (.slice cur-line start end))]
    #js {:list (apply array (cond->> ["foo"
                                     "foobar"
                                     "bar"
                                     "hello"
                                     (str cur-word "foo")]
                              cur-word (filter #(str/starts-with? % cur-word))))
         :from (js/CodeMirror.Pos (.-line cur) start)
         :to (js/CodeMirror.Pos (.-line cur) end)}))

(defn trigger-autocomplete [cm]
  (let [cur (.getCursor cm)]
    (js/setTimeout
      (fn []
        (when-not (.. cm -state -completionActive)
          (.showHint cm #js {:completeSingle false})))
      100)
    js/CodeMirror.Pass))

(dc/defcard-rg codemirror-hint
  "Example of using hint functionality. Triggerd by Ctrl-space or `(` `[` `{`."
  (fn [state _]
    [:div
     [cm/codemirror
      {:value (:code @state)
       :on-change (fn [cm change] (swap! state assoc :code (.getValue cm)))
       :codemirror-opts {:mode "clojure"
                         :matchBrackets true
                         :extraKeys {"Ctrl-Space" "autocomplete"
                                     "'('" trigger-autocomplete
                                     "'{'" trigger-autocomplete
                                     "'['" trigger-autocomplete}
                         :hintOptions {:hint simple-completions}}}]])

  (r/atom {:code ""})
  {:inspect-data true})
