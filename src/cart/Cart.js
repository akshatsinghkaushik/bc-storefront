import React, { useEffect, useState } from 'react';
import { Link, Route } from 'react-router-dom';
import './Cart.css';

const Cart = ({ containsColor, updateCartMap, parentCartMap }) => {
  const [cartMap, setCartMap] = useState(parentCartMap);
  const [cartArr, setCartArr] = useState(Array.from(cartMap.values()));

  const deleteCartItem = (item) => {
    let map = cartMap;
    map.delete(item.title);
    setCartMap(map);
    setCartArr(Array.from(map.values()));
    updateCartMap(map);
  };

  const updateCartItemQuantity = (item, plusminus) => {
    let map = cartMap;
    const mapItem = cartMap.get(item.title);
    if (mapItem) {
      if (plusminus == '+') {
        map.set(item.title, {
          ...item,
          quantity: mapItem.quantity + 1,
        });
      } else if (plusminus == '-') {
        if (mapItem.quantity - 1 == 0) {
          map.delete(item.title);
        } else {
          map.set(item.title, {
            ...item,
            quantity: mapItem.quantity - 1,
          });
        }
      }
    }
    setCartMap(map);
    setCartArr(Array.from(map.values()));
    updateCartMap(map);
  };

  const getCartTotal = () => {
    let total = 0.0;
    cartArr.map((item) => (total += item.price * item.quantity));
    return total;
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
          {cartArr &&
            cartArr.map((item, index) => (
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
                          onClick={() => updateCartItemQuantity(item, '+')}
                        >
                          +
                        </button>
                        <button
                          onClick={() => updateCartItemQuantity(item, '-')}
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
                      onClick={() => deleteCartItem(item)}
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
                <div>$ {Number(getCartTotal()).toFixed(2)}</div>
                <div>${Number(getCartTotal()).toFixed(2)} CAD</div>
              </div>
            </div>
          </div>
        </div>
        <hr style={{ height: '1px', width: '100%', margin: '0' }} />
        <div className="cart-overview">
          <Link to={'/'}>Continue Shopping</Link>
          <button className="cart-footer-button">
            CHECKOUT (${Number(getCartTotal()).toFixed(2)})
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
