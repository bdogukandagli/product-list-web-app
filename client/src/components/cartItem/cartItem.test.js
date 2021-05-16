import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CartItem } from '../index';

test('render component without crash', () => {
  render(
    <CartItem
      cartItem={{
        name: 'Name 1',
        price: '26,99€',
        quantity: 2,
      }}
    />
  );
});

test('incrementButton functionality', () => {
  const incrementButton = jest.fn();

  render(
    <CartItem
      cartItem={{
        name: 'Name 1',
        price: '26,99€',
        quantity: 2,
      }}
      incrementButtonClick={incrementButton}
    />
  );

  const incrementButtonClick = screen.getByTestId('incrementButton');

  userEvent.click(incrementButtonClick);

  expect(incrementButton).toBeCalledTimes(1);
});

test('decrementButton functionality', () => {
  const decrementButton = jest.fn();

  render(
    <CartItem
      cartItem={{
        name: 'Name 1',
        price: '26,99€',
        quantity: 2,
      }}
      decrementButtonClick={decrementButton}
    />
  );

  const decrementButtonClick = screen.getByTestId('decrementButton');

  userEvent.click(decrementButtonClick);

  expect(decrementButton).toBeCalledTimes(1);
});
