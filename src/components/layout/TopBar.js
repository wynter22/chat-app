import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function TopBar(props) {
  return (
    <View style={styles.content}>
      <View style={{flex: 1}}>
        {props.left}
      </View>
      <View style={{flex: 1}}>
        <Text style={styles.text}>
          {props.title}
        </Text>
      </View>
      <View style={{flex: 1, alignItems: 'flex-end'}}>
        {props.right}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    backgroundColor: '#5B36AC',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 16,
  },
  text: {
    fontFamily: 'AppleSDGothicNeo-Bold',
    fontSize: 17,
    letterSpacing: -0.12,
    alignSelf : 'center',
    color: "#FFFFFF",
  }
});



