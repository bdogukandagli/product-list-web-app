import React from 'react';
import Box from '../box';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const Checkbox = ({
  isActive,
  setActive,
  fillColor,
  iconWidth,
  iconHeight,
  ...props
}) => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      css={`
        cursor: pointer;
        box-shadow: 0px 1px 7px rgba(93, 56, 192, 0.4);
      `}
      borderRadius="2px"
    >
      <Box display="none" value={isActive} {...props} />
      <Box
        data-testid="checkbox"
        borderRadius="2px"
        onClick={() => setActive()}
        bg={isActive ? fillColor : 'transparent'}
        width={iconWidth}
        height={iconHeight}
      />
    </Box>
  );
};

Checkbox.defaultProps = {
  as: 'input',
  fillColor: 'secondary',
  iconWidth: '22px',
  iconHeight: '22px',
};

Checkbox.propTypes = {
  as: PropTypes.oneOf(['input']),
  iconWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  iconHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ...Checkbox.propTypes,
};

export default Checkbox;
