import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Category from './category/Category';
import Cart from './cart/Cart';
import Product from './product/Product';
import Header from './header/Header';

const App = () => {
  return (
    <div className="App" alt="abc">
      {/* Header Component */}
      <Header />
      {/* 
            Create Routes for the different Pages of the the Store     
        */}
      {/* Route for the Category page, in this case the Plates Category page also acting as the home page (/) */}
      <Route exact path="/" component={Category} />
      {/* Route for the Cart page (not the pop-up) (/cart) */}
      <Route path="/cart" component={Cart} />
      {/* Route for the Product Details page (/product/:id) */}
      <Route path="/product/:id" component={Product} />
    </div>
  );
};

export default App;
