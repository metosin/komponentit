(ns lomakkeet.reagent.calendar
  (:require [reagent.core :as r]
            [clojure.string :as string]
            [lomakkeet.date :as date]
            [cljs-time.core :as t]))

(def default-i18n
  {:quicklist "Quicklist"
   :today "Today"
   :this-week "This week"
   :this-month "This month"
   :week-short "W"
   :start "Start"
   :end "End"
   :date-format "d.M.yyyy"
   :month-format "LLLL yyyy"
   :date-placeholder "dd.mm.yyyy"})

(def default-icons
  {:previous "<"
   :next ">"
   :warning "!"
   :submit ">"})

(defn loc [i18n k]
  (or (get i18n k)
      (get default-i18n k)))

(defn icon [icons k]
  (or (get icons k)
      (get default-icons k)))

(defn first-day-of-the-week [day]
  (t/minus day (t/days (dec (t/day-of-week day)))))

(defn last-day-of-the-week [day]
  (t/plus day (t/days (- 7 (t/day-of-week day)))))

(defn date-input [value type on-change {:keys [icons i18n]}]
  (let [input-value (r/atom nil)]
    (fn [value type on-change]
      [:form
       {:on-submit (fn [e]
                     (.preventDefault e)
                     (.stopPropagation e)
                     (on-change (date/date-read @input-value (loc i18n :date-format)))
                     (reset! input-value nil)
                     nil)}
       [:div.input-group.input-group-sm
        [:span.input-group-addon type]
        [:input.form-control
         {:type "text"
          :on-change (fn [e]
                       (let [x (string/trim (.. e -target -value))]
                         (reset! input-value x)))
          :on-blur (fn [e]
                     (if (seq @input-value)
                       (on-change (date/date-read @input-value (loc i18n :date-format))))
                     (reset! input-value nil)
                     nil)
          :placeholder (loc i18n :date-placeholder)
          :value (str (or @input-value
                          (date/date-format value (loc i18n :date-format))))}]
        (if (and @input-value (not (date/date-read @input-value (loc i18n :date-format))))
          [:span.input-group-btn [:span.btn.btn-danger (icon icons :warning) #_[:i.fa.fa-warning]]])
        (if (and @input-value (date/date-read @input-value (loc i18n :date-format)))
          [:span.input-group-btn [:button.btn.btn-success {:type "submit"} (icon icons :submit) #_ [:i.fa.fa-check]]])
        ]])))

(defn- build-month [day]
  (let [start (t/first-day-of-the-month day)
        end   (t/last-day-of-the-month day)]
    (vec
      (for [wom (range 6)]
        (vec
          (for [dow (range 7)
                :let [date (-> start first-day-of-the-week (t/plus (t/weeks wom)) (t/plus (t/days dow)))]]
            {:date date
             :out (not (= (t/month day) (t/month date)))}))))))

(defn month-calendar [_]
  (let [month-x (r/atom nil)
        prev-val (atom nil)]
    (fn [{:keys [value start end text value on-change icons week-numbers? date-input? i18n] :as opts}]
      ; HACK: Is there any better way to reset month to default when value changes?
      (if (not= value @prev-val)
        (reset! month-x nil))
      (reset! prev-val value)

      (let [value' (or value (t/today))
            date  (if @month-x
                    (t/plus value' (t/months @month-x))
                    value')
            on-change (fn [x]
                        (reset! month-x nil)
                        (on-change x))
            month (build-month date)]
        [:div.month-calendar
         [:table
          {:class (str "table " (if week-numbers? "with-week-numbers "))}
          [:thead
           (if (or (true? date-input?) (nil? date-input?))
             [:tr.head1
              [:th.prev
               [:button.btn.btn-date.prev
                {:type "button"
                 :on-click (fn [_] (swap! month-x (fnil dec 0)) nil)}
                (icon icons :previous)
                #_[:i.fa.fa-caret-left]]]
              [:th {:col-span (if week-numbers? 6 5)}
               [date-input value text on-change opts]]
              [:th.next
               [:button.btn.btn-date.next
                {:type "button"
                 :on-click (fn [_] (swap! month-x (fnil inc 0)) nil)}
                (icon icons :next)
                #_[:i.fa.fa-caret-right]]]])
           (if (or (true? date-input?) (nil? date-input?))
             [:tr
              [:th.text-center {:col-span (if week-numbers? 8 7)}
               (string/capitalize (date/date-format date (loc i18n :month-format)))]]
             [:tr
              [:th.prev
               [:button.btn.btn-date.prev
                {:type "button"
                 :on-click (fn [_] (swap! month-x (fnil dec 0)) nil)}
                (icon icons :previous)
                #_[:i.fa.fa-caret-left]]]
              [:th.text-center {:col-span (if week-numbers? 6 5)}
               (string/capitalize (date/date-format date (loc i18n :month-format)))]
              [:th.next
               [:button.btn.btn-date.next
                {:type "button"
                 :on-click (fn [_] (swap! month-x (fnil inc 0)) nil)}
                (icon icons :next)
                #_[:i.fa.fa-caret-right]]] ])
           [:tr
            (if week-numbers? [:th (loc i18n :week-short)])
            (for [day (first month)
                  :let [w (date/date-format (:date day) "E")]]
              [:th {:key w} w])]]
          (into
            [:tbody]
            (for [week month]
              (into
                [:tr
                 (if week-numbers?
                   [:td.week (date/date-format (:date (first week)) "w")])]
                (for [day week]
                  [:td
                   {:class (str (if (:out day) "out ")
                                (if (or (and value (.equals value (:date day)))
                                        (and start end (<= start (:date day) end))
                                        (and start (.equals (:date day) start))
                                        (and end (.equals (:date day) end)))
                                  "selected ")
                                (if (.equals (:date day) start) "start ")
                                (if (.equals (:date day) end) "end "))}
                   [:button.btn.btn-date
                    {:type "button"
                     :on-click (fn [_] (on-change (:date day)))}
                    (date/date-format (:date day) "d")]]))))]]))))

(defn quicklist-item [{:keys [start end on-change i18n]} item]
  [:li
   [:a
    {:on-click (fn [_] (on-change (select-keys item [:start :end])))
     :class (str (if (and (.equals (:start item) start) (.equals (:end item) end)) "active "))}
    (:name item)]] )

(defn quicklist [{:keys [start end on-change i18n] :as opts}]
  [:div.month-calendar
   [:h4 (loc i18n :quicklist)]
   [:ul
    [quicklist-item opts {:name  (loc i18n :today)
                          :start (t/today)
                          :end   (t/today)}]
    [quicklist-item opts {:name  (loc i18n :this-week)
                          :start (first-day-of-the-week (t/today))
                          :end   (last-day-of-the-week (t/today))}]
    [quicklist-item opts {:name  (loc i18n :this-month)
                          :start (t/first-day-of-the-month (t/today))
                          :end   (t/last-day-of-the-month (t/today))}]
    (for [i (range 1 6)
              :let [month (t/minus (t/today) (t/months i))]]
      ^{:key i}
      [quicklist-item opts {:name (string/capitalize (date/date-format month "LLLL"))
                            :start (t/first-day-of-the-month month)
                            :end   (t/last-day-of-the-month month)}])]])

(defn set-start [{:keys [end]} x]
  {:start x :end (if (or (not end)  (> x end)) x end)})

(defn set-end [{:keys [start]} x]
  {:end x :start (if (or (not start) (< x start)) x start)})

(defn date-range [{:keys [start end on-change i18n quicklist?] :as opts}]
  [:div.date-range
   [month-calendar
    (assoc opts
           :text (loc i18n :start)
           :value start
           :on-change (fn [x] (on-change (set-start {:end end} x))))]
   [month-calendar
    (assoc opts
           :text (loc i18n :end)
           :value end
           :on-change (fn [x] (on-change (set-end {:start start} x))))]
   (if (or (true? quicklist?) (nil? quicklist?))
     [quicklist
      (assoc opts
             :on-change (fn [{:keys [start end] :as x}]
                          (on-change x)))])])
