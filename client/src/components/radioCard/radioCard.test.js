import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RadioCard } from '../index';

test('render component without crash', () => {
  render(
    <RadioCard
      cardTitle={'Brands'}
      options={[
        {
          name: 'Price low to high',
          value: 0,
        },
        {
          name: 'Price high to low',
          value: 1,
        },
        {
          name: 'New to old',
          value: 2,
        },
        {
          name: 'Old to new',
          value: 3,
        },
      ]}
      selectedFilter={2}
    />
  );
});

test('onClick functionality', () => {
  const onClick = jest.fn();

  render(
    <RadioCard
      cardTitle={'Brands'}
      options={[
        {
          name: 'Price low to high',
          value: 0,
        },
        {
          name: 'Price high to low',
          value: 1,
        },
        {
          name: 'New to old',
          value: 2,
        },
        {
          name: 'Old to new',
          value: 3,
        },
      ]}
      selectedFilter={0}
      setSelectedFilter={onClick}
    />
  );

  const radioButton = screen.getAllByTestId('radio-wrapper')[0];

  userEvent.click(radioButton);

  expect(onClick).toBeCalledTimes(1);
});
