import React from 'react';
import { render } from '@testing-library/react';

import { Box } from '../index';

test('render component without crash', () => {
  render(<Box />);
});
