import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TagGroup } from '../index';

test('render component without crash', () => {
  render(<TagGroup tagList={['Tag1', 'Tag2', 'Tag3']} />);
});

test('onClick functionality', () => {
  const onClick = jest.fn();

  render(<TagGroup tagList={['Tag1', 'Tag2', 'Tag3']} onClick={onClick} />);

  const tagButton = screen.getByText('Tag1');

  userEvent.click(tagButton);

  expect(onClick).toBeCalledTimes(1);
});
