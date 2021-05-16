import {
  GET_ALL_PRODUCTS_ERROR,
  GET_ALL_PRODUCTS_START,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_FILTERED_PRODUCTS_ERROR,
  GET_FILTERED_PRODUCTS_START,
  GET_FILTERED_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCT_BRANDS_ERROR,
  GET_ALL_PRODUCT_BRANDS_START,
  GET_ALL_PRODUCT_BRANDS_SUCCESS,
} from './types';

export function getAllProductsStart() {
  return {
    type: GET_ALL_PRODUCTS_START,
  };
}

export function getAllProductsSuccess(products) {
  return {
    type: GET_ALL_PRODUCTS_SUCCESS,
    payload: products,
  };
}

export function getAllProductsError(error) {
  return {
    type: GET_ALL_PRODUCTS_ERROR,
    payload: error,
  };
}

export function getFilteredProductsStart(brand, tag, itemType, sortType, pageNumber) {
  return {
    type: GET_FILTERED_PRODUCTS_START,
    payload: {
      brand: brand,
      tag: tag,
      itemType: itemType,
      sortType: sortType,
      pageNumber: pageNumber,
    },
  };
}

export function getFilteredProductsSuccess(filteredProducts) {
  return {
    type: GET_FILTERED_PRODUCTS_SUCCESS,
    payload: filteredProducts,
  };
}

export function getFilteredProductsError(error) {
  return {
    type: GET_FILTERED_PRODUCTS_ERROR,
    payload: error,
  };
}

export function getAllProductBrandsStart() {
  return {
    type: GET_ALL_PRODUCT_BRANDS_START,
  };
}

export function getAllProductBrandsSuccess(brands) {
  return {
    type: GET_ALL_PRODUCT_BRANDS_SUCCESS,
    payload: brands,
  };
}

export function getAllProductBrandsError(error) {
  return {
    type: GET_ALL_PRODUCT_BRANDS_ERROR,
    payload: error,
  };
}
