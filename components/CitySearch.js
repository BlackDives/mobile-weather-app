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
    borderWidth: 2,
    padding: '5%',
    backgroundColor: 'skyblue',
    borderRadius: 15,
    borderColor: 'white',
  },
});

export default CitySearch;
