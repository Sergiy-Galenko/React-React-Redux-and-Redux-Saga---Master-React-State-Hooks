import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Menu from './Menu';

test('renders Menu component', () => {
  const mockStart = jest.fn();
  const mockSetBet = jest.fn();
  const mockSettings = jest.fn();

  render(
    <Menu
      onStart={mockStart}
      bet={100}
      setBet={mockSetBet}
      balance={1000}
      onSettings={mockSettings}
    />
  );

  const menuTitle = screen.queryByText(/Гра Блекджек/i);
  const startButton = screen.queryByText(/Почати гру/i);
  expect(menuTitle).not.toBeNull();
  expect(startButton).not.toBeNull();
});

test('calls onStart when "Почати гру" button is clicked', () => {
  const mockStart = jest.fn();
  const mockSetBet = jest.fn();
  const mockSettings = jest.fn();

  render(
    <Menu
      onStart={mockStart}
      bet={100}
      setBet={mockSetBet}
      balance={1000}
      onSettings={mockSettings}
    />
  );

  const startButton = screen.queryByText(/Почати гру/i);
  if (startButton) {
    fireEvent.click(startButton);
    expect(mockStart).toHaveBeenCalled();
  }
});
