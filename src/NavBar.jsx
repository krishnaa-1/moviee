import React from 'react';
import './navbar.css';
import { FiShoppingCart, FiHeart } from 'react-icons/fi'; // Icons for cart and favorite
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      {/* Logo and App Name */}
      <div className="navbar-left">
        <img src="https://icon-library.com/images/movie-icon-app/movie-icon-app-17.jpg" alt="Logo" className="navbar-logo" />
        <h1 className="navbar-title">Netflix</h1>
      </div>

      {/* Navigation Links */}
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">Contact</Link>
        </li>
      </ul>


      {/* Cart and Favorites */}
      <div className="navbar-right">
        <button className="nav-button">
          <FiHeart className="icon" />
          Favorites
        </button>
        <button className="nav-button">
          <FiShoppingCart className="icon" />
          Cart
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
