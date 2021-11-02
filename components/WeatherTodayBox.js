import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const WeatherTodayBox = ({time, temp, icon}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{time}</Text>
      <Text style={styles.text}>{icon}</Text>
      <Text style={styles.text}>{temp}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: '2%',
  },
  text: {
    color: 'white',
  },
});

export default WeatherTodayBox;
