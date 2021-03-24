import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext';
import './CartItems.css';

const CartItems = () => {
  const cartContext = useContext(CartContext);

  const containsColor = (text) => {
    const colors = [
      'Blue',
      'Green',
      'Indigo',
      'Violet',
      'Yellow',
      'Orange',
      'Red',
    ];

    return colors.filter((color) => text && text.includes(color));
  };
  return (
    <div className="cart-items-grid">
      {cartContext.cartMapArr.length === 0 ? (
        <p style={{ textAlign: 'center', padding: '2rem' }}>No Items in Cart</p>
      ) : (
        ''
      )}
      {cartContext.cartMapArr &&
        cartContext.cartMapArr.map((item, index) => (
          <div key={`cart-item-${index}`}>
            <hr style={{ height: '1px', width: '100%' }} />
            <div className="cart-grid-item">
              <div className="product-items">
                <img
                  className="cart-item-image"
                  src={`/media/${item.image}`}
                  alt={item.title}
                />
                <Link
                  to={`/product/${item.title}`}
                  style={{ textDecoration: 'none' }}
                >
                  <div className="cart-item-text">
                    <p>{item.brand}</p>
                    <h3>{item.title}</h3>
                    {containsColor(item.title).length !== 0 ? (
                      <p>
                        Color:{' '}
                        <span className="product-color">
                          {containsColor(item.title)}
                        </span>
                      </p>
                    ) : (
                      ''
                    )}
                  </div>
                </Link>
              </div>
              <div className="amount">
                <div className="quantity">
                  <div className="total-amount">{item.quantity}</div>
                  <div className="incre-decre-buttons">
                    <button
                      className="incre-button"
                      onClick={() =>
                        cartContext.updateCartItemQuantity(item, '+')
                      }
                    >
                      +
                    </button>
                    <button
                      onClick={() =>
                        cartContext.updateCartItemQuantity(item, '-')
                      }
                    >
                      -
                    </button>
                  </div>
                </div>
                <div className="total">
                  $ {Number(item.quantity * item.price).toFixed(2)}
                </div>
                <button
                  className="action"
                  onClick={() => cartContext.deleteCartItem(item)}
                >
                  X
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CartItems;
