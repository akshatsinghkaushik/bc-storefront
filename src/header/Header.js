import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
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
            Store
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
          </Link>
        </div>
        <div className="cart-icon">
          <Link to="/cart" style={{ textDecoration: 'none', color: 'black' }}>
            My Cart
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
