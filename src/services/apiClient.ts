import axios from 'axios';

const API_BASE_URL = 'https://localhost:44309/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    accept: '*/*',
  },
});

export default apiClient;
