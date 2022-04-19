import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

export default function MessageText({message, customStyle}) {
  return <TextInput value={message}
                    multiline
                    maxLength={400}
                    editable={false}
                    style={[styles.chatText, customStyle]}/>;
}

const styles = StyleSheet.create({
  chatText: {
    fontFamily: 'AppleSDGothicNeo-Medium',
    fontSize: 14,
    maxWidth: 300,
    height: 41,
    padding: 12,
    borderRadius: 12,
    color: '#363A42',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 4,
    shadowRadius: 2,
    elevation: 1,
    alignSelf: 'center',
    letterSpacing: -0.1
  },
});
