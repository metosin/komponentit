(ns komponentit.font-awesome)

(def mime-type-icons
  {:default "fa-file-o"
   "image" "fa-file-image-o"
   "text"  "fa-file-text-o"
   "audio" "fa-file-audio-o"
   "video" "fa-file-video-o"
   "application" {"zip" "fa-file-archive-o"
                  "pdf" "fa-file-pdf-o"
                  "vnd.openxmlformats-officedocument.spreadsheetml.sheet" "fa-file-excel-o"
                  "vnd.openxmlformats-officedocument.wordprocessingml.document" "fa-file-word-o"
                  "vnd.openxmlformats-officedocument.presentationml.presentation" "fa-file-powerpoint-o"}})

(defn mime-type->class [mime-type]
  (let [[_ toptype subtype _] (some->> mime-type (re-matches #"(.*)/(.*)+(.*)"))]
    (let [icon-or-sub (or (get mime-type-icons toptype) (:default mime-type-icons))]
      (if (map? icon-or-sub)
        (or (get icon-or-sub subtype) (:default mime-type-icons))
        icon-or-sub))))

(defn mime-type-icon [{:keys [mime-type] :as props}]
  (let [cl (mime-type->class mime-type)]
    [:i.fa
     (-> props
         (update :class (fn [c]
                          (cond (string? c) (str c " " cl)
                                (coll? c) (into c cl)
                                :else cl)))
         (dissoc :mime-type))]))
