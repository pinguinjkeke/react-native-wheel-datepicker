import { shallow } from 'enzyme';
import React from 'react';

import { DatePicker } from '../src';

test('ios DatePicker snapshot', () => {
  const onChange = jest.fn();
  const wrapper = shallow(
    <DatePicker date={new Date(1337)} mode="date" onDateChange={onChange} />,
  );
  expect(wrapper.find('DatePickerIOS').exists()).toEqual(true);
});
