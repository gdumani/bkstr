import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { getBooks } from '../redux/books/booksSlice';
import '../style/booklist.css';

const Booklist = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => { dispatch(getBooks()); }, [dispatch]);

  return (
    <div className="booklist">
      <ul>
        {books.map((book) => {
          const {
            id, title, author, category,
          } = book;
          return (
            <Book
              key={id}
              {...{
                id, title, author, category,
              }}
            />
          );
        })}
      </ul>
    </div>
  );
};
export default Booklist;
