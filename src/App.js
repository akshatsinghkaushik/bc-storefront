import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Category from './category/Category';
import Cart from './cart/Cart';
import Product from './product/Product';
import Header from './header/Header';

const App = () => {
  const [products, setProducts] = useState([]);

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
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

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
        render={(props) => <Cart {...props} products={products} />}
      />
      {/* Route for the Product Details page (/product/:id) */}
      <Route
        path="/product/:id"
        render={(props) => <Product {...props} products={products} />}
      />
    </div>
  );
};

export default App;
