(ns komponentit.calendar
  (:require [reagent.core :as r]
            [clojure.string :as string]
            [komponentit.date :as date]
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

(defn loc [i18n k]
  (assert (or (nil? i18n) (ifn? i18n)))
  (or (if i18n (i18n k))
      (get default-i18n k)))

(defn first-day-of-the-week [day]
  (t/minus day (t/days (dec (t/day-of-week day)))))

(defn last-day-of-the-week [day]
  (t/plus day (t/days (- 7 (t/day-of-week day)))))

(defn date-input [_]
  (let [input-value (r/atom nil)]
    (fn [{:keys [value text on-change opts
                 container-class input-class warning-class submit-button-class]
          :or {container-class "date-input__container"
               input-class "date-input"
               warning-class "date-input__warning"
               submit-button-class "date-input__submit"}}]
      (let [{:keys [i18n]} opts]
        [:form
         {:class container-class
          :on-submit (fn [e]
                       (.preventDefault e)
                       (.stopPropagation e)
                       (on-change (date/date-read @input-value (loc i18n :date-format)))
                       (reset! input-value nil)
                       nil)}
         [:span.date-input__name text]
         [:input
          {:type "text"
           :class input-class
           :on-change (fn [e]
                        (let [x (string/trim (.. e -target -value))]
                          (reset! input-value x)))
           :on-blur (fn [e]
                      (if (and on-change (seq @input-value))
                        (on-change (date/date-read @input-value (loc i18n :date-format))))
                      (reset! input-value nil)
                      nil)
           :placeholder (loc i18n :date-placeholder)
           :value (str (or @input-value
                           (date/date-format value (loc i18n :date-format))))}]
         (if (and @input-value (not (date/date-read @input-value (loc i18n :date-format))))
           [:span {:class warning-class}])
         [:button
          {:type "submit"
           :class submit-button-class
           :disabled (not (and @input-value (date/date-read @input-value (loc i18n :date-format))))}]]))))

(defn- build-month [day]
  (let [start (t/first-day-of-the-month day)
        end   (t/last-day-of-the-month day)]
    (vec
      (for [wom (range 6)]
        (vec
          (for [dow (range 7)
                :let [date (-> start first-day-of-the-week (t/plus (t/weeks wom)) (t/plus (t/days dow)))]]
            {:date date
             :out? (not (= (t/month day) (t/month date)))}))))))

(defn calendar [_]
  (let [month-x (r/atom nil)
        prev-val (atom nil)]
    (fn [{:keys [container-class calendar-class calendar-date-class
                 start end text value on-change week-numbers? date-input? i18n
                 min-date max-date]
          :or {container-class "calendar__container"
               calendar-class "calendar"
               calendar-date-class "calendar__date"}
          :as opts}]

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
                        (if on-change
                          (on-change x)))
            month (build-month date)
            month-name (string/capitalize (date/date-format date (loc i18n :month-format)))
            date-input? (or (true? date-input?) (nil? date-input?))]
        [:div
         {:class container-class}
         [:table
          {:class (str calendar-class)}
          [:thead
           [:tr
            [:th.calendar__header-cell
             {:col-span (if week-numbers? 8 7)}
             [:div.calendar-header
              [:button.calendar-header__prev-month
               {:type "button"
                :on-click (fn [_] (swap! month-x (fnil dec 0)) nil)}]

              [:div.calendar-header__content
               (if date-input?
                 [date-input
                  {:value value
                   :text text
                   :on-change (or on-change identity)
                   :opts opts}])
               [:span.calendar-header__month-name month-name]]

              [:button.calendar-header__next-month
               {:type "button"
                :on-click (fn [_] (swap! month-x (fnil inc 0)) nil)}]]]]
           [:tr
            (if week-numbers? [:th (loc i18n :week-short)])
            (for [day (first month)
                  :let [w (date/date-format (:date day) "E")]]
              [:th.calendar__week-header
               {:key w}
               w])]]
          [:tbody
           (for [week month
                 :let [week-num (date/date-format (:date (first week)) "w")]]
             [:tr
              {:key week-num}
              (if week-numbers?
                [:td.calendar__week week-num])
              (for [{:keys [date out?] :as day} week
                    :let [day-num (date/date-format date "d")
                          disabled? (or (and min-date (< date min-date))
                                        (and max-date (> date max-date)))
                          selected? (or (and value (.equals value date))
                                        (and start end (<= start date end))
                                        (and start (.equals start date))
                                        (and end (.equals end date)))]]
                [:td
                 {:key date
                  :class (str "calendar__date "
                              (if week-numbers?
                                "calendar__date--with-week-numbers ")
                              (if disabled?
                                "calendar__date--disabled ")
                              (if out?
                                "calendar__date--out ")
                              (if selected?
                                "calendar__date--selected ")
                              (if (and start (.equals start date))
                                "calendar__date--start ")
                              (if (and end (.equals end date))
                                "calendar__date--end "))}
                 [:button
                  {:class (str "calendar__date-button "
                               (if out?
                                 "calendar__date-button--out ")
                               (if selected?
                                 "calendar__date-button--selected "))
                   :type "button"
                   :on-click #(on-change date)
                   :disabled disabled?}
                  day-num]])])]]]))))

