import { put } from 'redux-saga/effects';
import {
  GET_ALL_PRODUCTS_ERROR,
  GET_FILTERED_PRODUCTS_ERROR,
  GET_ALL_PRODUCT_BRANDS_ERROR,
  GET_ALL_PRODUCTS_START,
  GET_FILTERED_PRODUCTS_START,
  GET_ALL_PRODUCT_BRANDS_START,
} from './types';
import { handleFetchAll, handleFetchBrands, handleFetchFiltered } from './product.sagas';

test('catch GetAllProducts Error', () => {
  const payload = 'Network Error.';
  const gen = handleFetchAll();
  const returnParams = { type: GET_ALL_PRODUCTS_ERROR, payload };
  gen.next();
  expect(gen.throw('Network Error.').value).toEqual(put(returnParams));
});

test('catch GetAllProducts Error', () => {
  const payload = 'Network Error.';
  const gen = handleFetchBrands();
  const returnParams = { type: GET_ALL_PRODUCT_BRANDS_ERROR, payload };
  gen.next();
  expect(gen.throw('Network Error.').value).toEqual(put(returnParams));
});
