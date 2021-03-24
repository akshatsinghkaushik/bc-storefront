import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';
import CartContext from '../context/CartContext';

const Cart = ({}) => {
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

    for (let i in colors) {
      if (text) {
        if (text.includes(colors[i])) {
          return colors[i];
        }
      }
    }

    return false;
  };

  return (
    <div className="Cart">
      <header className="cart-title">
        <h1>Shopping Cart</h1>
      </header>
      <div className="cart-items">
        <div className="product-item">
          <div className="">Product</div>
          <div className="cart-details">
            <div className="quantity">Quantity</div>
            <div className="total">Total</div>
            <div className="action">Action</div>
          </div>
        </div>
        <div className="cart-items-grid">
          {cartContext.cartMapArr.length === 0 ? (
            <div style={{ textAlign: 'center' }}>No Items in Cart</div>
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
                        {containsColor(item.title) ? (
                          <p>Color: {containsColor(item.title)}</p>
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
        <hr style={{ height: '1px', width: '100%', margin: '0' }} />
        <div className="cart-overview">
          <div></div>
          <div className="cart-overview-container">
            <p>Cart Overview</p>
            <div className="cart-overview-details">
              <div className="titles">
                <div>SubTotal</div>
                <div>Total</div>
              </div>
              <div className="prices">
                <div>$ {Number(cartContext.getCartTotal()).toFixed(2)}</div>
                <div>${Number(cartContext.getCartTotal()).toFixed(2)} CAD</div>
              </div>
            </div>
          </div>
        </div>
        <hr style={{ height: '1px', width: '100%', margin: '0' }} />
        <div className="cart-overview">
          <Link to={'/'}>Continue Shopping</Link>
          <button className="cart-footer-button">
            CHECKOUT (${Number(cartContext.getCartTotal()).toFixed(2)})
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
