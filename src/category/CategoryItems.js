import React from 'react';
import { Link, Route } from 'react-router-dom';
import './CategoryItems.css';

const CategoryItems = ({ items }) => {
  return (
    <div className="category-items">
      <div className="items-grid">
        {items.map((item, index) => (
          <div key={`item-${index}`} className="grid-item">
            <img
              className="item-image"
              src={`/media/${item.image}`}
              alt={item.title}
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
