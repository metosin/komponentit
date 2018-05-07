## 0.3.4 (2018-05-07)

- Fix `autocomplete` input `:autocomplete` attribute value

## 0.3.3 (2018-01-25)

- `autosize`: Copy textarea width

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
