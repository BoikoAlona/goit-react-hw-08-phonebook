import { createAsyncThunk } from '@reduxjs/toolkit';
import { $authInstance } from './../../redux/auth/authServices/authApi';

export const apiGetContacts = createAsyncThunk(
  'contacts/apiGetContacts',
  async (_, thunkAPI) => {
    try {
      const { data } = await $authInstance.get('/contacts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const apiAddContact = createAsyncThunk(
  'contacts/apiAddContact',
  async (formData, thunkAPI) => {
    try {
      const { data } = await $authInstance.post('/contacts', formData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const apiRemoveContacts = createAsyncThunk(
  'contacts/apiRemoveContacts',
  async (contactId, thunkAPI) => {
    try {
      const { data } = await $authInstance.delete(`/contacts/${contactId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
