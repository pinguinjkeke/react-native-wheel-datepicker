import { shallow } from 'enzyme';
import React from 'react';

import Picker from '../src/picker';

test('ios Picker snapshot', () => {
  const onChange = jest.fn();
  const wrapper = shallow(
    <Picker
      selectedValue={1}
      pickerData={[1, 2, 3, 4, 5, 6]}
      onValueChange={onChange}
    />,
  );
  expect(wrapper).toMatchSnapshot();
});
