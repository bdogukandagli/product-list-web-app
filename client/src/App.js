import React, { useState, useEffect } from 'react';
import { Box } from './components';
import { ProductList, Header, Footer } from './containers';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {
  getAllProductsStart,
  getAllProductBrandsStart,
  getFilteredProductsStart,
} from './storage/product/action';

const App = () => {
  const productList = useSelector((storage) => storage.products, shallowEqual);
  const brandList = useSelector((storage) => storage.brands, shallowEqual);
  const dispatch = useDispatch();

  const sortTypes = [
    {
      name: 'Price low to high',
      value: 0,
    },
    {
      name: 'Price high to low',
      value: 1,
    },
    {
      name: 'New to old',
      value: 2,
    },
    {
      name: 'Old to new',
      value: 3,
    },
  ];
  const [products, setProducts] = useState(productList.products);
  const [productBrands, setProductBrands] = useState([]);
  const [selectedProductBrands, setSelectedProductBrands] = useState([]);
  const [productTags, setProductTags] = useState([]);
  const [selectedProductTags, setSelectedProductTags] = useState([]);
  const [itemTypes, setItemTypes] = useState([]);
  const [selectedItemTypes, setSelectedItemTypes] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartActive, setCartActive] = useState(true);
  const [selectedSort, setSelectedSort] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPageCount, setTotalPageCount] = useState();

  useEffect(() => {
    dispatch(getAllProductsStart());
    dispatch(getAllProductBrandsStart());
  }, []);

  useEffect(() => {
    if (productList?.brands.length > 0) {
      setProductBrands(
        productList.brands.map((brand) => {
          return brand.slug;
        })
      );
    }
  }, [productList.brands]);

  useEffect(() => {
    if (productList?.products.length > 0) {
      let initialTags = [];
      let initialItemTypes = [];
      productList.products.map((product) => {
        if (!initialItemTypes.includes(product.itemType)) {
          initialItemTypes.push(product.itemType);
        }

        product.tags?.map((tag) => {
          if (!initialTags.includes(tag)) {
            initialTags.push(tag);
          }
        });
      });
      setProductTags(initialTags);
      setItemTypes(initialItemTypes);
      setTotalPageCount(productList.products.length / 16);
      setProducts(productList.products.slice(0, 16));
    }
  }, [productList.products]);

  useEffect(() => {
    if (
      selectedProductBrands ||
      selectedProductTags ||
      selectedItemTypes ||
      selectedSort ||
      pageNumber
    ) {
      dispatch(
        getFilteredProductsStart(
          selectedProductBrands,
          selectedProductTags,
          selectedItemTypes,
          selectedSort,
          pageNumber
        )
      );
    }
  }, [
    selectedProductBrands,
    selectedProductTags,
    selectedItemTypes,
    selectedSort,
    pageNumber,
  ]);

  useEffect(() => {
    if (productList.filteredProducts.length > 0) {
      setProducts(
        productList.filteredProducts.slice((pageNumber - 1) * 16, 16 * pageNumber)
      );
      setTotalPageCount(productList.filteredProducts.length / 16);
    }
  }, [productList.filteredProducts]);

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    const currencySymbol = '₺';

    cart.map((item) => {
      totalPrice += item.price * item.quantity;
    });

    return `${currencySymbol}${totalPrice.toFixed(2)}`;
  };

  return (
    <Box>
      <Header
        totalPrice={calculateTotalPrice()}
        isCartActive={isCartActive}
        setCartActive={setCartActive}
      />
      <ProductList
        products={products}
        productBrands={productBrands}
        productTags={productTags}
        selectedProductBrands={selectedProductBrands}
        setSelectedProductBrands={setSelectedProductBrands}
        selectedProductTags={selectedProductTags}
        setSelectedProductTags={setSelectedProductTags}
        itemTypes={itemTypes}
        selectedItemTypes={selectedItemTypes}
        setSelectedItemTypes={setSelectedItemTypes}
        cart={cart}
        setCart={setCart}
        totalPrice={calculateTotalPrice()}
        isCartActive={isCartActive}
        sortTypes={sortTypes}
        selectedSort={selectedSort}
        setSelectedSort={setSelectedSort}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        totalPageNumber={totalPageCount}
      />
      <Footer />
    </Box>
  );
};

export default App;
