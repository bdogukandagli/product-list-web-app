import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TagGroup } from '../index';

test('render component without crash', () => {
  render(<TagGroup selectedTags={['Tag1']} tagList={['Tag1', 'Tag2', 'Tag3']} />);
});

test('onClick functionality for deactive', () => {
  const onClick = jest.fn();

  render(
    <TagGroup
      selectedTags={['Tag1']}
      tagList={['Tag1', 'Tag2', 'Tag3']}
      setSelectedTags={onClick}
    />
  );

  const tagButton = screen.getByText('Tag1');

  userEvent.click(tagButton);

  expect(onClick).toBeCalledTimes(1);
});

test('onClick functionality for active', () => {
  const onClick = jest.fn();

  render(
    <TagGroup
      selectedTags={['Tag2']}
      tagList={['Tag1', 'Tag2', 'Tag3']}
      setSelectedTags={onClick}
    />
  );

  const tagButton = screen.getByText('Tag1');

  userEvent.click(tagButton);

  expect(onClick).toBeCalledTimes(1);
});
