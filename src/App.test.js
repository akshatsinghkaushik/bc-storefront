import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import App from './App';
import {
  render,
  fireEvent,
  screen,
  waitFor,
  queryByText,
} from '@testing-library/react';
import MockCartProvider from './tests/MockCartProvider';
import '@testing-library/jest-dom';

it('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <MockCartProvider>
        <App />
      </MockCartProvider>
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('App Renders correctly', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <MockCartProvider>
          <App />
        </MockCartProvider>
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Overlay, Add to Cart, Header, PopUp, Remove from Cart', async () => {
  render(
    <BrowserRouter>
      <MockCartProvider>
        <App />
      </MockCartProvider>
    </BrowserRouter>
  );

  //trigger overlay
  expect(
    screen.getByRole('img', { name: /Blue Stripe Stoneware Plate/ })
  ).toBeInTheDocument();

  fireEvent.mouseEnter(
    screen.getByRole('img', { name: /Blue Stripe Stoneware Plate/ })
  );

  //overlay
  await waitFor(async () => {
    expect(
      screen.getByRole('button', { name: /ADD TO CART/ })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /VIEW DETAILS/ })
    ).toBeInTheDocument();
    expect(screen.getByText('MY CART')).toBeInTheDocument();
  });

  //trigger add to cart
  fireEvent.click(screen.getByRole('button', { name: /ADD TO CART/ }));

  //check cart update in header
  await waitFor(() => {
    const cartButton = screen.getByText(/MY CART/);
    const text = cartButton.innerHTML;
    expect(text).toBe('MY CART (1)');
  });

  //trigger add to cart
  fireEvent.click(screen.getByRole('button', { name: /ADD TO CART/ }));
  const cartButton = screen.getByText(/MY CART/);
  const text = cartButton.innerHTML;
  expect(text).toBe('MY CART (1)');

  //trigger PopUp
  fireEvent.click(screen.getByText(/MY CART/));

  const cartButton1 = screen.getByText(/MY CART/);
  const text1 = cartButton1.innerHTML;
  expect(text1).toBe('MY CART (1)');

  //check for PopUp
  await waitFor(() => {
    const checkoutButton = screen.getByText(/CHECKOUT/);
    expect(checkoutButton).toBeInTheDocument();
  });

  const cartButton12 = screen.getByText(/MY CART/);
  const text12 = cartButton12.innerHTML;
  expect(text12).toBe('MY CART (1)');

  //trigger remove item from car
  fireEvent.click(screen.getByText('X'));

  //check if item removed from cart
  const submitButton = screen.queryByText('submit');
  expect(submitButton).toBeNull();
});
