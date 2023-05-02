import { createSlice } from '@reduxjs/toolkit';
import { signupInitialState } from 'redux/initialState/initialState';
import {
  currentUserThunk,
  loginThunk,
  logoutThunk,
  signupThunk,
} from 'redux/thunk/contactsThunk';

const handlePending = state => {
  state.isAuthLoading = true;
};

const handleRejected = (state, { error }) => {
  state.isAuthLoading = false;
  state.error = error;
};

const signupSlice = createSlice({
  name: 'signup',
  initialState: signupInitialState,

  extraReducers: builder => {
    builder
      .addCase(signupThunk.pending, handlePending)
      .addCase(signupThunk.fulfilled, (state, { payload }) => {
        state.error = null;
        state.token = payload.token;
        state.user = payload.user;
        state.isLoggedIn = true;
      })
      .addCase(signupThunk.rejected, handleRejected)
      .addCase(loginThunk.pending, handlePending)
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.isAuthLoading = false;
        state.error = null;
        state.token = payload.token;
        state.user = payload.user;
        state.isLoggedIn = true;
      })
      .addCase(loginThunk.rejected, handleRejected)
      .addCase(logoutThunk.pending, handlePending)
      .addCase(logoutThunk.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isAuthLoading = false;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(logoutThunk.rejected, handleRejected)
      .addCase(currentUserThunk.pending, handlePending)
      .addCase(currentUserThunk.fulfilled, (state, { payload }) => {
        state.error = null;
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(currentUserThunk.rejected, (state, { error }) => {
        state.isRefreshing = false;
        state.error = error;
      });
  },
});

export const signupReducer = signupSlice.reducer;
