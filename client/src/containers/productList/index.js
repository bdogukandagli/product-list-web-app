import React from 'react';
import {
  Box,
  Text,
  CheckboxCard,
  CartCard,
  TagGroup,
  ProductCard,
  RadioCard,
  Pagination,
} from '../../components';
import styled from 'styled-components/macro';

const ProductList = ({
  productBrands,
  productTags,
  itemTypes,
  products,
  cart,
  setCart,
  selectedProductBrands,
  setSelectedProductBrands,
  selectedProductTags,
  setSelectedProductTags,
  totalPrice,
  isCartActive,
  sortTypes,
  selectedSort,
  setSelectedSort,
  selectedItemTypes,
  setSelectedItemTypes,
  pageNumber,
  setPageNumber,
  totalPageNumber,
}) => {
  const addToCart = (product) => {
    let productItem = { ...product, quantity: 1 };
    if (cart?.find((cartItem) => cartItem.name == product.name)) {
      let items = [...cart];
      let item = { ...cart.filter((cartItem) => cartItem.name == product.name)[0] };
      item.quantity = item.quantity + 1;
      items.filter((cartItem) => cartItem.name == product.name)[0].quantity =
        item.quantity;
      setCart(items);
    } else {
      setCart(cart?.concat(productItem));
    }
  };

  return (
    <Box
      display="flex"
      flexDirection={{ _: 'column-reverse', lg: 'row' }}
      justifyContent="center"
      bg="background"
      width={1}
      p={{ _: '', lg: '38px 104px' }}
    >
      <Box width={{ _: 1, lg: 1 / 4 }}>
        <Box>
          <RadioCard
            cardTitle="Sorting"
            options={sortTypes}
            selectedFilter={selectedSort}
            setSelectedFilter={setSelectedSort}
          />
        </Box>
        <Box my="24px">
          <CheckboxCard
            cardTitle="Brands"
            options={productBrands}
            selectedFilters={selectedProductBrands}
            setSelectedFilters={setSelectedProductBrands}
          />
        </Box>
        <Box>
          <CheckboxCard
            options={productTags}
            selectedFilters={selectedProductTags}
            setSelectedFilters={setSelectedProductTags}
            cardTitle="Tags"
          />
        </Box>
      </Box>
      <Box width={{ _: 1, lg: 1 / 2 }} mx={{ _: '', lg: '16px' }}>
        <Box textAlign="left">
          <Text variant="title" color="darkGray">
            Products
          </Text>
        </Box>
        <Box my="16px">
          <TagGroup
            selectedTags={selectedItemTypes}
            setSelectedTags={setSelectedItemTypes}
            tagList={itemTypes}
          />
        </Box>
        <Box
          display="flex"
          flexWrap="wrap"
          width={1}
          bg="white"
          css={`
            box-shadow: 0px 4px 24px rgba(93, 62, 188, 0.04);
          `}
          borderRadius="2px"
          px="4px"
          pb="20px"
        >
          {products.map((product, index) => {
            return (
              <Box mx="12px" mt="20px" key={index}>
                <ProductCard
                  product={product}
                  addButtonClick={() => addToCart(product)}
                />
              </Box>
            );
          })}
        </Box>
        <Box>
          <Pagination
            totalPageCount={totalPageNumber}
            currentPage={pageNumber - 1}
            setPageNumber={setPageNumber}
          />
        </Box>
      </Box>
      <Box width={{ _: 1, lg: 1 / 4 }}>
        {isCartActive && (
          <CartCard cartItems={cart} setCartItems={setCart} totalPrice={totalPrice} />
        )}
      </Box>
    </Box>
  );
};

export default ProductList;
