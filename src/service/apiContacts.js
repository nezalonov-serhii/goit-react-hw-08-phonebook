import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setToken = token => {
  axios.defaults.headers.common['Authorization'] = token;
};

export const dellToken = () => {
  delete axios.defaults.headers.common['Authorization'];
};

export const getContacts = async () => {
  try {
    const response = await axios.get('/contacts');
    return response.data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const deleteContact = async contactId => {
  try {
    const response = await axios.delete(`/contacts/${contactId}`);
    return response.data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const addContact = async contact => {
  try {
    const response = await axios.post('/contacts', contact);
    return response.data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const signup = async contact => {
  try {
    const { data } = await axios.post('/users/signup', contact);
    setToken(data.token);

    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const login = async contact => {
  try {
    const { data } = await axios.post('/users/login', contact);
    setToken(data.token);

    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const logout = async () => {
  try {
    await axios.post('/users/logout');
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const currentUser = async token => {
  try {
    setToken(token);
    const { data } = await axios.get('/users/current');

    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};
