import React, { useState } from 'react';
import { Box, Text, Checkbox } from '../index';
import styled from 'styled-components/macro';

const StyledInput = styled.input`
  border: 2px solid #e0e0e0;
  border-radius: 2px;
  height: 48px;
  width: 100%;

  ::placeholder {
    color: #a8a8a8;
    font-size: 14px;
    line-height: 24px;
  }
`;

const CheckboxCard = ({ cardTitle, options, selectedFilters, setSelectedFilters }) => {
  const [searchText, setSearchText] = useState('');
  const handleFilters = (text) => {
    if (selectedFilters.includes(text)) {
      setSelectedFilters(selectedFilters.filter((t) => t != text));
    } else {
      setSelectedFilters(selectedFilters.concat([text]));
    }
  };

  return (
    <Box>
      <Box textAlign="left">
        <Text variant="subBody" color="gray">
          {cardTitle}
        </Text>
      </Box>
      <Box
        mt="12px"
        py={{ _: '', lg: '24px' }}
        bg="white"
        css={`
          box-shadow: 0px 6px 24px rgba(93, 62, 188, 0.04);
        `}
      >
        <Box ml="24px" maxWidth="248px">
          <StyledInput
            data-testid="search-input"
            onChange={(e) => setSearchText(e.target.value)}
            placeholder={`Search ${cardTitle}`}
          />
        </Box>
        <Box
          maxHeight="142px"
          mr="24px"
          css={`
            overflow-x: hidden;
            overflow-y: scroll;
          `}
        >
          {options
            ?.filter((item) => item.includes(searchText))
            .map((option, index) => {
              return (
                <Box
                  ml="24px"
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="left"
                  width={1}
                  mt="18px"
                  key={index}
                >
                  <Box mr="8px">
                    <Checkbox
                      data-testid="checkbox-wrapper"
                      isActive={selectedFilters?.includes(option)}
                      setActive={() => handleFilters(option)}
                    />
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

export default CheckboxCard;
