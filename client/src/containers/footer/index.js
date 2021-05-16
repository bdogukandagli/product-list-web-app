import React from 'react';
import { Box, Text } from '../../components';

const Footer = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      width={1}
      pt={{ _: '', lg: '120px' }}
      pb="40px"
      bg="background"
    >
      <Box>
        <Text variant="subBody" color="secondary">
          ©2019 Market
        </Text>
      </Box>
      <Box mx="16px">
        <Text variant="subBody" color="secondary">
          •
        </Text>
      </Box>
      <Box>
        <Text variant="subBody" color="secondary">
          Privacy Policy
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
