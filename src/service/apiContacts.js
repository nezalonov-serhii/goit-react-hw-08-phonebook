import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setToken = token => {
  axios.defaults.headers.common['Authorization'] = token;
};

const dellToken = () => {
  delete axios.defaults.headers.common['Authorization'];
};

export const getContacts = async token => {
  setToken(token);
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {
    return Promise.reject(error.response.statusText);
  }
};

export const deleteContact = async contactId => {
  try {
    const { data } = await axios.delete(`/contacts/${contactId}`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const addContact = async contact => {
  try {
    const { data } = await axios.post('/contacts', contact);
    return data;
  } catch (error) {
    return Promise.reject(error.response.statusText);
  }
};

export const signup = async contact => {
  try {
    const { data } = await axios.post('/users/signup', contact);
    setToken(data.token);

    return data;
  } catch (error) {
    if (error.response.data.keyPattern?.email === 1) {
      return Promise.reject(
        `Please try another email ${error.response.data.keyValue.email} this is not valid`
      );
    } else if (error.response.data) return Promise.reject(error.response.data);
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
    dellToken();
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const currentUser = async token => {
  setToken(token);
  try {
    const { data } = await axios.get('/users/current');

    return data;
  } catch (error) {
    dellToken();
    return Promise.reject(error.response.statusText);
  }
};
