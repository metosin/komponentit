(ns lomakkeet.autocomplete
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [om.core :as om :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]
            [cljs.core.async :refer [put!]]
            [sablono.core :refer-macros [html]]
            [lomakkeet.fields :as f]
            goog.events))

;;
;; Mixin: dropdown closes when users clicks somewhere else
;;

; FIXME: om-tools mixin?
(defn closable-will-mount [owner & [close-cb]]
  (let [click-handler (fn [e]
                        (om/set-state! owner :open? false)
                        (if close-cb (close-cb)))
        key-handler (fn [e]
                      (case (.-keyCode e)
                        27 (do ; Esc
                               (om/set-state! owner :open? false)
                               (if close-cb (close-cb)))
                        nil))]
    (om/set-state! owner :click-handler click-handler)
    (om/set-state! owner :key-handler key-handler)
    (goog.events.listen js/window goog.events.EventType.CLICK click-handler)
    (goog.events.listen js/window goog.events.EventType.KEYUP key-handler)))

(defn closable-will-unmount [owner]
  (goog.events.listen js/window goog.events.EventType.CLICK (om/get-state owner :click-handler))
  (goog.events.listen js/window goog.events.EventType.KEYUP (om/get-state owner :key-handler)))

;;
;; Utils
;;

; FIXME: Use macro to create more optimal code
(defn create-matcher [fields]
  (fn [item term]
    (some (fn [field]
            (not= (.indexOf (-> item (get field) (.toLowerCase)) term) -1))
          fields)))

(defn regex-match
  "If string contains term, returns vector of three elements.
   String before the match, the match, rest of string."
  [string term]
  (-> string
      (.match (js/RegExp. (str "^(.*)(" term ")(.*)$") "i"))
      rest))

(defn highlight-match
  "Takes and element. Top level strings inside element are matched
   against query terms and highlighted.

   E.g. [:span \"Hello World\"] -> [:span \"H\" [:span.highlight \"ello\"] \" World\"]"
  [el query]
  (if query
    (reduce
      (fn [output term]
        (reduce
          (fn [acc item]
             (if (string? item)
               (if-let [[a b c] (regex-match item term)]
                 (conj acc a [:span.highlight b] c)
                 (conj acc item))
               (conj acc item)))
          [] output))
      el query)
    el))

(defn- query-match? [term-match? v query]
  (every? (partial term-match? v) query))

(defn matches [term-match? v query]
  (let [m (group-by (partial term-match? v) query)]
    [(get m true) (get m false)]))

(defn normalize-search [search]
  (some-> search
    (.toLowerCase)
    (.split #" ")
    (->> (remove empty?))))

(defn create-list-renderer
  [{:keys [item->key item->text term-match?]
    :as opts}]
  {:pre [(ifn? item->key) (ifn? item->text)]}
  (let [query-match? (partial query-match? term-match?)]
    (fn [coll query cb]
      (for [item coll
            :when (or (not query) (query-match? item query))
            :let [text (item->text item)]]
        [:div
         {:key (item->key item)
          :on-click #(cb (item->key item))
          :data-selectable true}
         (highlight-match [:span text] query)]))))

; Uses selectize styles
(defcomponent autocomplete*
  [{:keys [value]}
   owner
   {:keys [ch ks renderer value->text loading-el load-items]
    :or {value->text identity
         loading-el [:div "Loading..."]}
    :as opts}]
  (init-state [_]
    {:open? false
     :search nil})
  (will-mount [_]
    (load-items owner)
    (closable-will-mount owner #(om/set-state! owner :search nil)))
  (will-unmount [_]
    (closable-will-unmount owner))
  (render-state [_ {:keys [open? search items]}]
    (html
      [:div.selectize-control.single
       [:input.selectize-input
        {:on-focus (fn [e]
                     (om/set-state! owner :open? true)
                     (if-not search
                       (om/set-state! owner :search "")))
         :on-click (fn [e] (.stopPropagation e))
         :on-change #(om/set-state! owner :search (.. % -target -value))
         :value (cond
                  search search
                  (seq value) (value->text value)
                  :else "")
         :class (cond-> ""
                  open? (str " input-active dropdown-active"))
         :auto-complete false
         :on-key-up (fn [e]
                         (case (.-key e)
                           ; "Enter"
                           ; "Up"
                           ; "Down"
                           nil))}]
       (when open?
         [:div.selectize-dropdown.single
          [:div.selectize-dropdown-content
           (if items
             (renderer
               items
               (normalize-search search)
               (fn [id]
                 (put! ch {:type :change
                           :ks ks
                           :value id})
                 (om/set-state! owner :open? false)))
             loading-el)]])])))
