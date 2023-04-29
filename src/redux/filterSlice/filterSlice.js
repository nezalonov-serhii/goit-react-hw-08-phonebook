import { createSlice } from '@reduxjs/toolkit';

import { filterinItialFilterState } from 'redux/initialState/initialState';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterinItialFilterState,
  reducers: {
    getVisibleContact: (state, { payload }) => (state = payload),
  },
});

export const { getVisibleContact } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
