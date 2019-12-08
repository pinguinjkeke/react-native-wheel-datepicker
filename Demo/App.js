import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Picker, registerCustomDatePickerIOS } from '@davidgovea/react-native-wheel-datepicker';
import CustomDatePickerIOS from 'react-native-custom-datepicker-ios';

const DatePicker = registerCustomDatePickerIOS(CustomDatePickerIOS);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    flex: 1,
  },
  text__info: {
    backgroundColor: 'green',
    paddingTop: 10,
    paddingBottom: 10,
  },
  separator: {
    backgroundColor: 'green',
    height: 30,
  },
});

export default class App extends Component {
  state = {
    firstDate: new Date(),
    secondDate: new Date(),
    thirdDate: new Date(),
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scroll}>
          <View>
            <Text style={styles.text__info}>
              current date: {this.state.date && this.state.date.toJSON()}
            </Text>
            <DatePicker
              date={this.state.firstDate}
              mode="date"
              textSize={36}
              textColor='red'
              onDateChange={date => this.setState({ date })}
              style={{ width: '100%' }}
            />

            <View style={styles.separator} />
            <Text style={styles.text__info}>
              current time: {this.state.time && this.state.time.toJSON()}
            </Text>
            <DatePicker
              date={this.state.secondDate}
              mode="time"
              onDateChange={time => this.setState({ time })}
            />

            <View style={styles.separator} />
            <Text style={styles.text__info}>
              Datepicker with labels{"\n"}
              current datetime: {this.state.datetime && this.state.datetime.toJSON()}
            </Text>
            <DatePicker
              date={this.state.thirdDate}
              mode="datetime"
              onDateChange={datetime => this.setState({ datetime })}
              labelUnit={{ year: 'Y', month: 'M', date: 'D' }}
            />

            <View style={styles.separator} />
            <Text style={styles.text__info}>
              Picker with custom styles{"\n"}
              current selectedValue: {this.state.value}
            </Text>
            <Picker
              textColor='red'
              textSize={36}
              style={{ flex: 1 }}
              selectedValue={1}
              pickerData={[1, 2, 3, 4, 5, 6]}
              onValueChange={value => this.setState({ value })}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
