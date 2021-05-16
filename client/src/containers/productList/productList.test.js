import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ProductList } from '../index';

test('render component without crash', () => {
  const onClick = jest.fn();
  render(
    <ProductList
      productBrands={['Test1', 'Test2']}
      products={['Product1', 'Product2']}
      selectedProductBrands={['Test1', 'Test2']}
      selectedProductTags={['Test1', 'Test2']}
      totalPrice="100"
      isCartActive={true}
      sortTypes={['Test1', 'Test2']}
      selectedSort={2}
      selectedItemTypes={['Test1', 'Test2']}
      pageNumber={1}
      totalPageNumber={30}
      setCart={onClick}
    />
  );

  const addButton = screen.getAllByText('Add')[0];

  userEvent.click(addButton);

  expect(onClick).toBeCalledTimes(1);
});

test('render component without crash', () => {
  const onClick = jest.fn();
  render(
    <ProductList
      productBrands={['Test1', 'Test2']}
      products={[
        {
          tags: ['Trees'],
          price: 10.99,
          name: 'Handcrafted Trees Mug',
          description:
            'enim corporis voluptatibus laudantium possimus alias dolorem voluptatem similique aut aliquam voluptatem voluptatem omnis id consequatur',
          slug: 'Handcrafted-Trees-Mug',
          added: 1485723766805,
          manufacturer: 'OHara-Group',
          itemType: 'mug',
        },
      ]}
      cart={[
        {
          tags: ['Trees'],
          price: 10.99,
          name: 'Handcrafted Trees Mug',
          description:
            'enim corporis voluptatibus laudantium possimus alias dolorem voluptatem similique aut aliquam voluptatem voluptatem omnis id consequatur',
          slug: 'Handcrafted-Trees-Mug',
          added: 1485723766805,
          manufacturer: 'OHara-Group',
          itemType: 'mug',
        },
      ]}
      selectedProductBrands={['Test1', 'Test2']}
      selectedProductTags={['Test1', 'Test2']}
      totalPrice="100"
      isCartActive={true}
      sortTypes={['Test1', 'Test2']}
      selectedSort={2}
      selectedItemTypes={['Test1', 'Test2']}
      pageNumber={1}
      totalPageNumber={30}
      setCart={onClick}
    />
  );

  const addButton = screen.getAllByText('Add')[0];

  userEvent.click(addButton);

  expect(onClick).toBeCalledTimes(1);
});
