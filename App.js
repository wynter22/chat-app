import React, {Fragment} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Router from './src/routes/Router';

export default function App() {
  return (
    <Fragment>
      <SafeAreaView style={styles.statusBarContainer}>
        <StatusBar barStyle="light-content"/>
      </SafeAreaView>
      <SafeAreaView style={styles.container}>
        <Router/>
      </SafeAreaView>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  statusBarContainer: {
    backgroundColor: '#5B36AC',
  },
  container: {
    flex: 1,

  },
});
