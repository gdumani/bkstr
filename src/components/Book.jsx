import React from 'react';
import checkPropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const Book = (props) => {
  const dispatch = useDispatch();
  const {
    id, title, author, category,
  } = props;
  return (
    <li>
      <h5>{category}</h5>
      <h4>{title}</h4>
      <h6>{author}</h6>
      <button id={id} onClick={(e) => dispatch(removeBook(e.target.id))} type="button">Remove </button>
    </li>
  );
};

export default Book;
Book.propTypes = {
  id: checkPropTypes.string.isRequired,
  title: checkPropTypes.string.isRequired,
  category: checkPropTypes.string.isRequired,
  author: checkPropTypes.string.isRequired,
};
