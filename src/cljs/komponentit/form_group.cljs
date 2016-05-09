(ns komponentit.form-group)

(defn form-group
  [{:keys [label error pristine class]
    :or {pristine true}
    :as opts}
   & content]
  (-> [:div.form-group
       {:class (str (if error "has-error ")
                    (if (and pristine error) "needs-attention ")
                    class)}
       [:label label]]
      (into content)
      (conj (if (and (not pristine) error)
              [:span.help-block error]))))
