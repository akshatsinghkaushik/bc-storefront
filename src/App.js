import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Category from './category/Category';
import Cart from './cart/Cart';
import Product from './product/Product';
import Header from './header/Header';

const App = () => {
  const [products, setProducts] = useState([]);
  const [productMap, setProductMap] = useState([]);
  const [cartMap, setCartMap] = useState(new Map());

  //    Load products.json on first App render and store it in App level state varibale products
  useEffect(() => {
    fetch('products.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('HTTP error ' + response.status);
        }
        return response.json();
      })
      .then((json) => {
        setProducts(json);

        const tempMap = new Map(json.map((i) => [i.title, i]));
        setProductMap(tempMap);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const getCartItems = () => {};

  const getProduct = (id) => {
    return productMap.get(id);
  };

  const containsColor = (text) => {
    const colors = [
      'Blue',
      'Green',
      'Indigo',
      'Violet',
      'Yellow',
      'Orange',
      'Red',
    ];

    for (let i in colors) {
      if (text.includes(colors[i])) {
        return colors[i];
      }
    }

    return false;
  };

  return (
    <div className="App">
      {/* Header Component */}
      <Header />
      {/* 
            Create Routes for the different Pages of the the Store
                Passing down the React Components for each Page using 'render' instead of 'component' 
                so that the app level state variables be passed down as a props     
      */}
      {/* Route for the Category page, in this case the Plates CAtegory page also acting as the home page (/) */}
      <Route
        exact
        path="/"
        render={(props) => <Category {...props} products={products} />}
      />
      {/* Route for the Cart page (not the pop-up) (/cart) */}
      <Route
        path="/cart"
        render={(props) => (
          <Cart
            {...props}
            cartMap={cartMap}
            setCartMap={setCartMap}
            products={products}
            containsColor={containsColor}
          />
        )}
      />
      {/* Route for the Product Details page (/product/:id) */}
      <Route
        path="/product/:id"
        render={(props) => (
          <Product
            {...props}
            products={products}
            getProduct={getProduct}
            cartMap={cartMap}
            setCartMap={setCartMap}
          />
        )}
      />
    </div>
  );
};

export default App;
