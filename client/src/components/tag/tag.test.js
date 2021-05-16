import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tag } from '../index';

test('render component without crash', () => {
  render(<Tag isSelected={true} name="Tag-Test" />);
});

test('onClick functionality', () => {
  const onClick = jest.fn();

  render(<Tag isSelected={true} name="Tag-Test" onClick={onClick} />);

  const tagButton = screen.getByTestId('tagButton');

  userEvent.click(tagButton);

  expect(onClick).toBeCalledTimes(1);
});
