## 0.3.10 (2020-03-06)

- Use `reagent.dom/dom-node` instead of `reagent.core` function in preparation for next
Reagent versions

**[compare](https://github.com/metosin/komponentit/compare/0.3.9...0.3.10)**

## 0.3.9 (2019-06-28)

- `input/select`: Support boolean `:value`

**[compare](https://github.com/metosin/komponentit/compare/0.3.8...0.3.9)**

## 0.3.8 (2019-03-20)

- `input`: Read unicode minus sign for number inputs
- `modal`: Focus confirm OK button when opened
- `autocomplete`: Style fixes

**[compare](https://github.com/metosin/komponentit/compare/0.3.7...0.3.8)**

## 0.3.7 (2019-01-03)

- Add `.scss` styles
- Rename `komponentit.autocomplete` callbacks:
    - `:cb` -> `:on-change`
    - `:create` -> `:on-create`
    - `:remove-cb` -> `:on-remove`
    - Old names continues to work with a warning
- Rename `komponentit.timepicker` callback:
    - `:on-select` -> `:on-change`
    - Old name continues to work with a warning

**[compare](https://github.com/metosin/komponentit/compare/0.3.6...0.3.7)**

## 0.3.6 (2018-12-20)

- Don't call input `:on-change` second time if `:on-blur` or Enter key-press handler
is already called

**[compare](https://github.com/metosin/komponentit/compare/0.3.5...0.3.6)**

## 0.3.5 (2018-05-15)

- Improved autosize support for IE11

**[compare](https://github.com/metosin/komponentit/compare/0.3.4...0.3.5)**

## 0.3.4 (2018-05-07)

- Fix `autocomplete` input `:autocomplete` attribute value

**[compare](https://github.com/metosin/komponentit/compare/0.3.3...0.3.4)**

## 0.3.3 (2018-01-25)

- `autosize`: Copy textarea width

**[compare](https://github.com/metosin/komponentit/compare/0.3.2...0.3.3)**

## 0.3.2 (2017-11-09)

- `codemirror`: Remove unncessary devcards require
- `input`: Handle unicode space and minus on parseNumber
- `autosize`: Don't use infinite numbers as style props

**[compare](https://github.com/metosin/komponentit/compare/0.3.1...0.3.2)**

## 0.3.1 (2017-09-21)

- Refactored dropdown component
- Added codemirror component and parinfer example

**[compare](https://github.com/metosin/komponentit/compare/0.3.0...0.3.1)**

## 0.3.0 (29.3.2017)

- Provide default CSS for dropdown and modal
- Remove nav, currency-input and form-group components
- Autosize
    - Tune implementation to match react-autosize-input pixel perfectly
- Input
    - Improve number formatting and parsing
- Filepicker
    - Emit `on-select` even when same file is selected again
    - Pass additional properties to the button element

**[compare](https://github.com/metosin/komponentit/compare/0.2.2...0.3.0)**

## 0.2.2 (20.12.2016)

- Removed `console.log` from autosize input

**[compare](https://github.com/metosin/komponentit/compare/0.2.1...0.2.2)**

## 0.2.1 (19.10.2016)

- Reimplemented autosize input

**[compare](https://github.com/metosin/komponentit/compare/0.2.0...0.2.1)**

## 0.2.0 (30.11.2016)

- New autosize input element
- Refactored autocomplete styles etc.?
- Lots of stuff

**[compare](https://github.com/metosin/komponentit/compare/0.1.3...0.2.0)**

## 0.1.3 (13.6.2016)

- Parametrized dropdown classes

## 0.1.2

- Call on-change after real on-change event
    - This would update the form-state without on-blur, i.e. without leaving
    the input. And should better support browser pre-filled fields (login
    forms).

## 0.1.1

- Text input uses now temp atom

## 0.1.0

- Split Reagent components out from [Lomakkeet](https://github.com/metosin/lomakkeet)
