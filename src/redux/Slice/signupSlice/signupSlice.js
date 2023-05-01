import { createSlice } from '@reduxjs/toolkit';
import { signupInitialState } from 'redux/initialState/initialState';
import {
  currentUserThunk,
  loginThunk,
  logoutThunk,
  signupThunk,
} from 'redux/thunk/contactsThunk';

// const handlePending = state => {
//   state.isLoading = true;
// };

// const handleRejected = (state, { error }) => {
//   state.isLoading = false;
//   state.error = error;
// };

const signupSlice = createSlice({
  name: 'signup',
  initialState: signupInitialState,

  extraReducers: builder => {
    builder
      .addCase(signupThunk.fulfilled, (state, { payload }) => {
        state.error = null;
        state.token = payload.token;
        state.user = payload.user;
        state.isLoggedIn = true;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.error = null;
        state.token = payload.token;
        state.user = payload.user;
        state.isLoggedIn = true;
      })
      .addCase(logoutThunk.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(currentUserThunk.fulfilled, (state, { payload }) => {
        state.error = null;
        state.user = payload;
        state.isLoggedIn = true;
      });
  },
});

export const signupReducer = signupSlice.reducer;
