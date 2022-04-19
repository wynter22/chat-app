import messagesStore from './message/messagesStore';
import roomStore from './room/roomStore';

const useStore = () => {
  return {
    messagesStore,
    roomStore
  };
};

export default useStore;
