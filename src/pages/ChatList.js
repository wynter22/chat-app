import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, TouchableHighlight, View} from 'react-native';
import {Link} from 'react-router-native';
import Icon from '../assets';
import Layout from '../components/layout/Layout';
import TopBar from '../components/layout/TopBar';
import ChatListAPI from '../api/chatListAPI';
import IconButton from '../components/Icon/IconButton';
import ChatRoomItem from '../components/chatList/ChatRoomItem';

export default function ChatList(props) {
  const [chatList, setChatList] = useState([]);
  useEffect(() => {
    fetchData().then(res => {
      setChatList(res);
    });
  }, []);

  const fetchData = async () => {
    return await ChatListAPI.fetchData();
  }

  const chatListRenderItem = ({item}) => {
    return <TouchableHighlight>
      <Link to={{pathname: `/room/${item.id}`, state: {chatInfo: item}}} underlayColor="#F9F9F9">
        <ChatRoomItem roomInfo={item}/>
      </Link>
    </TouchableHighlight>;
  }


  return (
    <Layout
      header={
        <TopBar left={<IconButton icon={Icon.menuIcon}></IconButton>}
                title="채팅"
                right={<IconButton icon={Icon.userIcon}></IconButton>}/>
      }
      content={
        <View style={styles.container}>
          <FlatList data={chatList}
                    renderItem={chatListRenderItem}
                    keyExtractor={(item, index) => index.toString()}/>
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  listItem: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 9,
    paddingBottom: 9,
    height: 74
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingVertical: 9,
  },
  textRow: {
    flexDirection: 'column',
    justifyContent: 'center'
  },

  image: {
    width: 56,
    height: 56,
    borderRadius: 150 / 2,
    overflow: 'hidden',
  },
  text: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },

});
