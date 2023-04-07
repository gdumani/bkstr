import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    item_id: 'item1',
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
  },
  {
    item_id: 'item2',
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
  },
  {
    item_id: 'item3',
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Nonfiction',
  },
];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        item_id: action.payload.id,
        title: action.payload.title,
        author: action.payload.author,
        category: action.payload.category,
      };
      return [...state, newBook];
    },
    removeBook: (state, action) => [...state].filter((book) => book.item_id !== action.payload),
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
