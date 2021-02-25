import { render, screen, fireEvent } from '@testing-library/react';
import List from './List';
import React from 'react';

const list = [
  {
    id: 1,
    title: 'Полить кота'
  },
  {
    id: 2,
    title: 'Покормить цветы'
  }
];

test('Корректное отображение пустого списка', () => {
  const list = [];
  const deleteHandler = jest.fn();
  render(<List list={list} deleteHandler={deleteHandler} />);
  expect(screen.getByText('Список пуст')).toBeInTheDocument();
});

test('Корректное отображение списка элементов', () => {
  const deleteHandler = jest.fn();
  render(<List list={list} deleteHandler={deleteHandler} />);

  for (let item of list) {
    expect(screen.getByText(item.title)).toBeInTheDocument();
  }

  for (let deleteButton of screen.getAllByTestId('deleteButton')) {
    fireEvent.click(deleteButton);
  }
  expect(deleteHandler).toBeCalledTimes(list.length);
});
