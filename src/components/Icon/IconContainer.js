import {StyleSheet, View} from 'react-native';
import React from 'react';

export default function IconContainer(props) {
  return <View style={styles.iconContainer}>
    {props.icons}
  </View>;
}

const styles = StyleSheet.create({
  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems : 'center'
  }
});
