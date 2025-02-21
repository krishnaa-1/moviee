import React from 'react';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';
import './moviecard.css';

const MovieCard = ({name , description , genre , image}) => {
  return (
    <>
      <div className="movie-card-container">
        <img 
          src={image} 
          alt="Movie Poster" 
          className="movie-poster"
        />
        <h3>Name : {name}</h3>
        <p>Description : {description}</p>
        <p>Genre : {genre}</p>
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
      </div>
    </>
  );
};

export default MovieCard;
