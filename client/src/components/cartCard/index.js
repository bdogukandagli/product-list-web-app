import React from 'react';
import { Box, Text, CartItem } from '../index';

const CartCard = ({
  cartItems = [
    {
      name: 'Name 1',
      price: '26,99€',
      quantity: 2,
    },
    {
      name: 'Name 2',
      price: '99,99€',
      quantity: 7,
    },
    {
      name: 'Name 3',
      price: '19,99€',
      quantity: 1,
    },
  ],
  totalPrice = '146.97€',
  incrementButtonClick,
  decrementButtonClick,
}) => {
  return (
    <Box bg="secondary" width={1} p="8px" borderRadius="2px">
      <Box bg="white" width={1} borderRadius="2px" p="26px 16px 16px 16px">
        {cartItems.map((item, index) => {
          return (
            <CartItem
              incrementButtonClick={incrementButtonClick}
              decrementButtonClick={decrementButtonClick}
              key={index}
              cartItem={item}
            />
          );
        })}
        <Box display="flex" justifyContent="space-between" width={1}>
          <Box />
          <Box p="17px 24px" border="2px solid #1EA4CE" borderRadius="2px">
            <Text variant="body" color="secondary">
              {totalPrice}
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CartCard;
