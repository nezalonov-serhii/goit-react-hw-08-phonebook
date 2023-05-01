import { createSlice } from '@reduxjs/toolkit';

import { filterInitialFilterState } from 'redux/initialState/initialState';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialFilterState,
  reducers: {
    getVisibleContact: (state, { payload }) => (state = payload),
  },
});

export const { getVisibleContact } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
