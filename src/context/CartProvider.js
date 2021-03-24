import React, { useState, useEffect } from 'react';
import CartContext from './CartContext';
import { getProducts } from '../services/getProducts';

const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productMap, setProductMap] = useState(new Map());
  const [cartMap, setCartMap] = useState(new Map());
  const [cartMapArr, setCartMapArr] = useState(Array.from(cartMap.values()));

  //    Load products.json on first App render and store it in App level state varibale products
  useEffect(() => {
    getProducts().then((result) => {
      setProducts(result);
      const tempMap = new Map(result.map((i) => [i.title, i]));
      setProductMap(tempMap);
    });
  }, []);

  return (
    <CartContext.Provider
      value={{
        products: products,
        cartMap: cartMap,
        cartMapArr: cartMapArr,
        addItemToCart: (item, amount) => {
          let map = cartMap;

          if (cartMap.has(item.title)) {
            const mapItem = cartMap.get(item.title);
            if (mapItem.quantity && amount)
              map.set(item.title, {
                ...item,
                quantity: mapItem.quantity + amount,
              });
            else
              map.set(item.title, {
                ...item,
                quantity: mapItem.quantity,
              });
          } else if (amount) {
            map.set(item.title, {
              ...item,
              quantity: amount,
            });
          } else {
            map.set(item.title, {
              ...item,
              quantity: 1,
            });
          }
          setCartMap(map);
          setCartMapArr(Array.from(map.values()));
        },
        getProduct: (id) => {
          return productMap.get(id);
        },
        deleteCartItem: (item) => {
          let map = cartMap;
          map.delete(item.title);
          setCartMap(map);
          setCartMapArr(Array.from(map.values()));
        },
        updateCartItemQuantity: (item, plusminus) => {
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
          setCartMapArr(Array.from(map.values()));
        },
        getCartTotal: () => {
          let total = 0.0;
          cartMapArr.map((item) => (total += item.price * item.quantity));
          return total;
        },
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
