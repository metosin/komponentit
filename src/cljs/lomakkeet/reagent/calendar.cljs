(ns lomakkeet.reagent.calendar
  (:require [reagent.core :as r]
            [clojure.string :as string]
            [lomakkeet.date :as date]
            [cljs-time.core :as t]))

(defn first-day-of-the-week [day]
  (t/minus day (t/days (dec (t/day-of-week day)))))

(defn last-day-of-the-week [day]
  (t/plus day (t/days (- 7 (t/day-of-week day)))))

(defn create-quicklist []
  (into [{:name "Tämä päivä"
          :start (t/today)
          :end   (t/today)}
         {:name "Tämä viikko"
          :start (first-day-of-the-week (t/today))
          :end   (last-day-of-the-week (t/today))}
         {:name "Tämä kuukausi"
          :start (t/first-day-of-the-month (t/today))
          :end   (t/last-day-of-the-month (t/today))}]
        (for [i (range 1 6)
              :let [month (t/minus (t/today) (t/months i))]]
          {:name (string/capitalize (date/date-format month "LLLL"))
           :start (t/first-day-of-the-month month)
           :end   (t/last-day-of-the-month month)})))

(defn date-input [value type on-change]
  (let [input-value (r/atom nil)]
    (fn [value type on-change]
      [:form
       {:on-submit (fn [e]
                     (.preventDefault e)
                     (.stopPropagation e)
                     (js/console.log @input-value)
                     (js/console.log (date/date-read @input-value "dd.MM.yyyy"))
                     (on-change (date/date-read @input-value "dd.MM.yyyy"))
                     (reset! input-value nil)
                     nil)}
       [:div.input-group.input-group-sm
        [:span.input-group-addon type]
        [:input.form-control
         {:type "text"
          :on-change (fn [e] (let [x (string/trim (.. e -target -value))]
                               (reset! input-value (if (seq x) x nil))))
          :value (str (or @input-value
                          (date/date-format value "dd.MM.yyyy")))}]
        (if (and @input-value (not (date/date-read @input-value "dd.MM.yyyy"))) [:span.input-group-btn [:span.btn.btn-danger [:i.fa.fa-warning]]])
        (if (and @input-value (date/date-read @input-value "dd.MM.yyyy")) [:span.input-group-btn [:button.btn.btn-success {:type "submit"} [:i.fa.fa-check]]])
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

(defn month-calendar [{:keys [value start end text value on-change]}]
  (let [month-x (r/atom nil)
        prev-val (atom nil)]
    (fn [{:keys [value start end text value on-change]}]
      ; HACK: Is there any better way to reset month to default when value changes?
      (if (not= value @prev-val)
        (reset! month-x nil))
      (reset! prev-val value)

      (let [value (or value (t/today))
            date  (if @month-x
                    (t/plus value (t/months @month-x))
                    value)
            on-change (fn [x]
                        (reset! month-x nil)
                        (on-change x))
            month (build-month date)]
        [:div.month-calendar
         [:table.table
          [:thead
           [:tr.head1
            [:th.prev
             [:button.btn.btn-date.prev
              {:type "button"
               :on-click (fn [_] (swap! month-x (fnil dec 0)) nil)}
              [:i.fa.fa-caret-left]]]
            [:th {:col-span 6}
             [date-input value text on-change]]
            [:th.next
             [:button.btn.btn-date.next
              {:type "button"
               :on-click (fn [_] (swap! month-x (fnil inc 0)) nil)}
              [:i.fa.fa-caret-right]]]]
           [:tr
            [:th.text-center {:col-span 8}
             (string/capitalize (date/date-format date "LLLL"))]]
           [:tr
            (into
              [:th "Vk"]
              (for [day (first month)]
                [:th
                 (date/date-format (:date day) "E")]))]]
          (into
            [:tbody]
            (for [week month]
              (into
                [:tr [:td.week (date/date-format (:date (first week)) "w")]]
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

(defn quicklist [{:keys [start end on-change]}]
  [:div.month-calendar
   [:h4 "Pikavalinnat"]
   [:ul
    (map-indexed
      (fn [i item]
        [:li {:key i}
         [:a
          {:on-click (fn [_] (on-change (select-keys item [:start :end])))
           :class (str (if (and (.equals (:start item) start) (.equals (:end item) end)) "active "))}
          (:name item)]])
      (create-quicklist))]])

(defn set-start [{:keys [end]} x]
  {:start x :end (if (> x end) x end)})

(defn set-end [{:keys [start]} x]
  {:end x :start (if (< x start) x start)})

(defn date-range [{:keys [start end on-change] :as opts}]
  [:div.date-range
   [month-calendar
    (assoc opts
           :text "Alku"
           :value start
           :on-change (fn [x] (on-change (set-start {:end end} x))))]
   [month-calendar
    (assoc opts
           :text "Loppu"
           :value end
           :on-change (fn [x] (on-change (set-end {:start start} x))))]
   [quicklist
    (assoc opts
           :on-change (fn [{:keys [start end] :as x}]
                        (on-change x)))]])
