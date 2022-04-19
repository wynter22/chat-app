import {action, makeAutoObservable, observable} from 'mobx';

class RoomStore {
  roomId = null;

  constructor() {
    makeAutoObservable(this, {
      roomId: observable,
      setRoomId: action,
    });
    this.roomId = null;
  }

  initRoomId() {
    this.roomId = null;
  }

  setRoomId(roomId) {
    this.roomId = roomId;
  }
}

export default new RoomStore();
