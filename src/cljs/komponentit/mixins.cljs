(ns komponentit.mixins
  (:require [reagent.core :as r]
            [clojure.set :as set]
            [clojure.string :as string]
            [goog.events :as events]
            [goog.object :as obj]))

(defn get-event-type
  "Maps from React style event property name to Google Event enum."
  [k]
  (or (get {:on-after-print events/EventType.AFTERPRINT
            :on-animation-end events/EventType.ANIMATIONEND
            :on-animation-iteration events/EventType.ANIMATIONITERATION
            :on-animation-start events/EventType.ANIMATIONSTART
            :on-before-copy events/EventType.BEFORECOPY
            :on-before-cut events/EventType.BEFORECUT
            :on-before-paste events/EventType.BEFOREPASTE
            :on-before-print events/EventType.BEFOREPRINT
            :on-before-unload events/EventType.BEFOREUNLOAD
            :on-blur events/EventType.BLUR
            :on-can-play events/EventType.CANPLAY
            :on-can-playthrough events/EventType.CANPLAYTHROUGH
            :on-change events/EventType.CHANGE
            :on-click events/EventType.CLICK
            :on-composition-end events/EventType.COMPOSITIONEND
            :on-composition-start events/EventType.COMPOSITIONSTART
            :on-composition-update events/EventType.COMPOSITIONUPDATE
            :on-connect events/EventType.CONNECT
            :on-consolemessage events/EventType.CONSOLEMESSAGE
            :on-context-menu events/EventType.CONTEXTMENU
            :on-copy events/EventType.COPY
            :on-cut events/EventType.CUT
            :on-dbl-click events/EventType.DBLCLICK
            :on-deactivate events/EventType.DEACTIVATE
            :on-device-orientation events/EventType.DEVICEORIENTATION
            :on-dom-attr-modified events/EventType.DOMATTRMODIFIED
            :on-dom-character-data-modified events/EventType.DOMCHARACTERDATAMODIFIED
            :on-dom-content-loaded events/EventType.DOMCONTENTLOADED
            :on-dom-node-inserted events/EventType.DOMNODEINSERTED
            :on-dom-node-inserted-into-document events/EventType.DOMNODEINSERTEDINTODOCUMENT
            :on-dom-node-removed events/EventType.DOMNODEREMOVED
            :on-dom-node-removed-from-document events/EventType.DOMNODEREMOVEDFROMDOCUMENT
            :on-dom-subtree-modified events/EventType.DOMSUBTREEMODIFIED
            :on-drag events/EventType.DRAG
            :on-dragend events/EventType.DRAGEND
            :on-dragenter events/EventType.DRAGENTER
            :on-dragleave events/EventType.DRAGLEAVE
            :on-dragover events/EventType.DRAGOVER
            :on-dragstart events/EventType.DRAGSTART
            :on-drop events/EventType.DROP
            :on-durationchange events/EventType.DURATIONCHANGE
            :on-emptied events/EventType.EMPTIED
            :on-ended events/EventType.ENDED
            :on-error events/EventType.ERROR
            :on-exit events/EventType.EXIT
            :on-focus events/EventType.FOCUS
            :on-focusin events/EventType.FOCUSIN
            :on-focusout events/EventType.FOCUSOUT
            :on-got-pointer-capture events/EventType.GOTPOINTERCAPTURE
            :on-hash-change events/EventType.HASHCHANGE
            :on-help events/EventType.HELP
            :on-input events/EventType.INPUT
            :on-key-down events/EventType.KEYDOWN
            :on-key-press events/EventType.KEYPRESS
            :on-key-up events/EventType.KEYUP
            :on-load events/EventType.LOAD
            :on-load-abort events/EventType.LOADABORT
            :on-load-commit events/EventType.LOADCOMMIT
            :on-loaded-data events/EventType.LOADEDDATA
            :on-loaded-metadata events/EventType.LOADEDMETADATA
            :on-load-redirect events/EventType.LOADREDIRECT
            :on-load-start events/EventType.LOADSTART
            :on-load-stop events/EventType.LOADSTOP
            :on-lose-capture events/EventType.LOSECAPTURE
            :on-lost-pointer-capture events/EventType.LOSTPOINTERCAPTURE
            :on-message events/EventType.MESSAGE
            :on-mouse-down events/EventType.MOUSEDOWN
            :on-mouse-enter events/EventType.MOUSEENTER
            :on-mouse-leave events/EventType.MOUSELEAVE
            :on-mouse-move events/EventType.MOUSEMOVE
            :on-mouse-out events/EventType.MOUSEOUT
            :on-mouse-over events/EventType.MOUSEOVER
            :on-mouse-up events/EventType.MOUSEUP
            ;; ms-gesture events skipped
            :on-offline events/EventType.OFFLINE
            :on-online events/EventType.ONLINE
            :on-orientation-change events/EventType.ORIENTATIONCHANGE
            :on-page-hide events/EventType.PAGEHIDE
            :on-page-show events/EventType.PAGESHOW
            :on-paste events/EventType.PASTE
            :on-pause events/EventType.PAUSE
            :on-play events/EventType.PLAY
            :on-playing events/EventType.PLAYING
            :on-pointer-cancel events/EventType.POINTERCANCEL
            :on-pointer-down events/EventType.POINTERDOWN
            :on-pointer-enter events/EventType.POINTERENTER
            :on-pointer-leave events/EventType.POINTERLEAVE
            :on-pointer-move events/EventType.POINTERMOVE
            :on-pointer-out events/EventType.POINTEROUT
            :on-pointer-over events/EventType.POINTEROVER
            :on-pointer-up events/EventType.POINTERUP
            :on-pop-state events/EventType.POPSTATE
            :on-property-change events/EventType.PROPERTYCHANGE
            :on-rate-change events/EventType.RATECHANGE
            :on-ready-state-change events/EventType.READYSTATECHANGE
            :on-reset events/EventType.RESET
            :on-resize events/EventType.RESIZE
            :on-responsive events/EventType.RESPONSIVE
            :on-right-click events/EventType.RIGHTCLICK
            :on-scroll events/EventType.SCROLL
            :on-seeked events/EventType.SEEKED
            :on-seeking events/EventType.SEEKING
            :on-select events/EventType.SELECT
            :on-selection-change events/EventType.SELECTIONCHANGE
            :on-select-start events/EventType.SELECTSTART
            :on-size-changed events/EventType.SIZECHANGED
            :on-stalled events/EventType.STALLED
            :on-storage events/EventType.STORAGE
            :on-submit events/EventType.SUBMIT
            :on-suspend events/EventType.SUSPEND
            :on-text events/EventType.TEXT
            :on-text-input events/EventType.TEXTINPUT
            :on-time-update events/EventType.TIMEUPDATE
            :on-touch-cancel events/EventType.TOUCHCANCEL
            :on-touch-end events/EventType.TOUCHEND
            :on-touch-move events/EventType.TOUCHMOVE
            :on-touch-start events/EventType.TOUCHSTART
            :on-transition-end events/EventType.TRANSITIONEND
            :on-unload events/EventType.UNLOAD
            :on-unresponsive events/EventType.UNRESPONSIVE
            :on-visibility-change events/EventType.VISIBILITYCHANGE
            :on-volume-change events/EventType.VOLUMECHANGE
            :on-waiting events/EventType.WAITING
            :on-wheel events/EventType.WHEEL} k)
      (throw (str "Missing event-type: " k))) )

(defn- update-listeners [el listeners props this]
  (swap! listeners
         (fn [listeners]
           (let [current-event-types (set (keys listeners))
                 new-event-types (set (keys props))]
             (as-> listeners $
               (reduce (fn [listeners event-type]
                         (assoc listeners event-type
                                (events/listen el (get-event-type event-type)
                                               ;; Need to retrieve latest props incase the function as been updated
                                               (fn [e]
                                                 (let [f (get (r/props this) event-type)]
                                                   (f e))))))
                       $ (set/difference new-event-types current-event-types))
               (reduce (fn [listeners event-type]
                         (events/unlistenByKey (get listeners event-type))
                         (dissoc listeners event-type))
                       $ (set/difference current-event-types new-event-types)))))))

(defn window-event-listener
  [_]
  (let [listeners (atom nil)]
    (r/create-class
      {:display-name "komponentit.mixins.window_event_listener_class"
       :component-did-mount (fn [this] (update-listeners js/window listeners (r/props this) this))
       :component-did-update (fn [this] (update-listeners js/window listeners (r/props this) this))
       :component-will-unmount (fn [this] (update-listeners js/window listeners {} this))
       :reagent-render
       (fn [props child]
         child)})))
