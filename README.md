# react-native-wheel-datepicker

[![NPM](https://img.shields.io/npm/v/@davidgovea/react-native-wheel-datepicker.svg)](https://www.npmjs.com/package/@davidgovea/react-native-wheel-datepicker)
[![Build Status](https://img.shields.io/circleci/project/github/davidgovea/react-native-wheel-datepicker.svg)](https://circleci.com/gh/davidgovea/react-native-wheel-datepicker)
[![](https://img.shields.io/codecov/c/github/davidgovea/react-native-wheel-datepicker.svg)](https://codecov.io/gh/davidgovea/react-native-wheel-datepicker)

A iOS style picker and datepicker components for ReactNative.

- Original repository by @lesliesam: [react-native-wheel-picker](https://github.com/lesliesam/react-native-wheel-picker).
- Fork by @wusuopu who added the real cross platform behavior and datepicker [react-native-wheel-picker](https://github.com/wusuopu/react-native-wheel-picker).
- Fork by @pinguinjkeke, who provided maintenance and fixes [react-native-wheel-datepicker](https://github.com/pinguinjkeke/react-native-wheel-datepicker)

This is the fourth fork of repository, since it seems that @pinguinjkeke is no longer supporting [react-native-wheel-datepicker](https://github.com/pinguinjkeke/react-native-wheel-datepicker).

### Goals of this fork:
* Maintenance / updates for RN & platform changes
* Implement some missing features on Android (12-hour AM/PM mode, minute intervals)
* Typescript definitions

## Introduction
Cross platform Picker component for React-native.

Since picker is originally supported by iOS while Android only supports a ugly Spinner component. If you want to have the same user behaviour, you can use this.

The android component is based on [wheel-picker](https://github.com/AigeStudio/WheelPicker) which runs super fast and smoothly. It also supports curved effect which make it exactly the same looking and feel as the ios picker.

![](screenshots/ios1.png)
![](screenshots/ios2.png)

![](screenshots/android.png)

## How to use

Run command

For apps using RN 0.32 or higher, please run

```
npm i @davidgovea/react-native-wheel-datepicker --save
```

Configration:

```
react-native link react-native-wheel-datepicker
```

## Ingegration with CustomDatePickerIOS

By default, package provides default DatePickerIOS on the iOS side to simplify usage on both platforms.

You can install [react-native-custom-datepicker-ios](https://github.com/pinguinjkeke/react-native-custom-datepicker-ios) package
if you need textColor functionality on IOS platform.

Just install:
```
npm i react-native-custom-datepicker-ios
// or
yarn add react-native-custom-datepicker-ios
```
link dependencies:
```
react-native link react-native-custom-datepicker-ios
```
And register CustomDatePickerIOS inside react-native-wheel-datepicker package.
```js
import { registerCustomDatePickerIOS } from 'react-native-wheel-datepicker';
import CustomDatePickerIOS from 'react-native-custom-datepicker-ios';

registerCustomDatePickerIOS(CustomDatePickerIOS);
```
Then you can use textColored components for both platforms inside render function!
```jsx
import { DatePicker } from 'react-native-wheel-datepicker';

// ...
render() {
  return (
    <DatePicker
      mode="date"
      textColor="green"
    />
  )
}
```

## Example code

```jsx
import { Picker, DatePicker } from 'react-native-wheel-datepicker';

// use DatePicker
<DatePicker
  mode="date"
/>

// use Picker
<Picker
  style={{ flex: 1 }}
  selectedValue={1}
  pickerData={[1, 2, 3, 4, 5, 6]}
  onValueChange={value => this.setState({ value })}
/>
```
