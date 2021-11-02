import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const CitySearch = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.inputStyles} placeholder={'Search city...'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: '5%',
  },
  inputStyles: {
    borderWidth: 1,
    padding: '5%',
    backgroundColor: 'white',
    borderRadius: 15,
  },
});

export default CitySearch;
