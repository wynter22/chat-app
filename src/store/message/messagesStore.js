import {observable, action, runInAction, makeAutoObservable} from "mobx";
import ChatMessageAPI from '../../api/chatMessageAPI';

class messagesStore {
  messageList = [];

  constructor() {
    makeAutoObservable(this, {
      messageList: observable,
      initMessageList: action,
      fetchMessageList: action,
      appendMessage: action,
      removeMessage: action
    });
    this.messageList = [];
  }

  initMessageList() {
    this.messageList = [];
  };

  async fetchMessageList(roomId) {
    const result = await ChatMessageAPI.fetchMessages(roomId);
    runInAction(() => {
      this.messageList = result;
    });
  };

  async appendMessage(roomId, newMessage) {
    const result = await ChatMessageAPI.saveMessages(roomId, newMessage);
    runInAction(() => {
      this.messageList = result;
      if (newMessage.image) {
        const savedMessage = result.slice(result.length - 1)[0];
        this.uploadImage(roomId, savedMessage.id);
      }
    });
  };

  async removeMessage(roomId, messageId) {
    const result = await ChatMessageAPI.deleteMessage(roomId, messageId);
    runInAction(() => {
      this.messageList = result;
    });
  }

  async updateMessage(roomId, messageInfo) {
    const result = await ChatMessageAPI.updateMessage(roomId, messageInfo);
    runInAction(() => {
      this.messageList = result;
    });
  }

  uploadImage(roomId, messageId) {
    let counter = 0;
    const progress = setInterval(() => {
      const uploadIndex = this.messageList.findIndex(messageInfo => messageInfo.id === messageId);
      if (counter >= 100) {
        clearInterval(progress);
      } else {
        counter += 10;
        runInAction(() => {
          if (this.messageList.hasOwnProperty(uploadIndex)) {
            this.messageList[uploadIndex].imageProgress = counter;
            this.updateMessage(roomId, this.messageList[uploadIndex]);
          }
        })
      }
    }, 100);
  }
}

export default new messagesStore();
