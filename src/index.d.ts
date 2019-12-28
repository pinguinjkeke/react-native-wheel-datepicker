import * as React from 'react';
import * as ReactNative from 'react-native';

interface PickerProps {
  textColor?: string;
  textSize?: number;
  itemSpace?: number;
  onValueChange: (val: any) => void;
  pickerData: any[];
  style: ReactNative.ViewProps;
  selectedValue: any;
}

interface DatePickerBaseProps {
  date?: Date;
  maximumDate?: Date;
  minimumDate?: Date;
  mode?: 'date' | 'time' | 'datetime';
  onDateChange: (date: Date) => void;
  minuteInterval?: number; // todo: further restrict
}

interface DatePickerAndroidProps {
  labelUnit?: {
    year?: string;
    month?: string;
    date?: string;
  };
  order?: string;
  use12Hours?: boolean;
  style?: ReactNative.ViewProps;
  textColor?: string;
  textSize?: number;
  itemSpace?: number;
}

export const registerCustomDatePickerIOS: (
  CustomDatePickerIOS: React.Component
) => React.Component;

export class Picker extends React.Component<PickerProps> {}

export class DatePicker extends React.Component<
  DatePickerBaseProps & DatePickerAndroidProps
> {}
