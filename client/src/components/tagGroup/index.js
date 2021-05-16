import React from 'react';
import { Box, Tag } from '../index';

const TagGroup = ({ tagList, selectedTags, setSelectedTags }) => {
  const handleTags = (text) => {
    if (selectedTags.includes(text)) {
      setSelectedTags(selectedTags.filter((t) => t != text));
    } else {
      setSelectedTags(selectedTags.concat([text]));
    }
  };

  return (
    <Box display="flex" width={1}>
      {tagList?.map((tag, index) => {
        return (
          <Tag
            key={index}
            onClick={() => handleTags(tag)}
            isSelected={selectedTags.includes(tag)}
            name={tag}
          />
        );
      })}
    </Box>
  );
};

export default TagGroup;
