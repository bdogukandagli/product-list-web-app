import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Header } from '../index';

test('render component without crash', () => {
  render(<Header totalPrice={'25'} />);
});

test('onClick functionality', () => {
  const onClick = jest.fn();

  render(<Header totalPrice="25" isCartActive={true} setCartActive={onClick} />);

  const cartButton = screen.getByTestId('cartIcon');

  userEvent.click(cartButton);

  expect(onClick).toBeCalledTimes(1);
});
