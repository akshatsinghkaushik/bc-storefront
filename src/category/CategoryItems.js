import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './CategoryItems.css';
import CategoryItemOverlay from './CategoryItemOverlay';
import CartContext from '../context/CartContext';

const CategoryItems = () => {
  const [hoverElem, setHoverElem] = useState(false);
  const [hover, setHover] = useState(false);
  const cartContext = useContext(CartContext);

  return (
    <div className="category-items">
      <div className="items-grid">
        {cartContext.products.map((item, index) => (
          <div
            key={`item-${index}`}
            className="grid-item"
            onMouseEnter={() => {
              setHover(true);
              setHoverElem(item.title);
            }}
            onMouseOver={() => {
              setHover(true);
              setHoverElem(item.title);
            }}
            onMouseOut={() => {
              setHover(false);
              setHoverElem(false);
            }}
          >
            <img
              className="item-image"
              src={`/media/${item.image}`}
              alt={item.title}
            />
            <CategoryItemOverlay
              item={item}
              hover={hover}
              hoverElem={hoverElem}
            />
            <Link
              to={`/product/${item.title}`}
              style={{ textDecoration: 'none' }}
            >
              <div className="item-text">
                <p>{item.brand}</p>
                <h3>{item.title}</h3>
                <p>{`$ ${item.price}`}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryItems;