(defn quicklist-item [{:keys [item opts]}]
  (let [{:keys [start end on-change i18n]} opts]
    [:a.calendar-quicklist__item
     {:on-click (fn [_]
                  (if on-change
                    (on-change (select-keys item [:start :end]))))
      :class (str (if (and (.equals (:start item) start) (.equals (:end item) end))
                    "calendar-quicklist__item--active "))}
     (:name item)]) )

(defn quicklist
  [{:keys [container-class start end on-change i18n]
    :or {container-class "calendar-quicklist__container"}
    :as opts}]
  [:div
   {:class container-class}
   [:h4.calendar-quicklist__title (loc i18n :quicklist)]
   [:div.calendar-quicklist
    [quicklist-item
     {:opts opts
      :item {:name  (loc i18n :today)
             :start (t/today)
             :end   (t/today)}}]
    [quicklist-item
     {:opts opts
      :item {:name  (loc i18n :this-week)
             :start (first-day-of-the-week (t/today))
             :end   (last-day-of-the-week (t/today))}}]
    [quicklist-item
     {:opts opts
      :item {:name  (loc i18n :this-month)
             :start (t/first-day-of-the-month (t/today))
             :end   (t/last-day-of-the-month (t/today))}}]
    (for [i (range 1 6)
          :let [month (t/minus (t/today) (t/months i))]]
      ^{:key i}
      [quicklist-item
       {:opts opts
        :item {:name  (string/capitalize (date/date-format month "LLLL"))
               :start (t/first-day-of-the-month month)
               :end   (t/last-day-of-the-month month)}}])]])

(defn set-start [{:keys [end]} x]
  {:start x :end (if (or (not end) (> x end)) x end)})

(defn set-end [{:keys [start]} x]
  {:end x :start (if (or (not start) (< x start)) x start)})

(defn date-range [{:keys [start end on-change i18n quicklist?] :as opts}]
  [:div.date-range
   [calendar
    (assoc opts
           :container-class "date-range__calendar"
           :text (loc i18n :start)
           :value start
           :on-change (fn [x]
                        (if on-change
                          (on-change (set-start {:end end} x)))))]
   [calendar
    (assoc opts
           :container-class "date-range__calendar"
           :text (loc i18n :end)
           :value end
           :on-change (fn [x]
                        (if on-change
                          (on-change (set-end {:start start} x)))))]
   (if (or (true? quicklist?) (nil? quicklist?))
     [quicklist
      (assoc opts
             :container-class "date-range__quicklist"
             :on-change (fn [{:keys [start end] :as x}]
                          (if on-change
                            (on-change x))))])])
