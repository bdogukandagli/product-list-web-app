import React from 'react';
import { Box, Tag } from '../index';

const TagGroup = ({ tagList, onClick }) => {
  return (
    <Box display="flex" width={1}>
      {tagList.map((tag, index) => {
        return (
          <Tag
            key={index}
            onClick={() => onClick()}
            isSelected={index % 2 == 0}
            name={tag}
          />
        );
      })}
    </Box>
  );
};

export default TagGroup;
