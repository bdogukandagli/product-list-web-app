import React from 'react';
import { Box, Text } from '../index';
import styled from 'styled-components/macro';

const CartItem = ({ cartItem, incrementButtonClick, decrementButtonClick }) => {
  return (
    <Box>
      <Box display="flex" width={1} justifyContent="space-between" alignItems="center">
        <Box textAlign="left" width={1}>
          <Box>
            <Text variant="lightBody" color="primary">
              {cartItem.name}
            </Text>
          </Box>
          <Box mt="4px">
            <Text variant="lightBody" color="secondary">
              {cartItem.price}
            </Text>
          </Box>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Box
            data-testid="decrementButton"
            onClick={() => decrementButtonClick()}
            css={`
              cursor: pointer;
            `}
          >
            <Text color="secondary" variant="subTitle">
              &#45;
            </Text>
          </Box>
          <Box
            mx="11px"
            p="6px 10px 4px 10px"
            bg="secondary"
            css={`
              cursor: default;
            `}
          >
            <Text color="white" variant="subTitle">
              {cartItem.quantity}
            </Text>
          </Box>
          <Box
            data-testid="incrementButton"
            onClick={() => incrementButtonClick()}
            css={`
              cursor: pointer;
            `}
          >
            <Text color="secondary" variant="subTitle">
              &#43;
            </Text>
          </Box>
        </Box>
      </Box>
      <Box mt="18px" mb="16px" bg="lightGray" height="1px" width={1} />
    </Box>
  );
};

export default CartItem;
