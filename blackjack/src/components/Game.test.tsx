import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store';
import Game from './Game';

test('renders Game component', () => {
  render(
    <Provider store={store}>
      <Game user="Test User" balance={1000} isDemo={true} bet={100} setBet={jest.fn()} />
    </Provider>
  );

  expect(screen.getByText(/Гра Блекджек/i)).toBeTruthy();
});

test('increments example value', () => {
  render(
    <Provider store={store}>
      <Game user="Test User" balance={1000} isDemo={true} bet={100} setBet={jest.fn()} />
    </Provider>
  );

  const incrementButton = screen.getByText(/Increment Example Value/i);
  fireEvent.click(incrementButton);
  fireEvent.click(incrementButton);

  expect(screen.getByText(/Example Value:/i)).toHaveTextContent('Example Value: 2');
});
