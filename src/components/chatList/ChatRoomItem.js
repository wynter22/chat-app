import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import moment from 'moment';

export default function ChatRoomItem({roomInfo}) {
  const getKoDayOfWeek = (day) => {
    switch (day) {
      case 0:
        return '일요일';
      case 1 :
        return '월요일';
      case 2:
        return '화요일';
      case 3:
        return '수요일';
      case 4:
        return '목요일';
      case 5:
        return '금요일';
      case 6:
        return '토요일';
      default:
        return '';
    }
  };

  const getLastMessageDate = (messageDate) => {
    const date = moment(messageDate);

    if (date.isSame(moment(), 'day')) {
      return date.format('hh:mm');
    }

    return getKoDayOfWeek(date.day());
  }

  return <View style={styles.container}>
    <Image key={roomInfo.id} style={styles.image} source={roomInfo.image}></Image>
    <View style={styles.textContainer}>
      <View style={styles.textRow}>
        <Text style={styles.nameText}>{roomInfo.name}</Text>
        <Text numberOfLines={1} style={styles.messageText}>{roomInfo.lastMessage.message}</Text>
      </View>
      <View style={[styles.textRow, {alignItems: 'flex-end'}]}>
        <Text style={styles.timeText}>{getLastMessageDate(roomInfo.lastMessage.createDate)}</Text>
        {(roomInfo.unreadMessageCount > 0) &&
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>{roomInfo.unreadMessageCount}</Text>
        </View>}
      </View>
    </View>
  </View>
}


const styles = StyleSheet.create({
  container: {
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
  nameText: {
    fontFamily: 'AppleSDGothicNeo-Bold',
    fontSize: 16,
    letterSpacing: -0.2,
    color: '#464052'
  },
  messageText: {
    width: 230,
    fontFamily: 'AppleSDGothicNeo-Medium',
    fontSize: 13,
    letterSpacing: -0.1,
    color: '#A4A6B0',
    paddingTop: 3
  },
  timeText: {
    fontFamily: 'AppleSDGothicNeo-Medium',
    fontSize: 11,
    letterSpacing: 0,
    color: '#363A42'
  },
  badgeContainer: {
    marginTop: 6,
    marginLeft: 23,
    marginBottom: 7,
    marginRight: 1,
    paddingVertical: 4,
    paddingHorizontal: 6,
    backgroundColor: '#5B36AC',
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10.5
  },
  badgeText: {
    fontFamily: 'AppleSDGothicNeo-Bold',
    fontSize: 10,
    letterSpacing: -0.08,
    color: 'white',
  }
});
