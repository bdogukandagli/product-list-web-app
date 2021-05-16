import styled from 'styled-components';
import {
  space,
  layout,
  color,
  typography,
  flexbox,
  position,
  borderRadius,
  border,
  compose,
} from 'styled-system';

const Box = styled.div`
  box-sizing: border-box;
  ${compose(space, layout, color, typography, flexbox, border, borderRadius, position)}
`;

export default Box;
