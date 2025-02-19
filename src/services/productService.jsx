import axios from 'axios';

const API_URL = 'https://your-api-url.com/products';  // Replace with your API endpoint

const getProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export default { getProducts };
