import { all, fork, put, takeLatest, throttle, call } from 'redux-saga/effects';
import {
  GET_ALL_PRODUCTS_START,
  GET_FILTERED_PRODUCTS_START,
  GET_ALL_PRODUCT_BRANDS_START,
} from './types';
import {
  getAllProductsSuccess,
  getAllProductsError,
  getFilteredProductsSuccess,
  getFilteredProductsError,
  getAllProductBrandsSuccess,
  getAllProductBrandsError,
} from './action';
import constant from '../../utils/constant';

export function* handleFetchAll() {
  try {
    const result = yield call(() =>
      fetch('http://localhost:3006/items')
        .then((response) => response.json())
        .then((response) => {
          return response;
        })
    );

    yield put(getAllProductsSuccess(result));
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield put(getAllProductsError(err.stack));
    } else {
      yield put(getAllProductsError('Network Error.'));
    }
  }
}

function* watchGetAllRequest() {
  yield takeLatest(GET_ALL_PRODUCTS_START, handleFetchAll);
}

export function* handleFetchFiltered(action) {
  try {
    const brand = action.payload.brand;
    const tag = action.payload.tag;
    const itemType = action.payload.itemType;
    const sortType = action.payload.sortType;

    const result = yield call(() =>
      fetch('http://localhost:3006/items')
        .then((response) => response.json())
        .then((response) => {
          return response;
        })
    );

    let filteredResult = result;

    if (brand.length > 0) {
      filteredResult = result.filter(function (item) {
        return brand.indexOf(item.manufacturer) !== -1;
      });
    }

    if (tag.length > 0) {
      filteredResult = filteredResult.filter(function (item) {
        return item.tags.some((r) => tag.indexOf(r) >= 0);
      });
    }

    if (itemType.length > 0) {
      filteredResult = filteredResult.filter(function (item) {
        return itemType.indexOf(item.itemType) !== -1;
      });
    }
    switch (sortType) {
      case constant.sortTypes.priceLowtoHigh:
        filteredResult.sort(function (a, b) {
          return a.price - b.price;
        });
        break;
      case constant.sortTypes.priceHightoLow:
        filteredResult = filteredResult.sort(function (a, b) {
          return b.price - a.price;
        });
        break;
      case constant.sortTypes.newtoOld:
        filteredResult = filteredResult.sort(function (a, b) {
          return b.added - a.added;
        });
        break;
      case constant.sortTypes.oldtoNew:
        filteredResult = filteredResult.sort(function (a, b) {
          return a.added - b.added;
        });
        break;
      default:
        break;
    }

    yield put(getFilteredProductsSuccess(filteredResult));
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield put(getFilteredProductsError(err.stack));
    } else {
      yield put(getFilteredProductsError('Network Error.'));
    }
  }
}

function* watchGetFilteredRequest() {
  yield throttle(500, GET_FILTERED_PRODUCTS_START, handleFetchFiltered);
}

export function* handleFetchBrands() {
  try {
    const result = yield call(() =>
      fetch('http://localhost:3006/companies')
        .then((response) => response.json())
        .then((response) => {
          return response;
        })
    );

    yield put(getAllProductBrandsSuccess(result));
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield put(getAllProductBrandsError(err.stack));
    } else {
      yield put(getAllProductBrandsError('Network Error.'));
    }
  }
}

function* watchFetchBrands() {
  yield takeLatest(GET_ALL_PRODUCT_BRANDS_START, handleFetchBrands);
}

function* productSaga() {
  yield all([
    fork(watchGetAllRequest),
    fork(watchGetFilteredRequest),
    fork(watchFetchBrands),
  ]);
}

export default productSaga;
