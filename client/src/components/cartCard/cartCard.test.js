import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

test('cart button increment functionality', () => {
  const setCart = jest.fn();

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
      setCartItems={setCart}
    />
  );

  const incrementButtonClick = screen.getAllByText('+')[0];

  userEvent.click(incrementButtonClick);

  expect(setCart).toBeCalledTimes(1);
});

test('cart button decrement with 1 quantity functionality', () => {
  const setCart = jest.fn();

  render(
    <CartCard
      cartItems={[
        {
          name: 'Name 1',
          price: '26,99€',
          quantity: 1,
        },
      ]}
      setCartItems={setCart}
    />
  );

  const incrementButtonClick = screen.getAllByText('-')[0];

  userEvent.click(incrementButtonClick);

  expect(setCart).toBeCalledTimes(1);
});

test('cart button decrement with functionality', () => {
  const setCart = jest.fn();

  render(
    <CartCard
      cartItems={[
        {
          name: 'Name 1',
          price: '26,99€',
          quantity: 2,
        },
      ]}
      setCartItems={setCart}
    />
  );

  const incrementButtonClick = screen.getAllByText('-')[0];

  userEvent.click(incrementButtonClick);

  expect(setCart).toBeCalledTimes(1);
});
