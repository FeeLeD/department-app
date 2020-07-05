import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_FALIED
} from '../constants';
import axios from 'axios';
import { setAlert } from './alert';
import setToken from '../utils/setToken';

export const loadUser = () => async dispatch => {
  if (localStorage.token)
    setToken(localStorage.token);

  try {
    const res = await axios.get('/api/user/');

    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({ type: AUTH_FALIED });
  }
}

export const loginUser = ({ email, password }, next) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post('/api/auth/', body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());

    next();
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL
    });

    if (err.response.data.errors) {
      const errors = err.response.data.errors;
      errors.forEach(error => {
        dispatch(setAlert(error.msg, 'danger', 2000));
      })
    } else {
      dispatch(setAlert('Ошибка авторизации', 'danger', 2000));
    }
  }
};

export const logoutUser = () => dispatch => {
  dispatch({ type: LOGIN_FAIL });
}