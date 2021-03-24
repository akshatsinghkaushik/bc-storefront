import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import CartFooter from './CartFooter';
import MockCartProvider from '../tests/MockCartProvider';

it('CartFooter Renders correctly', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <MockCartProvider>
          <CartFooter />
        </MockCartProvider>
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
