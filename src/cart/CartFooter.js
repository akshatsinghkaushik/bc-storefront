import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './CartFooter.css';
import CartContext from '../context/CartContext';

const CartFooter = () => {
  const cartContext = useContext(CartContext);

  return (
    <div className="cart-footer">
      <Link to={'/'} className="continue-shopping">
        CONTINUE SHOPPING
      </Link>
      <button className="cart-footer-button">
        CHECKOUT (${Number(cartContext.getCartTotal()).toFixed(2)})
      </button>
    </div>
  );
};

export default CartFooter;
