import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import WheelCurvedPicker from './WheelCurvedPicker';

const PickerItem = WheelCurvedPicker.Item;

const styles = StyleSheet.create({
  picker: {
    backgroundColor: '#d3d3d3',
    height: 220,
  },
  pickerItem: {
    color: '#333333',
    fontSize: 26,
  },
});


export default class Picker extends Component {
  static propTypes = {
    itemStyle: Text.propTypes.style,
    onValueChange: PropTypes.func.isRequired,
    pickerData: PropTypes.array.isRequired,
    style: View.propTypes.style,
    selectedValue: PropTypes.any,
  };

  static defaultProps = {
    itemStyle: null,
    style: null,
  };

  state = {
    selectedValue: this.props.selectedValue,
  };

  handleChange = (selectedValue) => {
    this.setState({ selectedValue });
    this.props.onValueChange(selectedValue);
  };

  render() {
    const { pickerData, itemStyle, style, ...props } = this.props;

    return (
      <WheelCurvedPicker
        {...props}
        style={[styles.picker, style]}
        itemStyle={[styles.pickerItem, itemStyle]}
        selectedValue={this.state.selectedValue}
        onValueChange={this.handleChange}
      >
        {pickerData.map((data, index) => (
          <PickerItem
            key={index}
            value={typeof data.value !== 'undefined' ? data.value : data}
            label={data.label || data.toString()}
          />
        ))}
      </WheelCurvedPicker>
    );
  }

  getValue() {
    return this.state.selectedValue;
  }
}
