import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const Booklist = () => {
  const books = useSelector((state) => state.books);
  return (
    <div>
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
