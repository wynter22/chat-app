import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import * as Progress from 'react-native-progress';
import Icon from '../../../assets';
import useStore from '../../../store';
import {observer} from 'mobx-react';

const MessageImage = observer(({messageInfo}) => {
  const {messagesStore, roomStore} = useStore();

  const removeImage = () => {
    messagesStore.removeMessage(roomStore.roomId, messageInfo.id);
  }

  return <View>
    <View style={styles.container}>
      <Image source={messageInfo.image}
             style={styles.image}/>
      {
        (100 > messageInfo.imageProgress) &&
        <TouchableOpacity style={styles.closeButton} onPress={removeImage}>
          <View style={styles.closeIcon}>
            <Image source={Icon.closeIcon}/>
          </View>
        </TouchableOpacity>
      }
    </View>
    {
      (100 > messageInfo.imageProgress) &&
      <Progress.Bar progress={messageInfo.imageProgress} width={200} size={6} color="#5B36AC"
                    borderRaduis={3} unfilledColor="#E5E5E7" borderWidth={0}
                    style={{marginTop: 6}}></Progress.Bar>
    }
  </View>
});

export default MessageImage;

const styles = StyleSheet.create({
  container: {justifyContent: 'center', alignItems: 'center'},
  image: {
    flex: 1, width: 200, height: 200,
    borderRadius: 5, resizeMode: 'center', overflow: 'hidden'
  },
  closeButton: {position: 'absolute'},
  closeIcon: {
    width: 40,
    height: 40,
    padding: 7,
    opacity: 0.8,
    borderRadius: 26.5,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
