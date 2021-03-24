import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './CartPopUp.css';
import CartContext from '../context/CartContext';

const CartPopUp = ({ cartPopUp, setCartPopUp }) => {
  const cartContext = useContext(CartContext);

  return (
    <div
      className="cart-popup"
      style={cartPopUp ? { display: 'flex' } : { display: 'none' }}
    >
      <div className="popup-items-container">
        {cartContext.cartMapArr.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '1rem' }}>
            No Items in Cart
          </div>
        ) : (
          ''
        )}
        {cartContext.cartMapArr.map((item, index) => {
          return (
            <div key={`popup-item-${index}`} className="popup-items">
              <div className="popup-product">
                <img
                  className="popup-item-image"
                  src={`/media/${item.image}`}
                  alt={item.title}
                />
                <div className="popup-item-details">
                  <h3>
                    {item.title}{' '}
                    <span style={{ fontSize: 'small', fontWeight: 'normal' }}>
                      x{item.quantity}
                    </span>
                  </h3>
                  <p>{item.brand}</p>
                  <p>${Number(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
              <button
                className="popup-item-action"
                onClick={() => cartContext.deleteCartItem(item)}
              >
                X
              </button>
            </div>
          );
        })}
      </div>
      <hr style={{ height: '1px', width: '100%', margin: '0' }} />
      <div className="popup-footer" style={{ margin: '1rem 1rem 0 1rem' }}>
        <p>Total</p>
        <p>${Number(cartContext.getCartTotal()).toFixed(2)}</p>
      </div>
      <div className="popup-footer">
        <Link
          to={'/cart'}
          className="popup-footer-view"
          onClick={() => setCartPopUp(!cartPopUp)}
        >
          VIEW CART
        </Link>
        <button className="popup-footer-checkout">CHECKOUT</button>
      </div>
    </div>
  );
};

export default CartPopUp;
