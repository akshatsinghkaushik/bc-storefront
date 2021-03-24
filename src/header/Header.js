import React, { useState, useContext, useEffect, useRef } from 'react';
import './Header.css';
import CartPopUp from './CartPopUp';
import CartContext from '../context/CartContext';

const Header = ({}) => {
  const [cartPopUp, setCartPopUp] = useState(false);
  const cartContext = useContext(CartContext);

  const node = useRef();
  const link = useRef();

  const handleClick = (e) => {
    if (node.current && link.current) {
      if (node.current.contains(e.target) || link.current.contains(e.target)) {
        // inside click
        return;
      }
      // outside click
      setCartPopUp(false);
    }
  };

  useEffect(() => {
    // add when mounted
    document.addEventListener('click', handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      <header className="header">
        <div className="header-logo">
          <img src="/media/logo.png" alt="Site Logo" />
        </div>
        <div
          className="header-links"
          style={{ transform: 'translateX(0.5rem)' }}
        >
          <a
            className="header-link"
            href="/"
            style={{ textDecoration: 'none', color: 'black' }}
          >
            HOME
          </a>
          <a
            className="header-link"
            href="/"
            style={{ textDecoration: 'none', color: 'black' }}
          >
            SHOP
            <img
              style={{
                height: '0.7rem',
                width: '0.7rem',
                marginLeft: '0.3rem',
              }}
              src={`/media/chevron-down-solid.svg`}
            />
          </a>
          <a
            className="header-link"
            href="/"
            style={{ textDecoration: 'none', color: 'black' }}
          >
            JOURNAL
          </a>
          <a
            className="header-link"
            href="/"
            style={{ textDecoration: 'none', color: 'black' }}
          >
            MORE
            <img
              style={{
                height: '0.7rem',
                width: '0.7rem',
                marginLeft: '0.3rem',
              }}
              src={`/media/chevron-down-solid.svg`}
            />
          </a>
        </div>
        <div className="cart-icon">
          <div
            onClick={() => setCartPopUp(!cartPopUp)}
            style={{ cursor: 'pointer' }}
            ref={link}
          >
            <p
              style={
                cartPopUp
                  ? {
                      borderBottom: '1.3px solid black',
                      paddingBottom: '0.3rem',
                    }
                  : {}
              }
              className="my-cart"
            >
              MY CART
              {cartContext.cartMapArr.length === 0
                ? ''
                : ` (${cartContext.getCartQuantity()})`}
            </p>

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
          <CartPopUp
            ref={node}
            cartPopUp={cartPopUp}
            setCartPopUp={setCartPopUp}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
