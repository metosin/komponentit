# Lomakkeet

*Proof of concept*

[DEMO](http://metosin.github.io/lomakkeet)

## TODO

- [ ] Come up with a proper name.
- [ ] Publish on Clojars
- [ ] There are some problems with action abstraction
  - Async action can update form-state only once
- [ ] DOCUMENTATION!

## Features / Goals

### The Good Parts

- Level of abstraction for user
- Easy to create custom input elements. Check [datepicker](./src/lomakkeet/datepicker.cljs).
- Easy to compose custom inputs from different components
  - e.g. form-group + emtyable-input + datepicker
- Possible to customize form-groups. (add example).

### The Neutral Parts

- Integrate with Schema
  - Coerce e.g. strings to numbers
  - Use Schema for errors
    - User should be able to turn schema error into human readable error message
  - Use Schema for metadata about field
    - e.g. if field is required
  - If value on optional-key is changed to nil (reset), key is dissoced
- Fast enough
  - Schema coercion is done outside of render-loop
    - on-change etc. send async event and coercion is done inside go-loop
  - State for field components is a map which is created for every render
    - e.g. `(om/build field {:value (get-in @value ks) :error (get-in erros ks)})`
    - No apparent problems yet?
- Form should know if:
  - Its dirty
    - If there has been any changes to the form
    - Keep reference of the intitial state, then `(not= @state initial-state)`
  - If it has errors
- "Separation of concerns" ?

### The Bad Parts

- Context schemas. If validation of field a depends on field b. Schema doesn't support this. It's possible to create schema
  using function...
- `:after-change`, function which is called after changes. It is called with: form-state, current value and previous values.
  - Can be used to e.g. detect if field `:x` is changed and set value of field `:y` based on `:x` value.
  - "When this type is selected from selectbox, the value of name field should be set to name of type"

## Challenges

- ~~Where to store:~~ solved
  - Schema validation status (errors)
  - Initial form state
- How to parse Schema errors to easily readable format. [spike](./example/src/clj/lomakkeet/schema_errors_spike.clj)
- Validation against schema where some predicates depend on values of data
  - e.g. date2 should be after date1
  - Possible already (`:form-validation-fn`), but I'm not pleased with the implementation
- Abstraction for calculating stuff when form state changes (initialized, any action, saved etc.) so that no need to do expensive operations during render-fn

## Try examples

```sh
$ lein install
$ cd example
$ lein figwheel
# Another terminal
$ lein repl
user=> (go)
```

## References:

- https://github.com/friemen/zackzack
- https://github.com/friemen/cugb/blob/master/react/README.md#separation-of-concerns
- http://jonase.github.io/nil-recur/posts/29-11-2014-om-select.html

## License

Copyright © 2014 [Metosin Oy](http://www.metosin.fi)

Distributed under the Eclipse Public License, the same as Clojure.
