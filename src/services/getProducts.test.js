import json from '../../public/products.json';
import { getProducts } from './getProducts';

test('test getProducts service', () => {
  getProducts().then((result) => {
    expect(result).toBe(json);
  });
});
