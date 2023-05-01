import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContact,
  currentUser,
  deleteContact,
  getContacts,
  login,
  logout,
  signup,
} from 'service/apiContacts';

export const getContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async () => getContacts()
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => deleteContact(contactId)
);

export const createContactThunk = createAsyncThunk(
  'contacts/addContact',
  async contact => addContact(contact)
);

export const signupThunk = createAsyncThunk('user/signup', async contact =>
  signup(contact)
);

export const loginThunk = createAsyncThunk('user/login', async contact =>
  login(contact)
);

export const logoutThunk = createAsyncThunk('user/logout', async contact =>
  logout(contact)
);

export const currentUserThunk = createAsyncThunk(
  'user/currentUser',
  async contact => currentUser(contact)
);
