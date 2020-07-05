import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_FALIED
} from '../constants';

const initialState = {
  token: localStorage.getItem('token'),
  isLoaded: false,
  loading: true,
  isAuthenticated: false,
  data: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isLoaded: true,
        loading: false,
        isAuthenticated: true,
        data: payload.user
      }
    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        isAuthenticated: true
      };
    case LOGIN_FAIL:
    case AUTH_FALIED:
      localStorage.removeItem('token');
      return {
        ...state,
        isLoaded: false,
        loading: true,
        isAuthenticated: false,
        data: {}
      }
    default:
      return state;
  }
}