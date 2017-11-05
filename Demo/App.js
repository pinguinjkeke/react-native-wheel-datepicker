import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { DatePicker, Picker } from 'react-native-wheel-datepicker';

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
  state = {};

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scroll}>
          <View>
            <Text style={styles.text__info}>
              current date: {this.state.date && this.state.date.toJSON()}
            </Text>
            <DatePicker
              mode="date"
              textSize={36}
              textColor='red'
              onDateChange={date => this.setState({ date })}
            />

            <View style={styles.separator} />
            <Text style={styles.text__info}>
              current time: {this.state.time && this.state.time.toJSON()}
            </Text>
            <DatePicker
              mode="time"
              onDateChange={time => this.setState({ time })}
            />

            <View style={styles.separator} />
            <Text style={styles.text__info}>
              Datepicker with labels{"\n"}
              current datetime: {this.state.datetime && this.state.datetime.toJSON()}
            </Text>
            <DatePicker
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
