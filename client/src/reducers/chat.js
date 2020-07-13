import { 
  GET_CHATS, 
  SET_ACTIVE_CHAT,
  GET_ONLINE_MESSAGES
} from '../constants';

const initialState = {
  chats: [],
  activeChat: -1,
  onlineMessages: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch(type) {
    case GET_CHATS:
      return {
        ...state,
        chats: payload
      };
    case SET_ACTIVE_CHAT:
      return {
        ...state,
        activeChat: payload
      }
    case GET_ONLINE_MESSAGES:
      return {
        ...state,
        onlineMessages: [...state.onlineMessages, payload]
      }
    default:
      return state;
  }
}