import React, {useEffect, useRef, useState} from 'react';
import {observer} from 'mobx-react';
import {
  Image, Keyboard, StyleSheet, TextInput,
  TouchableOpacity, TouchableWithoutFeedback, View
} from 'react-native';
import Icon from '../../../assets';
import moment from 'moment';
import useStore from '../../../store';

const MessageInput = observer(() => {
  const {messagesStore, roomStore} = useStore();
  const [message, setMessage] = useState('');

  const messageInputRef = useRef();

  useEffect(() => {
    setMessage('');

    return function cleanUp() {
      setMessage('');
    }

  }, [])

  const sendMessage = () => {
    Keyboard.dismiss();
    if (message) {
      const newMessage = {
        senderId: 0,
        message: message,
        createDate: moment().format('YYYY-MM-DD HH:mm:ss'),
      };
      messagesStore.appendMessage(roomStore.roomId, newMessage);
    }
    setMessage('');
  };

  return <View style={styles.container}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <TextInput style={[styles.input, {flex: 2, marginRight: 12}]}
                 ref={messageInputRef}
                 underlineColorAndroid="transparent"
                 placeholder="메세지를 입력하세요.."
                 placeholderTextColor="#74747e"
                 autoCapitalize="none"
                 value={message}
                 onChangeText={setMessage}
                 onSubmitEditing={sendMessage}/>
    </TouchableWithoutFeedback>
    <TouchableOpacity onPress={sendMessage} style={styles.imageContainer}>
      <Image style={styles.image} source={Icon.sendIcon}></Image>
    </TouchableOpacity>
  </View>
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    paddingVertical: 20,
    justifyContent: "space-between",
  },
  input: {
    fontFamily: 'AppleSDGothicNeo-Medium',
    fontSize: 14,
    letterSpacing: -0.12,
    height: 50,
    padding: 16,
    backgroundColor: '#FFFFFF',
    color: '#74747E',
    borderRadius: 25,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 4,
    shadowRadius: 2,
    elevation: 1,
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 150 / 2,
    backgroundColor: '#5B36AC',
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'center',
    overflow: 'hidden',
    tintColor: '#FFFFFF',
  }
});

export default MessageInput;
