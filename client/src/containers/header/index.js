import React from 'react';
import { Box, Text } from '../../components';

const Header = ({ totalPrice, isCartActive, setCartActive }) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      px={{ _: '16px', lg: '104px' }}
      bg="secondary"
      minHeight={{ _: '', lg: '76px' }}
    >
      <Box />
      <Box pt="17px">
        <Text variant="title" color="white">
          Market
        </Text>
      </Box>
      <Box
        data-testid="cartIcon"
        bg="secondaryDark"
        p="29px 24px"
        onClick={() => setCartActive(!isCartActive)}
      >
        <Text color="white">Ico &nbsp;</Text>
        <Text variant="body" color="white">
          {totalPrice}
        </Text>
      </Box>
    </Box>
  );
};

export default Header;
