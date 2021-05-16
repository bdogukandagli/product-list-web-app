import {
  GET_FILTERED_PRODUCTS_SUCCESS,
  GET_FILTERED_PRODUCTS_START,
  GET_FILTERED_PRODUCTS_ERROR,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_START,
  GET_ALL_PRODUCTS_ERROR,
  GET_ALL_PRODUCT_BRANDS_ERROR,
  GET_ALL_PRODUCT_BRANDS_SUCCESS,
  GET_ALL_PRODUCT_BRANDS_START,
} from './types';

const initialState = {
  products: [],
  filteredProducts: [],
  brands: [],
  isLoading: false,
  error: '',
};

export function productReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS_START:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: [...state.products, ...action.payload],
        isLoading: false,
      };
    case GET_ALL_PRODUCTS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case GET_FILTERED_PRODUCTS_START:
      return {
        ...state,
        isLoading: true,
      };
    case GET_FILTERED_PRODUCTS_SUCCESS:
      return {
        ...state,
        filteredProducts: [...action.payload],
        isLoading: false,
      };
    case GET_FILTERED_PRODUCTS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case GET_ALL_PRODUCT_BRANDS_START:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ALL_PRODUCT_BRANDS_SUCCESS:
      return {
        ...state,
        brands: [...state.brands, ...action.payload],
        isLoading: false,
      };
    case GET_ALL_PRODUCT_BRANDS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
