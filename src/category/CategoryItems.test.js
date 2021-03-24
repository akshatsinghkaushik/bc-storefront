import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import CategoryItems from './CategoryItems';
import MockCartProvider from '../tests/MockCartProvider';

it('CategoryItems Renders correctly', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <MockCartProvider>
          <CategoryItems />
        </MockCartProvider>
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
