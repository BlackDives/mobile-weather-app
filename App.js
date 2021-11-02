import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Header from './components/Header';
import CitySearch from './components/CitySearch';
import CityDisplay from './components/CityDisplay';
import WeatherTodayDisplay from './components/WeatherTodayDisplay';

const App = () => {
  StatusBar.setBarStyle('dark-content', true);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <CitySearch />
      <CityDisplay city={'Baton Rouge'} temperature={'70°'} clouds={'clear'} />
      <WeatherTodayDisplay />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    padding: '5%',
  },
});

export default App;
