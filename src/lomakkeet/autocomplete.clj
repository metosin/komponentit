(ns lomakkeet.autocomplete)

(defmacro create-matcher [fields]
  `(fn [~'item ~'term]
     (or ~@(for [field fields]
             `(some-> ~'item (get ~field) (-> (.toLowerCase) (.indexOf ~'term) (not= -1))))
         false)))

(comment
  (println (macroexpand-1 '(create-matcher [:id :nimi])))
  (println (clojure.walk/macroexpand-all '(create-matcher [:id :nimi]))))
