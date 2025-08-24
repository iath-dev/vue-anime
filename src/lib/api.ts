import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

if (!API_URL) {
  throw new Error('VITE_API_KEY no está definida en tu archivo .env');
}

const api = axios.create({
  baseURL: API_URL,
});

export default api;
