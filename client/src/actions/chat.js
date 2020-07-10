import axios from 'axios';
import { 
  GET_CHATS, 
  SET_ACTIVE_CHAT,
  GET_MESSAGES
} from '../constants';

export const getChats = () => async dispatch => {
  try {
    const res = await axios.get('/api/chat');

    dispatch({
      type: GET_CHATS,
      payload: res.data
    })
  } catch (err) {
    console.log(err);
  }
}

export const setActiveChat = id => dispatch => {
  dispatch({
    type: SET_ACTIVE_CHAT,
    payload: id
  });
}

export const getMessages = chatId => async dispatch => {
  try {
    const res = await axios.get(`/api/chat/message/${chatId}`);
    
    dispatch({
      type: GET_MESSAGES,
      payload: res.data
    })
  } catch (err) {
    console.log(err);
  }
}