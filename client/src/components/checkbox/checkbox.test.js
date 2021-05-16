import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Checkbox } from '../index';

test('render component without crash', () => {
  render(<Checkbox />);
});

test('checkboxes click', () => {
  const setActive = jest.fn();
  render(<Checkbox setActive={setActive} />);

  const checkbox = screen.getByTestId('checkbox');

  userEvent.click(checkbox);

  expect(setActive).toBeCalledTimes(1);
});
