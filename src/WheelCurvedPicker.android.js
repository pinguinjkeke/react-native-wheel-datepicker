import React, { PureComponent } from 'react';
import { ColorPropType, requireNativeComponent, View, Text } from 'react-native';
import PropTypes from 'prop-types';

const stateFromProps = (props) => {
  let selectedIndex = 0;
  const items = [];

  React.Children.forEach(props.children, (child, index) => {
    if (child.props.value === props.selectedValue) {
      selectedIndex = index;
    }

    items.push({ value: child.props.value, label: child.props.label });
  });

  return { selectedIndex, items };
};

class WheelCurvedPicker extends PureComponent {
  static propTypes = {
    ...View.propTypes,
    data: PropTypes.array,
    textColor: ColorPropType,
    textSize: PropTypes.number,
    itemStyle: Text.propTypes.style,
    itemSpace: PropTypes.number,
    onValueChange: PropTypes.func.isRequired,
    selectedValue: PropTypes.any,
    selectedIndex: PropTypes.number,
  };

  static defaultProps = {
    textSize: 26,
    itemSpace: 20,
    itemStyle: null,
    textColor: '#333',
  };

  onValueChange = (e: Event) => this.props.onValueChange(e.nativeEvent.data);

  componentWillMount() {
    this.setState(stateFromProps(this.props));
  }

  componentWillReceiveProps(nextProps) {
    this.setState(stateFromProps(nextProps));
  }

  render() {
    const { children, ...otherProps } = this.props;
    return (
      <WheelCurvedPickerNative
        {...otherProps}
        onValueChange={this.onValueChange}
        data={this.state.items}
        textColor={this.props.textColor}
        textSize={this.props.textSize}
        selectedIndex={parseInt(this.state.selectedIndex, 10)}
      />
    );
  }
}

class Item extends PureComponent {
  static propTypes = {
    value: PropTypes.any.isRequired,
    label: PropTypes.string.isRequired,
  };

  // These items don't get rendered directly.
  render: () => null;
}

WheelCurvedPicker.Item = Item;

const WheelCurvedPickerNative = requireNativeComponent('WheelCurvedPicker', WheelCurvedPicker);

export default WheelCurvedPicker;
