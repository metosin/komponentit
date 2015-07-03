# Lomakkeet

*Proof of concept*

[DEMO](http://metosin.github.io/lomakkeet)

## TODO

- [ ] Come up with a proper name.
- [ ] DOCUMENTATION!

## Features / Goals

### The Good Parts

- Level of abstraction for user
- Easy to create custom input elements. Check [datepicker](./src/lomakkeet/datepicker.cljs).
- Easy to compose custom inputs from different components
  - e.g. form-group + emptyable-input + datepicker
- Possible to customize form-groups

### The Neutral Parts

- Integration with Schema
  - Coerces e.g. strings to numbers
  - Uses Schema for errors
    - User should be able to turn schema error into human readable error message
  - Uses Schema for metadata about field
    - e.g. if field is required
  - If value on optional-key is changed to nil (reset), key is dissociated
    from state
- Form knows
  - Its dirty
    - If there has been any changes to the form
    - Keep reference of the initial state, then `(not= @state initial-state)`
  - Which fields are dirty
  - If it has errors

### The Bad Parts

- Context schemas. If validation of field a depends on field b. Schema doesn't support this. It's possible to create schema
  using function...

## Challenges

- How to parse Schema errors to easily readable format.
- Validation against schema where some predicates depend on values of data
  - e.g. date2 should be after date1
  - Possible already (`:form-validation-fn`), but I'm not pleased with the implementation
- Abstraction for calculating stuff when form state changes (initialized, any
  action, saved etc.) so that no need to do expensive operations during
  render-fn.

## Try examples

```sh
$ lein install
$ cd example
$ lein develop
```

## References:

- https://github.com/friemen/zackzack
- https://github.com/friemen/cugb/blob/master/react/README.md#separation-of-concerns
- http://jonase.github.io/nil-recur/posts/29-11-2014-om-select.html

## License

Copyright © 2014-2015 [Metosin Oy](http://www.metosin.fi)

Distributed under the Eclipse Public License, the same as Clojure.
