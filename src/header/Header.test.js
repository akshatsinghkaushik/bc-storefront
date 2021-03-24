import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import MockCartProvider from '../tests/MockCartProvider';

it('Header Renders correctly', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <MockCartProvider>
          <Header />
        </MockCartProvider>
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
