import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Pagination } from '../index';

test('render component without crash', () => {
  render(<Pagination totalPageCount={20} />);
});

test('onClick functionality', () => {
  const onClick = jest.fn();

  render(<Pagination totalPageCount={20} setPageNumber={onClick} />);

  const tagButton = screen.getByText('2');

  userEvent.click(tagButton);

  expect(onClick).toBeCalledTimes(1);
});
