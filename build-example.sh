#!/bin/bash

lein cljsbuild clean
lein with-profile prod cljsbuild once

cp -r resources/public/js gh-pages
