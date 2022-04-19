import React from 'react';
import {StyleSheet, View} from 'react-native';

export default function Layout(props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {props.header}
      </View>
      <View style={styles.content}>
        {props.content}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    minHeight: 50,
    backgroundColor: '#5B36AC',
  },
  content: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  }
});



