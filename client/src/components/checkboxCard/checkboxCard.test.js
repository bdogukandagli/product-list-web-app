import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CheckboxCard } from '../index';

test('render component without crash', () => {
  render(
    <CheckboxCard
      cardTitle={'Brands'}
      options={['Marka1', 'Marka2', 'Marka3', 'Marka4', 'Marka5', 'Marka6', 'Marka7']}
    />
  );
});

test('search input functionality', () => {
  render(
    <CheckboxCard
      cardTitle={'Brands'}
      options={['Marka1', 'Marka2', 'Marka3', 'Marka4', 'Marka5', 'Marka6', 'Marka7']}
      selectedFilters={['Marka1']}
    />
  );

  const searchInput = screen.getByTestId('search-input');

  userEvent.type(searchInput, 'Marka1');

  expect(screen.queryByText('Marka2')).not.toBeInTheDocument();
});
