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
          <Link className="header-link" to="/">
            Home
          </Link>
          <Link className="header-link" to="/">
            Store
          </Link>
          <Link className="header-link" to="/">
            Journal
          </Link>
          <Link className="header-link" to="/">
            More
          </Link>
        </div>
        <div className="cart-icon">
          <Link to="/cart">My Cart</Link>
        </div>
      </header>
    </>
  );
};

export default Header;
