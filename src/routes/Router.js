import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NativeRouter, Route, Redirect} from 'react-router-native';
import ChatList from '../pages/ChatList';
import ChatRoom from '../pages/ChatRoom';

export default function Router() {
  return (
    <NativeRouter>
      <View style={styles.route}>
        <Route exact path="/list" component={ChatList}/>
        <Route path="/room/:room_id" component={ChatRoom}/>
        <Route path="*" to="/">
          <Redirect to="/list" />
        </Route>
      </View>
    </NativeRouter>
  );
}


const styles = StyleSheet.create({
  route: {
    flex: 1,
    flexDirection: "column"
  },
});


