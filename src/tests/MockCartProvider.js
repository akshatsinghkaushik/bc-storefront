import React, { useState, useEffect } from 'react';
import CartContext from '../context/CartContext';

const MockCartProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      title: 'Blue Stripe Stoneware Plate',
      brand: 'Kiriko',
      price: 40,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.',
      image: 'blue-stripe-stoneware-plate.jpg',
    },
    {
      title: 'Hand Painted Blue Flat Dish',
      brand: 'Kiriko',
      price: 28,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget arcu. Curabitur ac pharetra nisl, sit amet mattis dolor.',
      image: 'hand-painted-blue-flat-dish.jpg',
    },
    {
      title: 'Heme',
      brand: 'Dust & Form',
      price: 52,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget arcu. Curabitur ac pharetra nisl, sit amet mattis dolor.',
      image: 'heme.jpg',
    },
    {
      title: 'Mashiko-Yaki Green Small Plate',
      brand: 'Kiriko',
      price: 28,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.',
      image: 'mashiko-yaki-green-small-plate.jpg',
    },
    {
      title: 'Mashiko-Yaki Indigo Small Plate',
      brand: 'Kiriko',
      price: 28,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.',
      image: 'mashiko-yaki-indigo-small-plate.jpg',
    },
    {
      title: 'Mashiko-Yaki Saucer',
      brand: 'Kiriko',
      price: 18,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.',
      image: 'mashiko-yaki-saucer.jpg',
    },
  ]);
  const tempMap = new Map(products.map((i) => [i.title, i]));
  const [productMap, setProductMap] = useState(tempMap);
  const [cartMap, setCartMap] = useState(new Map());
  const [cartMapArr, setCartMapArr] = useState(Array.from(cartMap.values()));

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
        getCartQuantity: () => {
          let total = 0;
          cartMapArr.map((item) => (total += item.quantity));
          return total;
        },
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default MockCartProvider;
