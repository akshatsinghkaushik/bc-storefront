import React, { useState, useContext } from 'react';
import './Product.css';
import CartContext from '../context/CartContext';

const Product = ({ match }) => {
  const [quantity, setQuantity] = useState(1);
  const cartContext = useContext(CartContext);

  const product = cartContext.getProduct(match.params.id);

  return (
    <div className="Product">
      {/* {match.params.id} */}
      <div className="product-container">
        <div className="product-location">
          HOME/PLATES/
          <span style={{ color: 'gray' }}>{product.title.toUpperCase()}</span>
        </div>
        <div className="product-content">
          <img
            className="product-image"
            src={`/media/${product.image}`}
            alt={product.title}
          />
          <div className="product-details">
            <div className="product-brand">{product.brand}</div>
            <div className="product-title">{product.title}</div>
            <div className="product-price">$ {product.price}</div>
            <div className="product-description">{product.description}</div>
            <hr style={{ height: '1px', width: '100%', margin: '0' }} />
            <div className="product-quantity">
              <div className="total-amount">{quantity}</div>
              <div className="incre-decre-buttons">
                <button
                  className="incre-button"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
                <button
                  onClick={() => {
                    if (quantity != 1) setQuantity(quantity - 1);
                  }}
                >
                  -
                </button>
              </div>
              <button
                className="add-to-cart"
                onClick={() => cartContext.addItemToCart(product, quantity)}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
