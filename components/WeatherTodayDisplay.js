import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import WeatherTodayBox from './WeatherTodayBox';

const WeatherTodayDisplay = () => {
  const data = [
    {id: 1, time: 'Now', icon: 'I', temp: '70°'},
    {id: 2, time: '8pm', icon: 'I', temp: '70°'},
    {id: 3, time: '9pm', icon: 'I', temp: '70°'},
    {id: 4, time: '10pm', icon: 'I', temp: '70°'},
    {id: 5, time: '11pm', icon: 'I', temp: '70°'},
    {id: 6, time: '12am', icon: 'I', temp: '70°'},
    {id: 7, time: '1am', icon: 'I', temp: '70°'},
    {id: 8, time: '2am', icon: 'I', temp: '70°'},
    {id: 9, time: '3am', icon: 'I', temp: '70°'},
    {id: 10, time: '4am', icon: 'I', temp: '70°'},
    {id: 11, time: '5am', icon: 'I', temp: '70°'},
    {id: 12, time: '6am', icon: 'I', temp: '70°'},
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal={true}
        renderItem={({item}) => (
          <WeatherTodayBox time={item.time} temp={item.temp} icon={item.icon} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 2,
    borderBottomWidth: 2,
    padding: '3%',
    borderColor: 'white',
  },
});

export default WeatherTodayDisplay;
