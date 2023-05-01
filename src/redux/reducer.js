import { combineReducers } from '@reduxjs/toolkit';
import { contactReducer } from './Slice/contactsSlice/contactsSlice';
import { filterReducer } from './filterSlice/filterSlice';
import { signupReducer } from './Slice/signupSlice/signupSlice';

export const reducer = combineReducers({
  contact: contactReducer,
  filter: filterReducer,
  signup: signupReducer,
});
