(ns example.font-awesome
  (:require [komponentit.font-awesome :as fa]
            [reagent.core :as r]
            [cljs.test :refer-macros [is]]
            [devcards.core :as dc :include-macros true]))

(dc/defcard (str "
To use [FontAwesome icons](https://fontawesome.com/v4.7.0/)
either add stylesheet to your HTML:

```
<link href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\" rel=\"stylesheet\">
```

Or add Webjars dependency:

```
[org.webjars.bower/font-awesome \"4.7.0\" :scope \"test\"]
```

And use together with [ring-webars](https://github.com/weavejester/ring-webjars), to serve icon files,
and [less4clj](https://github.com/Deraen/less4clj)/[sass4clj](https://github.com/Deraen/sass4clj)
to include FA stylesheet in your CSS bundle.
"))

(dc/defcard-rg mime-type-icons
  "This component can automatically provide icon given mime-type string."
  [:div
   [:ul
    (for [mime-type [nil
                     ""
                     "foo/bar"
                     "image/png"
                     "text/html"
                     "audio/mpeg"
                     "video/mp4"
                     "application/zip"
                     "application/pdf"
                     "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                     "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                     "application/vnd.openxmlformats-officedocument.presentationml.presentation"]]
      [:li
       {:key (or mime-type "nil")}
       [fa/mime-type-icon
        {:mime-type mime-type}]
       " "
       (or mime-type [:i "nil"])])]])

