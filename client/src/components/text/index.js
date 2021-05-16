import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { compose, variant } from 'styled-system';
import Box from '../box';

const textTypes = variant({
  scale: 'texts',
  variants: {
    title: {
      fontSize: '20px',
      lineHeight: '26px',
      letterSpacing: '0.25px',
      fontWeight: 'normal',
    },
    body: {
      fontSize: '14px',
      lineHeight: '18px',
      letterSpacing: '0.16px',
      fontWeight: '600',
    },
    lightBody: {
      fontSize: '14px',
      lineHeight: '18px',
      letterSpacing: '0.16px',
      fontWeight: '400',
    },
    subBody: {
      fontSize: '13px',
      lineHeight: '18px',
      letterSpacing: '0.16px',
      fontWeight: '600',
    },
    subTitle: {
      fontSize: '15px',
      lineHeight: '20px',
      letterSpacing: '0.16px',
      fontWeight: '700',
    },
    boldBody: {
      fontSize: '14px',
      lineHeight: '20px',
      letterSpacing: '0.16px',
      fontWeight: '700',
    },
  },
});

const TextVariant = styled(Box)`
  ${compose(textTypes)}
`;

const TextComponent = ({ variant, ref, ...props }) => (
  <TextVariant variant={variant} ref={ref} {...props}>
    {props.children}
  </TextVariant>
);

const Text = React.forwardRef((props, ref) => <TextComponent ref={ref} {...props} />);

Text.defaultProps = {
  variant: 'body',
  fontSize: 'normal',
  fontFamily: 'inherit',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
};

Text.propTypes = {
  variant: propTypes.oneOf([
    'title',
    'body',
    'lightBody',
    'subBody',
    'subTitle',
    'boldBody',
  ]),
  ...Text.propTypes,
};

export default Text;
