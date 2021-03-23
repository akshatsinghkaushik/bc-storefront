import React from 'react';
import './CategoryItemOverlay.css';
import { Link } from 'react-router-dom';

const CategoryItemOverlay = ({ addItemToCart, hover, hoverElem, item }) => {
  return (
    <div
      className="overlay"
      style={
        hover && hoverElem === item.title
          ? { display: 'flex' }
          : { display: 'none' }
      }
    >
      <Link
        className="overlay-details"
        to={`/product/${item.title}`}
        style={{ textDecoration: 'none' }}
      >
        VIEW DETAILS
      </Link>
      <button
        className="overlay-add-to-cart"
        onClick={() => addItemToCart(item)}
      >
        ADD TO CART
      </button>
    </div>
  );
};

export default CategoryItemOverlay;
