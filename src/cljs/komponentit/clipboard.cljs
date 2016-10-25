(ns komponentit.clipboard)

(defn copy-text [text]
  (let [el (js/document.createElement "textarea")]
    (set! (.-style el) #js {:fontSize "12pt"
                            :border 0
                            :padding 0
                            :margin 0
                            :position "absolute"
                            :left "-9999px"
                            :top "-9999px"})
    (set! (.-readOnly el) "")
    (set! (.-value el) text)
    (js/document.body.appendChild el)
    (.setSelectionRange el 0 (.. el -value -length))
    (.focus el)
    (js/document.execCommand "copy")
    (.blur el)
    ;; FIXME: restore focus?
    (.removeAllRanges (.getSelection js/window))
    (js/window.document.body.removeChild el)))
