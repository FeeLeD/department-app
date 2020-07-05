import {
  SET_ALERT,
  REMOVE_ALERT
} from '../constants';
import uuid from 'uuid';

export const setAlert = (msg, alertType, timer = 5000) => dispatch => {
  const id = uuid.v4();
  dispatch({
    type: SET_ALERT,
    payload: { id, msg, alertType }
  })

  setTimeout(() => {
    dispatch({
      type: REMOVE_ALERT,
      payload: { id }
    })
  }, timer);
}