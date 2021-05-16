import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ProductCard } from '../index';

test('render component without crash', () => {
  render(<ProductCard />);
});

test('addButton functionality', () => {
  const addButtonClick = jest.fn();

  render(<ProductCard addButtonClick={addButtonClick} />);

  const addButton = screen.getByTestId('addButton');

  userEvent.click(addButton);

  expect(addButtonClick).toBeCalledTimes(1);
});
