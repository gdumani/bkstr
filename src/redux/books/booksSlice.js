import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_ID = 'FN35ZgxeHr1ORapGK8sX';
const API_URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${API_ID}/books/`;

const initialState = [];

export const getBooks = createAsyncThunk('books/getBooks', async () => {
  const response = await axios.get(API_URL).then(
    (apiBooks) => Object.entries(apiBooks.data).map(([id, bk]) => ({ id, ...bk[0] })),
  );
  return response;
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        id: action.payload.id,
        title: action.payload.title,
        author: action.payload.author,
        category: action.payload.category,
      };
      return [...state, newBook];
    },
    removeBook: (state, action) => [...state].filter((book) => book.id !== action.payload),
  },
  extraReducers(builder) {
    builder
      .addCase(getBooks.fulfilled, (state, action) => action.payload);
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
