# Lomakkeet-example

This example project might be of some interest in itself. I have tried to
apply few improvements from Boot to Leiningen project. I will also probably
use this as test project to compare boot vs. lein memory usage.

## TODO

- [ ] Port project to Boot 2
- [ ] Is it possible to set up cljsbuild paths to use profile name?
  - Uberjar and dev builds shouldn't interfere

### Notes about example project

- [example](./example) directory contains another lein project
- Uses [profiles.clj](./example/profiles.clj) to share cljsbuild settings between dev and prod
- `resources` dir is purely for stuff in repo, cljsbuild writes output to `target`
- Uses [custom js](./example/resources/public/js/app.js) shim for development js
  - Copied from [boot-cljs][boot-cljs]
- Uses lein [checkouts](./example/checkouts) for the core library
  - library source-path added to cljsbuild manually to get cljsbuild/figwheel
  auto recompilation work if library code is changed

[boot-cljs]: https://github.com/adzerk/boot-cljs
