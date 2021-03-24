import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import CartPopUp from './CartPopUp';
import CartContext from '../context/CartContext';

const Header = ({}) => {
  const [cartPopUp, setCartPopUp] = useState(false);
  const cartContext = useContext(CartContext);

  return (
    <>
      <header className="header">
        <div className="header-logo">
          <img src="/media/logo.png" alt="Site Logo" />
        </div>
        <div className="header-links">
          <Link
            className="header-link"
            to="/"
            style={{ textDecoration: 'none', color: 'black' }}
          >
            Home
          </Link>
          <Link
            className="header-link"
            to="/"
            style={{ textDecoration: 'none', color: 'black' }}
          >
            Shop
            <img
              style={{
                height: '0.7rem',
                width: '0.7rem',
                marginLeft: '0.3rem',
              }}
              src={`/media/chevron-down-solid.svg`}
            />
          </Link>
          <Link
            className="header-link"
            to="/"
            style={{ textDecoration: 'none', color: 'black' }}
          >
            Journal
          </Link>
          <Link
            className="header-link"
            to="/"
            style={{ textDecoration: 'none', color: 'black' }}
          >
            More
            <img
              style={{
                height: '0.7rem',
                width: '0.7rem',
                marginLeft: '0.3rem',
              }}
              src={`/media/chevron-down-solid.svg`}
            />
          </Link>
        </div>
        <div className="cart-icon">
          <div
            onClick={() => setCartPopUp(!cartPopUp)}
            style={{ cursor: 'pointer' }}
          >
            My Cart{' '}
            {cartContext.cartMapArr.length === 0
              ? ''
              : `(${cartContext.getCartQuantity()})`}
            <img
              style={{
                height: '0.7rem',
                width: '0.7rem',
                marginLeft: '0.5rem',
              }}
              src={
                cartPopUp
                  ? `/media/chevron-right-solid.svg`
                  : `/media/chevron-down-solid.svg`
              }
            />
          </div>
          <CartPopUp cartPopUp={cartPopUp} setCartPopUp={setCartPopUp} />
        </div>
      </header>
    </>
  );
};

export default Header;
