import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6423170977e7062b3e2ac8de.mockapi.io';
export const fetchContacts = createAsyncThunk(
    'reviews/fetchAll',
    async (_, thunkAPI) => {
        try {
        const response = await axios.get('/reviews');
        return response.data;
        } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
        }
    }
    );

export const addContacts = createAsyncThunk(
  'reviews/addTask',
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await axios.post('/reviews', { name, number });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

    export const deleteContacts = createAsyncThunk(
      'reviews/deleteTask',
      async (taskId, thunkAPI) => {
        try {
          const response = await axios.delete(`/reviews/${taskId}`);
          return response.data;
        } catch (e) {
          return thunkAPI.rejectWithValue(e.message);
        }
      }
    );
