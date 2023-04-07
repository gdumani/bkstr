import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.status);

  return (
    <>
      <button type="button" onClick={() => dispatch(checkStatus())}>Check status</button>
      <h3>
        STATUS:
        {' '}
        {categories}
      </h3>
    </>
  );
};

export default Categories;
