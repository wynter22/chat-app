import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import MessageImage from './MessageImage';
import MessageText from './MessageText';


const MessageTimeView = ({sendTime, customStyle}) => {
  return <View style={{alignSelf: 'flex-end'}}>
    <Text style={[styles.sendTimeText, customStyle]}>{sendTime}</Text>
  </View>;
}

const MessageView = ({messageInfo, style}) => {
  if (messageInfo.message === null) {
    return <MessageImage messageInfo={messageInfo}/>;
  } else {
    return <MessageText message={messageInfo.message} customStyle={style}/>;
  }
}

export default function MessageItem({type, messageInfo, messageTime, customStyle}) {
  let containerStyle = [styles.messageContainer, ...customStyle];

  if ('SENDER' === type) {
    containerStyle = [...containerStyle, {alignSelf: 'flex-end'}];
    return <View style={containerStyle}>
      {
        (messageInfo.image && messageInfo.imageProgress < 100) ? null :
          <MessageTimeView sendTime={messageTime} customStyle={styles.senderSendTimeText}/>
      }
      <MessageView messageInfo={messageInfo} style={styles.senderText}/>
    </View>;
  }
  return <View style={containerStyle}>
    <MessageView messageInfo={messageInfo} style={styles.receiverText}/>
    <MessageTimeView sendTime={messageTime} customStyle={styles.receiverSendTimeText}/>
  </View>;
}

const styles = StyleSheet.create({
  messageContainer: {
    marginBottom: 10,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  senderText: {
    shadowColor: 'rgba(91, 56, 177, 0.4)',
    backgroundColor: '#5B36AC',
    color: '#FFFFFF',
  },
  receiverText: {
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    backgroundColor: '#FFFFFF',
    color: '#363A42',
  },
  sendTimeText: {
    alignSelf: 'center',
    color: '#363a42',
    fontSize: 12,
    marginTop: 1,
    marginBottom: 1,
    letterSpacing: -0.1
  },
  senderSendTimeText: {
    paddingRight: 4,
  },
  receiverSendTimeText: {
    paddingLeft: 4,
  },
});
