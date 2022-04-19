import React, {useEffect, useRef, useState} from 'react';
import {FlatList, KeyboardAvoidingView, Platform, View, StyleSheet} from 'react-native';
import {useHistory} from 'react-router-dom';

import Icon from '../assets';
import TopBar from '../components/layout/TopBar';
import Layout from '../components/layout/Layout';
import AttachImageView from '../components/chatRoom/AttachImageView';
import MessageItem from '../components/chatRoom/message/MessageItem';

import moment from 'moment';
import 'moment/locale/ko';
import IconButton from '../components/Icon/IconButton';
import IconContainer from '../components/Icon/IconContainer';
import DateDivider from '../components/chatRoom/DateDivider';
import useStore from '../store';
import {observer} from 'mobx-react';
import MessageInput from '../components/chatRoom/message/MessageInput';

const ChatRoom = observer((props) => {
  const {messagesStore, roomStore} = useStore();
  const messageListRef = useRef();

  const [isShowImages, setShowImages] = useState(false);
  const [chatInfo, setChatInfo] = useState({});

  const history = useHistory();

  const backHistory = () => {
    history.goBack();
  };

  useEffect(() => {
    const state = props.location.state;
    setChatInfo(state.chatInfo);
    roomStore.setRoomId(props.match.params.room_id);
    messagesStore.fetchMessageList(roomStore.roomId);

    return function cleanUp() {
      messagesStore.initMessageList();
      roomStore.initRoomId();
    }
  }, []);

  const getMessageTime = (currentItem, index) => {
    if (messagesStore.messageList.length - 1 > index) {
      const nextItem = messagesStore.messageList[index + 1];

      const currentMessageTime = moment(currentItem.createDate).set('second', 0);
      const nextMessageTime = moment(nextItem.createDate).set('second', 0);

      if (currentItem.senderId === nextItem.senderId
        && currentMessageTime.isSame(nextMessageTime)) {
        return null;
      }
    }
    return moment(currentItem.createDate).format('hh:mm');
  }

  const getDateDividerText = (currentItem, index) => {
    if (0 < index) {
      const beforeItem = messagesStore.messageList[index - 1];

      const currentMessageTime = moment(currentItem.createDate).set({hour: 0, minute: 0, second: 0});
      const beforeMessageTime = moment(beforeItem.createDate).set({hour: 0, minute: 0, second: 0});

      if (!beforeMessageTime.isSame(currentMessageTime)) {
        return currentMessageTime.format('YYYY년 M월 D일');
      }
    }
    return null;
  }

  const getMessageStyle = (index) => {
    let customStyle = [];
    if (messagesStore.messageList.length - 1 === index) {
      customStyle.push({marginBottom: 19});
    }
    if (index === 0) {
      customStyle.push({marginTop: 20});
    }
    return customStyle;
  };

  return (
    <Layout
      header={
        <TopBar
          left={<IconButton icon={Icon.backIcon} onClick={backHistory}/>}
          title={chatInfo.name}
          right={
            <IconContainer icons={
              <>
                <IconButton icon={Icon.uploadIcon} onClick={() => setShowImages(true)}/>
                <IconButton iconStyle={{marginLeft: 10}} icon={Icon.searchIcon}/>
              </>
            }/>
          }
        />
      }
      content={
        <View style={{flex: 1}}>
          <AttachImageView isShow={isShowImages} close={() => setShowImages(false)}></AttachImageView>
          <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
                                style={{flex: 1}}
                                enabled
                                keyboardVerticalOffset={(Platform.OS === 'ios') ? 84 : 74}>
            <View style={styles.content}>
              <View style={{flex: 2}}>
                <FlatList data={messagesStore.messageList}
                          keyboardDismissMode='interactive'
                          ref={messageListRef}
                          initialScrollIndex={0}
                          onContentSizeChange={() => {
                            setTimeout(() => {
                              messageListRef.current.scrollToEnd({animated: true});
                            }, 10);
                          }}
                          keyExtractor={(item, index) => index.toString()}
                          renderItem={({item, index}) => {
                            const dateDividerText = getDateDividerText(item, index);
                            return <View style={{flex: 1}}>
                              {(dateDividerText != null) && <DateDivider date={dateDividerText}/>}
                              <MessageItem type={item.senderId === 0 ? 'SENDER' : 'RECEIVE'}
                                           customStyle={getMessageStyle(index)}
                                           messageInfo={item}
                                           messageTime={getMessageTime(item, index)}/>
                            </View>
                          }}>
                </FlatList>
              </View>
              <MessageInput/>
            </View>
          </KeyboardAvoidingView>
        </View>
      }
    />
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  content: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: '#F9F9F9',
  }
});


export default ChatRoom;
