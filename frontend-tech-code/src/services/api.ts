import axios from 'axios';

const api = axios.create({
  baseURL: process.env.TECH_CODE_STORE_API,
});

export const getProducts = () => api.get('/products');

export default api;