import React from 'react';
import './Product.css';

const Product = ({ match, productMap }) => {
  return (
    <div className="Product">
      <h1>Product {match.params.id}</h1>
      {console.log(productMap.get(match.params.id))}
    </div>
  );
};

export default Product;
