import React from 'react';

const Addbook = () => (
  <div>
    <h3>ADD NEW BOOK</h3>
    <form>
      <input type="text" placeholder="Book Title" />
      <select id="category" name="category">
        <option value="Category" defaultValue={0}>Category</option>
      </select>
      <button type="button">Add Book</button>
    </form>
  </div>
);

export default Addbook;
