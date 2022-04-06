import Axios from 'axios';

// import { API_URL } from '@/config';
import { useNotificationStore } from '../stores/notifications';
// import storage from '@/utils/storage';
//
function authRequestInterceptor(config) {
  // const token = storage.getToken();
  const token = import.meta.env.CANONIC_KEY;
  if (token) {
    config.headers.authorization = `${token}`;
  }
  config.headers['Access-Control-Allow-Origin'] = '*';
  config.headers.Accept = 'application/json';
  return config;
}

export const axios = Axios.create({
  // baseURL: API_URL,
  baseURL: import.meta.env.VITE_CANONIC_URL,
});

axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.error(error);
    const message = error.response?.data?.message || error.message;
    useNotificationStore.getState().addNotification({
      type: 'error',
      title: 'Error',
      message,
    });

    return Promise.reject(error);
  }
);
console.tap = (v, ...rest) => (console.log(v, ...rest), v);
export const axiosGQL = (query, variables) =>
  axios
    .post('/', {
      query,
      variables,
    })
    .then(console.tap)
    .catch(console.error);

/**
 * @param {string} endpoint
 * @param {RequestInit} requestInit
 * @param {string} query
 * @param {TVariables} variables
 *
 * @returns Promise
 */
function fetcher(endpoint, requestInit, query, variables) {
  return async () => {
    const res = await fetch(endpoint, {
      method: 'POST',
      ...requestInit,
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  };
}
