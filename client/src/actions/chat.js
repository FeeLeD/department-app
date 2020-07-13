import axios from 'axios';
import { 
  GET_CHATS, 
  SET_ACTIVE_CHAT,
  GET_ONLINE_MESSAGES
} from '../constants';

export const getChats = (next) => async dispatch => {
  try {
    const res = await axios.get('/api/chat');

    dispatch({
      type: GET_CHATS,
      payload: res.data
    })

    next(res.data);
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

export const getOnlineMessages = ({user, chat, content}) => dispatch => {
  const message = {
    user,
    chat,
    content,
    date: Date.now()
  }
  dispatch({
    type: GET_ONLINE_MESSAGES,
    payload: message
  })
}