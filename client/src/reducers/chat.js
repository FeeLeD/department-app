import { 
  GET_CHATS, 
  SET_ACTIVE_CHAT,
  GET_MESSAGES 
} from '../constants';

const initialState = {
  chats: [],
  activeChat: -1,
  messages: []
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
    case GET_MESSAGES:
      return {
        ...state,
        messages: payload
      }
    default:
      return state;
  }
}