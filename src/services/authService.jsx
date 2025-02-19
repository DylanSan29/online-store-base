import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/auth';

export const login = async (credentials) => {
  const response = await axios.post(`${BASE_URL}/login`, credentials);
  return response.data;
};

export const register = async (userData) => {
  const response = await axios.post(`${BASE_URL}/register`, userData);
  return response.data;
};

export const logout = async () => {
  const response = await axios.post(`${BASE_URL}/logout`);
  return response.data;
};
