import { shallow } from 'enzyme';
import React from 'react';

import AndroidDatePicker from '../src/date-picker.android';

test('android DatePicker snapshot', () => {
  const onChange = jest.fn();
  const wrapper = shallow(
    <AndroidDatePicker
      mode="date"
      date={new Date(1337)}
      onDateChange={onChange}
    />,
  );
  expect(wrapper.find('Picker').exists()).toEqual(true);
});
