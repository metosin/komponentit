(ns example.clipboard
  (:require [komponentit.clipboard :as clipboard]
            [reagent.core :as r]
            [devcards.core :as dc :include-macros true]
            [clojure.string :as str]
            [example.core :as e]))

(dc/defcard (str
(e/header 'clipboard "Clipboard")
(:doc (meta #'clipboard/copy-text))))

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
