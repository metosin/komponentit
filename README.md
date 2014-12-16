# Lomakkeet

*WIP*


## TODO

- [ ] Come up with a proper name.
- [ ] Publish on Clojars

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

## Test examples

```sh
$ lein figwheel
```

## References:

- https://github.com/friemen/zackzack
- https://github.com/friemen/cugb/blob/master/react/README.md#separation-of-concerns
- http://jonase.github.io/nil-recur/posts/29-11-2014-om-select.html
