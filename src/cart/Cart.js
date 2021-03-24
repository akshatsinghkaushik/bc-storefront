import React, { useContext } from 'react';
import './Cart.css';
import CartContext from '../context/CartContext';
import CartFooter from './CartFooter';
import CartItems from './CartItems';

const Cart = ({}) => {
  const cartContext = useContext(CartContext);

  return (
    <div className="Cart">
      <header className="cart-title">
        <h1>Shopping Cart</h1>
      </header>
      <div className="cart-items">
        <div className="product-item">
          <p className="">Product</p>
          <div className="cart-details">
            <p className="quantity">Quantity</p>
            <p className="total">Total</p>
            <p className="action">Action</p>
          </div>
        </div>
        <CartItems />
        <hr style={{ height: '1px', width: '100%', margin: '0' }} />
        <div className="cart-overview">
          <div></div>
          <div className="cart-overview-container">
            <p>CART OVERVIEW</p>
            <div className="cart-overview-details">
              <div className="titles">
                <p>SUBTOTAL</p>
                <br />
                <p>TOTAL</p>
              </div>
              <div className="prices">
                <p>$ {Number(cartContext.getCartTotal()).toFixed(2)}</p>
                <br />
                <p style={{ fontSize: '14px', color: 'black' }}>
                  ${Number(cartContext.getCartTotal()).toFixed(2)} CAD
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr style={{ height: '1px', width: '100%', margin: '0' }} />
        <CartFooter />
      </div>
    </div>
  );
};

export default Cart;
