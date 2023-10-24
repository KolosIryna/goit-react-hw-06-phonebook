import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'contact',
  storage,
  whitelist: ['contacts'],
};

export const contactsSlice = createSlice({
  name: 'contact',
  initialState: { contacts: [], name: '', number: '' },
  reducers: {
    addContact(state, action) {
      state.contacts = [...state.contacts, action.payload];
    },
    addName(state, action) {
      state.name = action.payload;
    },
    addNumber(state, action) {
      state.number = action.payload;
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const contactReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, addName, addNumber, deleteContact } =
  contactsSlice.actions;
