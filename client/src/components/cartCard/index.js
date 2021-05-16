import React from 'react';
import { Box, Text, CartItem } from '../index';
import { quantityActiontypes } from '../../utils/constant';

const CartCard = ({ cartItems, setCartItems, totalPrice }) => {
  const handleQuantity = (product, type) => {
    let items = [...cartItems];
    let item = { ...cartItems.filter((cartItem) => cartItem.name == product.name)[0] };

    if (type == quantityActiontypes.increment) {
      item.quantity = item.quantity + 1;
      items.filter((cartItem) => cartItem.name == product.name)[0].quantity =
        item.quantity;
      setCartItems(items);
    }

    if (type == quantityActiontypes.decrement) {
      if (product.quantity == 1) {
        setCartItems(cartItems.filter((t) => t.name != product.name));
      } else {
        item.quantity = item.quantity - 1;
        items.filter((cartItem) => cartItem.name == product.name)[0].quantity =
          item.quantity;
        setCartItems(items);
      }
    }
  };

  return (
    <Box bg="secondary" width={1} p="8px" borderRadius="2px">
      <Box bg="white" width={1} borderRadius="2px" p="26px 16px 16px 16px">
        {cartItems?.map((item, index) => {
          return (
            <CartItem
              incrementButtonClick={() =>
                handleQuantity(item, quantityActiontypes.increment)
              }
              decrementButtonClick={() =>
                handleQuantity(item, quantityActiontypes.decrement)
              }
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
