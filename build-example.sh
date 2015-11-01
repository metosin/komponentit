#!/bin/bash

rev=$(git rev-parse HEAD)

if [[ ! -d gh-pages ]]; then
    git clone --branch gh-pages git@github.com:metosin/lomakkeet.git gh-pages
fi

(
cd gh-pages
git pull
)

boot build-example

rm -r gh-pages/*
cp -r target/* gh-pages

cd gh-pages
git add --all
git commit -m "Build example from ${rev}."
git push origin gh-pages
