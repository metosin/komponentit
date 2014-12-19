# Lomakkeet

*Proof of concept*

[DEMO](http://metosin.github.io/lomakkeet)

## TODO

- [ ] Come up with a proper name.
- [ ] Publish on Clojars
- [ ] There are some problems with action abstraction
  - Async action can update form-state only once
- [ ] Port example project to Boot 2
- [ ] DOCUMENTATION!

## Features / Goals

- Very opionated
- Easy to create custom input elements. Check [datepicker](./src/lomakkeet/datepicker.cljs).
- Possible to customize form-groups. (add example).
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

## Challenges

- Where to store:
  - Schema validation status (errors)
  - Initial form state
- Validation against schema where some predicates depend on values of data
  - e.g. date2 should be after date1
  - Possible already (`:form-validation-fn`), but I'm not pleased with the implementation

## Test examples

```sh
$ lein figwheel
```

## References:

- https://github.com/friemen/zackzack
- https://github.com/friemen/cugb/blob/master/react/README.md#separation-of-concerns
- http://jonase.github.io/nil-recur/posts/29-11-2014-om-select.html

## License

Copyright © 2014 Metosin Oy

Distributed under the Eclipse Public License, the same as Clojure.
