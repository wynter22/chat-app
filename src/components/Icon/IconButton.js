import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

export default function IconButton({icon, iconStyle, onClick}) {
  return <TouchableOpacity style={[styles.icon, iconStyle]} onPress={onClick}>
    <Image style={styles.icon} source={icon}/>
  </TouchableOpacity>;
}

const styles = StyleSheet.create({
  icon: {width: 24, height: 24}
});
