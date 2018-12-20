(ns example.autocomplete
  (:require [clj-suomi.codesets.postalcodes :as postalcodes]))

(defmacro get-postalcodes []
  `(into (sorted-map)
         ~(vec (map (fn [{:keys [code name]}]
                      [code (str code " " name)])
                    (postalcodes/load-postalcodes)))))
