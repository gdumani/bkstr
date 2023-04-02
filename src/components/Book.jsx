import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import checkPropTypes from 'prop-types';

const Book = (props) => {
  const {
    id, title, author, category,
  } = props;
  return (
    <li>
      <h5>{category}</h5>
      <h4>{title}</h4>
      <h6>{author}</h6>
      <button id={id} type="button">Remove </button>
    </li>
  );
};

export default Book;
Book.propTypes = {
  id: checkPropTypes.number.isRequired,
  title: checkPropTypes.string.isRequired,
  category: checkPropTypes.string.isRequired,
  author: checkPropTypes.string.isRequired,
};
