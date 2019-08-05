import axios from 'axios';
import { resetToken } from 'helpers/auth';
import { SERVER_URL } from 'config';

type ApiVersions = {
  v1: 'v1';
};

export const API_VERSIONS: ApiVersions = {
  v1: 'v1',
};

const API_BASE_PATHS = {
  [API_VERSIONS.v1]: `${SERVER_URL}/api/v1`,
};

export const getClient = () => {
  let headers = {
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json',
    'x-access-token': '',
  };

  const token = localStorage.getItem('token');

  if (token) {
    headers = { ...headers, 'x-access-token': `${token}` };
  }

  const instance = axios.create({
    headers,
    baseURL: API_BASE_PATHS[API_VERSIONS.v1] || '/',
  });

  instance.interceptors.response.use(
    response => {
      if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
      }
      return Promise.reject(response);
    },
    error => {
      if (error.message === 'Network Error') {
        error.response = { data: { error: 'Connection Refused!' } };
      } else if (error.response.status === 401) {
        resetToken();
      }
      return Promise.reject(error);
    }
  );

  return instance;
};
