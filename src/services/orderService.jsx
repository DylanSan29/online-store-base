import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/orders';

export const createOrder = async (orderData) => {
  const response = await axios.post(`${BASE_URL}`, orderData);
  return response.data;
};

export const getOrders = async (userId) => {
  const response = await axios.get(`${BASE_URL}/user/${userId}`);
  return response.data;
};
