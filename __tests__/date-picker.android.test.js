import { shallow } from 'enzyme';
import moment from 'moment';
import React from 'react';

import AndroidDatePicker from '../src/date-picker.android';

describe('android DatePicker shallow render tests', () => {
  it('renders a picker in date mode', () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <AndroidDatePicker
        mode="date"
        date={new Date(1337)}
        onDateChange={onChange}
      />
    );

    const yearPicker = wrapper
      .findWhere((w) => w.key() === 'year')
      .find('Picker');
    yearPicker.invoke('onValueChange')('2019');

    // const monthPicker = wrapper.findWhere(w => w.key() === 'month').find('Picker');
    // monthPicker.invoke('onValueChange')('06');

    const datePicker = wrapper
      .findWhere((w) => w.key() === 'date')
      .find('Picker');
    datePicker.invoke('onValueChange')('22');

    expect(onChange).toHaveBeenCalledTimes(2);
  });
  it('renders a picker in time mode', () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <AndroidDatePicker
        mode="time"
        date={new Date(1337)}
        onDateChange={onChange}
      />
    );
    const yearPicker = wrapper
      .findWhere((w) => w.key() === 'hour')
      .find('Picker');
    yearPicker.invoke('onValueChange')('14');

    const monthPicker = wrapper
      .findWhere((w) => w.key() === 'minute')
      .find('Picker');
    monthPicker.invoke('onValueChange')('45');

    expect(onChange).toHaveBeenCalledTimes(2);
  });
});

describe('configuration', () => {
  it('has a 12-hour AM/PM mode', () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <AndroidDatePicker
        date={moment('2019-11-01').toDate()}
        mode="time"
        onDateChange={onChange}
        use12Hours
      />
    );

    const amPmPicker = wrapper
      .findWhere((w) => w.key() === 'period')
      .find('Picker');
    amPmPicker.invoke('onValueChange')('PM');
    expect(onChange).toHaveBeenCalled();

    expect(amPmPicker.length).toBeTruthy();
  });
});
