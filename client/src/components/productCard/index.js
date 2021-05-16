import React from 'react';
import { Box, Text } from '../index';
import styled from 'styled-components/macro';

const ProductCard = ({ addButtonClick, product }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      position="relative"
      width={1}
      maxWidth="124px"
      height="225px"
    >
      <Box border="1px solid #F3F0FE" p="16px" borderRadius="12px">
        <img src="https://via.placeholder.com/92?text=Product" />
      </Box>
      <Box mt="8px">
        <Text variant="boldBody" color="secondary">
          {product?.price}
        </Text>
      </Box>
      <Box textAlign="left">
        <Text variant="body" color="primary">
          {product?.name}
        </Text>
      </Box>
      <Box
        css={`
          cursor: pointer;
        `}
        data-testid="addButton"
        mt="8px"
        bg="secondary"
        p="1px 50px"
        borderRadius="2px"
        position="absolute"
        bottom="0px"
        onClick={() => addButtonClick()}
      >
        <Text variant="subBody" color="white">
          Add
        </Text>
      </Box>
    </Box>
  );
};

export default ProductCard;
