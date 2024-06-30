import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store';
import Game from './Game';

test('renders Game component', () => {
  render(
    <Provider store={store}>
      <Game />
    </Provider>
  );

  const gameElement = screen.queryByText(/Гра Блекджек/i);
  expect(gameElement).not.toBeNull();
});

test('increments example value', () => {
  render(
    <Provider store={store}>
      <Game />
    </Provider>
  );

  const incrementButton = screen.queryByText(/Increment Example Value/i);
  if (incrementButton) {
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);

    const exampleValueElement = screen.queryByText(/Example Value: 2/i);
    expect(exampleValueElement).not.toBeNull();
  }
});
