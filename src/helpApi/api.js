import axios from 'axios';
import { API_URL, API_KEY } from '../Config';

const makeApiRequest = async (method, endpoint, data = null) => {
  try {
    const response = await axios({
      method: method,
      url: `${API_URL}${endpoint}`,
      data: data,
      headers: {
        "Content-Type": "application/json",
        API_KEY: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error with ${method} request to ${endpoint}:`, error);
    throw error;
  }
};

// GET: Obtener datos
const getApi = (endpoint) => {
  return makeApiRequest('GET', endpoint);
};

// POST: Crear un nuevo recurso
const postApi = (endpoint, data) => {
  return makeApiRequest('POST', endpoint, data);
};

// PUT: Actualizar completamente un recurso
const putApi = (endpoint, data) => {
  return makeApiRequest('PUT', endpoint, data);
};

// PATCH: Actualizar parcialmente un recurso
const patchApi = (endpoint, data) => {
  return makeApiRequest('PATCH', endpoint, data);
};

// DELETE: Eliminar un recurso
const deleteApi = (endpoint) => {
  return makeApiRequest('DELETE', endpoint);
};

export { getApi, postApi, putApi, patchApi, deleteApi };
