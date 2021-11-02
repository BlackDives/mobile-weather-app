import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CityDisplay = ({city, clouds, temperature}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.cityText}>{city}</Text>
      <Text style={styles.cloudsText}>{clouds}</Text>
      <Text style={styles.tempText}>{temperature}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cityText: {
    fontSize: 30,
    color: 'white',
  },
  cloudsText: {
    color: 'white',
  },
  tempText: {
    fontSize: 80,
    color: 'white',
  },
});

export default CityDisplay;
