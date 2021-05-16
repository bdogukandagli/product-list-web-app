import React from 'react';
import { Box, Text } from '../index';
import styled from 'styled-components/macro';

const StyledRadioButton = styled.input`
  background: #ffffff;
  border: 2px solid gray;
  box-sizing: border-box;
  border-radius: 17.5px;
  height: 22px;
  width: 22px;

  :checked:before {
    border: 2px solid red;
  }
`;

const RadioCard = ({ selectedSort = 1, cardTitle, options = [1, 2, 3, 4] }) => {
  return (
    <Box>
      <Box textAlign="left">
        <Text variant="subBody" color="gray">
          {cardTitle}
        </Text>
      </Box>
      <Box
        pt={{ _: '', lg: '6px' }}
        pb="24px"
        bg="white"
        css={`
          box-shadow: 0px 6px 24px rgba(93, 62, 188, 0.04);
        `}
      >
        <Box
          maxHeight="184px"
          css={`
            overflow-x: hidden;
            overflow-y: scroll;
          `}
        >
          {options.map((option, index) => {
            return (
              <Box
                ml="24px"
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="left"
                width={1}
                mt="15px"
                key={index}
              >
                <Box mr="8px">
                  <StyledRadioButton checked={option == selectedSort} type="radio" />
                </Box>
                <Box>
                  <Text variant="lightBody" color="dark">
                    {option}
                  </Text>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default RadioCard;
