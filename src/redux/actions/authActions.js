import { CHANGE_LOGGED_IN_FLAG, SET_CURRENT_USER } from '../constants';
import { toast } from 'react-toastify';

import http from '../../utils/axios';

export const changeLoggedInFlag = (isLoggedIn) => {
  return {
    type: CHANGE_LOGGED_IN_FLAG,
    isLoggedIn,
  };
};

export const setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    currentUser: user,
  };
};

export const login = ({ email, password }) => {
  return async (dispatch) => {
    try {
      let user = await http.post(`/users/signin`, { email, password });
      let userData = user.data.data;
      console.log('user', userData);
      window.localStorage.setItem('x-sd-user', JSON.stringify(userData));
      dispatch(setCurrentUser(userData));
    } catch (err) {
      console.log('Error in getUserById', err.message);
      toast.error('Invalid credentials');
    }
  };
};
