import React, { useContext } from 'react';
import './CategoryItemOverlay.css';
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext';

const CategoryItemOverlay = ({ hover, hoverElem, item }) => {
  const cartContext = useContext(CartContext);

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
        alt="VIEW DETAILS"
        to={`/product/${item.title}`}
        style={{ textDecoration: 'none', fontSize: '10px' }}
      >
        VIEW DETAILS
      </Link>
      <button
        className="overlay-add-to-cart"
        alt="ADD TO CART"
        style={{ fontSize: '10px' }}
        onClick={() => cartContext.addItemToCart(item)}
      >
        ADD TO CART
      </button>
    </div>
  );
};

export default CategoryItemOverlay;
