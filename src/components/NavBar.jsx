import React from 'react';
import { Link } from 'react-router-dom';
import '../style/navbar.css';
import head from '../pages/head.svg';

const NavBar = () => (
  <div className="nav">
    <ul>
      <li>
        <h1 className="title">Book Store</h1>
      </li>
      <li>
        <Link to="/">BOOKS</Link>
      </li>
      <li>
        <Link to="/categories">CATEGORIES</Link>
      </li>
    </ul>
    <img className="user-image" alt="Profile" src={head} />
  </div>
);
export default NavBar;
