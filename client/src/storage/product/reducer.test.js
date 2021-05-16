import { productReducer } from './reducer';
import {
  GET_ALL_PRODUCTS_ERROR,
  GET_ALL_PRODUCT_BRANDS_ERROR,
  GET_FILTERED_PRODUCTS_ERROR,
} from './types';

test('should handle GET_ALL_PRODUCTS_ERROR', () => {
  const errorAction = { type: GET_ALL_PRODUCTS_ERROR, payload: 'Error' };
  expect(productReducer({}, errorAction)).toEqual({
    isLoading: false,
    error: 'Error',
  });
});

test('should handle GET_ALL_PRODUCT_BRANDS_ERROR', () => {
  const errorAction = { type: GET_ALL_PRODUCT_BRANDS_ERROR, payload: 'Error' };
  expect(productReducer({}, errorAction)).toEqual({
    isLoading: false,
    error: 'Error',
  });
});

test('should handle GET_FILTERED_PRODUCTS_ERROR', () => {
  const errorAction = { type: GET_FILTERED_PRODUCTS_ERROR, payload: 'Error' };
  expect(productReducer({}, errorAction)).toEqual({
    isLoading: false,
    error: 'Error',
  });
});
