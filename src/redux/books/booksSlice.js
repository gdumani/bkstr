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
export const addBook = createAsyncThunk('books/addBook', async (payload) => {
  const {
    id, title, author, category,
  } = payload;
  await axios.post(API_URL, {
    item_id: id, title, author, category,
  });
  return payload;
});

export const removeBook = createAsyncThunk('books/removeBook', async (payload) => {
  await axios.delete(`${API_URL}${payload}`);
  return payload;
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    // removeBook: (state, action) => [...state].filter((book) => book.id !== action.payload),
  },
  extraReducers(builder) {
    builder.addCase(getBooks.fulfilled, (state, action) => action.payload);
    builder.addCase(addBook.fulfilled, (state, action) => [...state, action.payload]);
    builder.addCase(removeBook.fulfilled, (state, action) => (
      [...state].filter((book) => book.id !== action.payload)));
  },
});

// export const { removeBook } = booksSlice.actions;

export default booksSlice.reducer;
