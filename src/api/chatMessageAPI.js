import chatMessageData from '../../public/chatMessage';
import attachImageData from '../../public/attachImages';

const ChatMessageAPI = {
  fetchMessages: async (roomId) => {
    return chatMessageData.hasOwnProperty(roomId) ? chatMessageData[roomId] : [];
  },

  saveMessages: async (roomId, newMessage) => {
    if (!chatMessageData.hasOwnProperty(roomId)) {
      chatMessageData[roomId] = [];
    }

    if (chatMessageData[roomId].length) {
      const lastItem = chatMessageData[roomId].slice(-1)[0];
      newMessage.id = lastItem.id + 1;
    } else {
      newMessage.id = 0;
    }

    chatMessageData[roomId].push(newMessage);
    return chatMessageData[roomId];
  },

  deleteMessage: async (roomId, messageId) => {
    if (chatMessageData.hasOwnProperty(roomId)) {
      const targetIndex = chatMessageData[roomId].findIndex(messageInfo => {
        return messageInfo.id === messageId;
      });
      if (targetIndex > -1) {
        chatMessageData[roomId].splice(targetIndex, 1);
      }
      return chatMessageData[roomId];
    }
    return [];
  },

  updateMessage: async (roomId, updateMessageInfo) => {
    if (chatMessageData.hasOwnProperty(roomId)) {
      const targetIndex = chatMessageData[roomId].findIndex(messageInfo => {
        return messageInfo.id === updateMessageInfo.id;
      });
      if (targetIndex > -1) {
        chatMessageData[roomId][targetIndex] = updateMessageInfo;
        return chatMessageData[roomId];
      }
    }
    return [];
  },

  getAttachImages: async () => {
    return attachImageData;
  }
};

export default ChatMessageAPI;
