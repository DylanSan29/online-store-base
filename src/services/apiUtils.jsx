import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api',
  timeout: 5000,
});

export const handleApiError = (error) => {
  console.error('API Error:', error.response?.data || error.message);
  throw error.response?.data || 'Something went wrong. Please try again.';
};
