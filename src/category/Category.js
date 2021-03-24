import React, { useEffect, useState } from 'react';
import './Category.css';
import CategoryItems from './CategoryItems';

const Category = () => {
  return (
    <>
      <div className="Category">
        <div className="category-header">
          <img
            className="category-header-image"
            src="/media/plates-header.jpg"
            alt="image"
          />

          <header className="category-header-heading">
            <h1>Plates</h1>
            <hr className="divider" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse quis mauris velit. Maecenas faucibus nec enim
              tincidunt vestibulum. Pellentesque auctor diam sed nibh venenatis
              blandit.
            </p>
          </header>
        </div>
        <CategoryItems />
      </div>
    </>
  );
};

export default Category;
