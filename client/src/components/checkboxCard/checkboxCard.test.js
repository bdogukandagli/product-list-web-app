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
