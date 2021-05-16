import React from 'react';
import { Box, Text } from '../index';

const Tag = ({ isSelected, onClick, name = 'Tag' }) => {
  return (
    <Box
      p="6px 16px"
      bg={isSelected ? 'secondary' : 'lightBackground'}
      onClick={() => onClick()}
      mr="8px"
      borderRadius="2px"
      maxWidth="60px"
      height="30px"
      data-testid="tagButton"
    >
      <Text variant="subBody" color={isSelected ? 'white' : 'secondary'}>
        {name}
      </Text>
    </Box>
  );
};

export default Tag;
