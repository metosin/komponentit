(ns example.clipboard
  (:require [komponentit.clipboard :as clipboard]
            [reagent.core :as r]
            [devcards.core :as dc :include-macros true]
            [clojure.string :as str])
  (:import [goog.date DateTime Interval]))

(dc/defcard
  (str
"# Clipboard ([View source](https://github.com/metosin/komponentit/blob/master/src/cljs/komponentit/clipboard.cljs))
" (:doc (meta #'clipboard/copy-text))))

(dc/defcard-rg clipboard-example
  (fn [value _]
    [:div
     [:div
      [:input {:placeholder "paste text here for test"}]
      [:button
       {:type "button"
        :on-click #(clipboard/copy-text "foo")}
       "Copy \"foo\""]]])
  (r/atom nil))
