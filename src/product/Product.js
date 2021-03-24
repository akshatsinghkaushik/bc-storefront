import React, { useState, useContext } from 'react';
import './Product.css';
import CartContext from '../context/CartContext';

const Product = ({ match, testParam }) => {
  const [quantity, setQuantity] = useState(1);
  const cartContext = useContext(CartContext);

  let product;
  if (match !== undefined) {
    product = cartContext.getProduct(match.params.id);
  } else {
    product = cartContext.getProduct(testParam);
  }

  return (
    <div className="Product">
      {/* {match.params.id} */}
      <div className="product-container">
        <h5 className="product-location">
          HOME/PLATES/
          <span style={{ color: 'gray' }}>{product.title.toUpperCase()}</span>
        </h5>
        <div className="product-content">
          <img
            className="product-image"
            src={`/media/${product.image}`}
            alt={product.title}
          />
          <div className="product-details">
            <div className="product-brand">{product.brand}</div>
            <div className="product-title">{product.title}</div>
            <div className="product-price">
              $ {Number(product.price).toFixed(2)}
            </div>
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
