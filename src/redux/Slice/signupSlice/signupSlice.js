import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { signupInitialState } from 'redux/initialState/initialState';
import {
  currentUserThunk,
  loginThunk,
  logoutThunk,
  signupThunk,
} from 'redux/thunk/contactsThunk';

const handlePending = state => {
  state.isAuthLoading = true;
  state.error = null;
};

const handleRejected = (state, { error }) => {
  state.isAuthLoading = false;
  state.error = error;
};

const handleFulfilled = (state, { payload }) => {
  state.isLoggedIn = true;
  state.isAuthLoading = false;
  state.error = null;
  state.token = payload.token;
  state.user = payload.user;
};

const handleLogout = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
  state.isAuthLoading = false;
  state.isRefreshing = false;
  state.error = null;
};

const signupSlice = createSlice({
  name: 'signup',
  initialState: signupInitialState,

  reducers: {
    logout(state) {
      handleLogout(state);
    },
  },

  extraReducers: builder => {
    builder

      .addCase(currentUserThunk.fulfilled, (state, { payload }) => {
        state.error = null;
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isAuthLoading = false;
      })
      .addMatcher(
        isAnyOf(logoutThunk.fulfilled, currentUserThunk.rejected),
        handleLogout
      )
      .addMatcher(
        isAnyOf(
          signupThunk.pending,
          loginThunk.pending,
          logoutThunk.pending,
          currentUserThunk.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(loginThunk.fulfilled, signupThunk.fulfilled),
        handleFulfilled
      )
      .addMatcher(
        isAnyOf(
          signupThunk.rejected,
          logoutThunk.rejected,
          loginThunk.rejected
        ),
        handleRejected
      );
  },
});

export const { logout } = signupSlice.actions;
export const signupReducer = signupSlice.reducer;
