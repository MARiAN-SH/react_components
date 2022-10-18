import axios from 'axios';
import qs from 'query-string';

const URL_MATERIALS = 'https://62fdf3aa41165d66bfb4eb3b.mockapi.io';
const URL_API_DOGS = 'https://api.thedogapi.com/v1';

// API MATERIALS---------------------------------
export const addMaterial = async values => {
  const response = await axios.post(`${URL_MATERIALS}/materials`, values);
  return response.data;
};

export const getMaterials = async () => {
  const response = await axios.get(`${URL_MATERIALS}/materials`);
  return response.data;
};
export const deleteMaterial = async id => {
  const response = await axios.delete(`${URL_MATERIALS}/materials/${id}`);
  return response.data;
};
export const updateMaterial = async filds => {
  const response = await axios.put(
    `${URL_MATERIALS}/materials/${filds.id}`,
    filds
  );
  return response.data;
};

// API DOGS
// axios.defaults.baseURL = 'https://api.thedogapi.com/v1';
// axios.defaults.headers.common['x-api-key'] = process.env.REACT_APP_API_KEY;

export const dataDogs = async () => {
  try {
    // const rensponse = await axios.get(`/breeds`);
    const rensponse = await axios.get(`${URL_API_DOGS}/breeds`, {
      headers: { 'x-api-key': process.env.REACT_APP_DOGS_KEY },
    });
    return rensponse.data;
  } catch (err) {}
};

export const searchDog = async selectedBreed => {
  const response = await axios.get(`${URL_API_DOGS}/images/search`, {
    params: {
      dreed_id: selectedBreed,
    },
  });
  return response;
};

// API NEWS API
const BASE_URL = 'http://newsapi.org/v2';
const API_KEY = 'b5af197258514304b90e019accd26013';

export const feachNews = async params => {
  const searchParams = qs.stringify(params, { skipNull: true });

  return await axios.get(
    `${BASE_URL}/everything?apiKey=${API_KEY}&${searchParams}`
  );
};
