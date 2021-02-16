import axios from 'axios';
import keys from './config';
import store from '../redux/store/store';
import { setCurrentUser } from '../redux/actions/authActions';

const opts = {
  headers: {
    'Content-Type': 'application/json',
  },
};

const bindAuthHeaders = (config) => {
  let userInfo = window.localStorage.getItem('x-sd-user');
  if (userInfo) {
    userInfo = JSON.parse(userInfo);
    config.headers['Authorization'] = `Bearer ${userInfo?.accessToken}`;
  }
  return config;
};

const http = axios.create({
  ...opts,
  baseURL: keys.BASE_URL,
});

http.interceptors.request.use(bindAuthHeaders);

http.interceptors.response.use((response) => {
  if (response.status === 401 || response.status === 403) {
    window.localStorage.removeItem('x-sd-user');
    store.dispatch(setCurrentUser(null));
  }
  return response;
});

export default http;
