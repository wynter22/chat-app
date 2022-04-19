import React from 'react';
import {StyleSheet, Text, View} from 'react-native';


export default function DateDivider({date}) {
  return <View style={styles.dividerContainer}>
    <View style={styles.line}/>
    <Text style={styles.text}>{date}</Text>
    <View style={styles.line}/>
  </View>;
}

const styles = StyleSheet.create({
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 7,
    paddingBottom: 17
  },
  line: {flex: 1, height: 1, backgroundColor: '#363A42'},
  text: {flex: 1, textAlign: 'center', color: '#363A42', paddingHorizontal: 15}
});
