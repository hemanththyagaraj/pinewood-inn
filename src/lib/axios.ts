import axios, { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { ErrorResponse } from 'types/base';

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}/rest/v1`,
  timeout: 5000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const authToken = import.meta.env.VITE_AUTH_TOKEN;

    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
      config.headers.apiKey = authToken;
    } else {
      return Promise.reject('Unauthorized user');
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => response?.data,
  (error: AxiosError) => {
    const message =
      (error?.response?.data as ErrorResponse)?.message ?? error.message;
    toast(message, { type: 'error' });
    return Promise.reject(error);
  },
);

export default axiosInstance;
