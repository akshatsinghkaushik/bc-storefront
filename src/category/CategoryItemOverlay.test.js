import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import CategoryItemOverlay from './CategoryItemOverlay';
import MockCartProvider from '../tests/MockCartProvider';

it('CategoryItemOverlay Renders correctly', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <MockCartProvider>
          <CategoryItemOverlay
            hover={true}
            item={{
              title: 'Mashiko-Yaki Saucer',
              brand: 'Kiriko',
              price: 18,
              description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.',
              image: 'mashiko-yaki-saucer.jpg',
            }}
          />
        </MockCartProvider>
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
