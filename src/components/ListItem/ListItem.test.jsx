import { render, screen, fireEvent } from '@testing-library/react';
import ListItem from './ListItem';
import React from 'react';

test('Отображение элемента в списке, реакция на кнопку', () => {
  const id = 19;
  const title = 'Покормить цветы';
  const deleteHandler = jest.fn();

  // arrange
  render(<ListItem id={id} title={title} deleteHandler={deleteHandler} />);
  expect(screen.getByText(title)).toBeInTheDocument();

  // act
  const deleteButton = screen.getByTestId('deleteButton');
  expect(deleteButton).toBeInTheDocument();
  fireEvent.click(deleteButton);

  // asset
  expect(deleteHandler).toBeCalledWith(id);
});
