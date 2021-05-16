import React from 'react';
import { render } from '@testing-library/react';

import { CartCard } from '../index';

test('render component without crash', () => {
  render(
    <CartCard
      cartItems={[
        {
          name: 'Name 1',
          price: '26,99€',
          quantity: 2,
        },
        {
          name: 'Name 1',
          price: '26,99€',
          quantity: 2,
        },
      ]}
    />
  );
});
