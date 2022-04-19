import React, {useEffect, useState} from 'react';
import {FlatList, Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import ChatMessageAPI from '../../api/chatMessageAPI';
import moment from 'moment';
import useStore from '../../store';

export default function AttachImageView(props) {
  const {messagesStore, roomStore} = useStore();
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    fetchData().then(r => setImageList(r));

    return function cleanup() {
      setImageList([]);
    }
  }, []);

  const fetchData = async () => {
    return await ChatMessageAPI.getAttachImages();
  }

  const sendImage = (imageSource) => {
    props.close();

    const newMessageItem = {
      senderId: 0,
      image: imageSource,
      imageProgress: 0,
      message: null,
      createDate: moment().format('YYYY-MM-DD HH:mm:ss'),
    };
    messagesStore.appendMessage(roomStore.roomId, newMessageItem);
  };

  const _renderItem = ({item, index}) => {
    return <TouchableOpacity onPress={() => sendImage(item.image)}>
      <Image style={(index > 0) ? [styles.imageBar, {marginLeft: 10}] : styles.imageBar}
             source={item.image}/>
    </TouchableOpacity>;
  }

  return props.isShow && <View style={styles.imageBarContainer}>
    <FlatList horizontal
              data={imageList}
              keyExtractor={(item, index) => index.toString()}
              renderItem={_renderItem}>
    </FlatList>
  </View>;
};


const styles = StyleSheet.create({
  imageBarContainer: {
    backgroundColor: '#5B36AC',
    height: 68,
    paddingLeft: 16,
    paddingTop: 11,
  },
  imageBar: {
    width: 46,
    height: 46,
    borderRadius: 5,
    resizeMode: 'center',
    overflow: 'hidden',
  },
});
