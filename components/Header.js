import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Weather App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'skyblue',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5%',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});

export default Header;
