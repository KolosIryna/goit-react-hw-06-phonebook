import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'filter',
  storage,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState: { filter: '' },
  reducers: {
    addFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addFilter } = filterSlice.actions;
export const filterReducer = persistReducer(persistConfig, filterSlice.reducer);
// export const filterReducer = filterSlice.reducer;
