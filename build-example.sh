#!/bin/bash

rev=$(git rev-parse HEAD)

if [[ ! -d gh-pages ]]; then
    git clone --branch gh-pages git@github.com:metosin/komponentit.git gh-pages
fi

(
cd gh-pages || exit
git pull
)

lein figwheel :once prod
lein less4clj once

rm -rf gh-pages/*
cp -r build-target/public/* gh-pages
cp example-src/html/public/* gh-pages
cp dev-target/public/example.css gh-pages

cd gh-pages || exit
git add --all
git commit -m "Build example from ${rev}."
git push origin gh-pages
