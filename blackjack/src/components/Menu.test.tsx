import React from 'react';
import { render } from '@testing-library/react';
import Menu from './Menu';
import '@testing-library/jest-dom/extend-expect';

test('renders Menu component', () => {
  const mockStart = jest.fn();
  const mockSetBet = jest.fn();
  const mockSetBalance = jest.fn();
  const mockOnSettings = jest.fn();

  render(
    <Menu
      onStart={mockStart}
      bet={100}
      setBet={mockSetBet}
      balance={1000}
      setBalance={mockSetBalance}
      onSettings={mockOnSettings}
    />
  );
});

test('calls onStart when Start Game button is clicked', () => {
  const mockStart = jest.fn();
  const mockSetBet = jest.fn();
  const mockSetBalance = jest.fn();
  const mockOnSettings = jest.fn();

  render(
    <Menu
      onStart={mockStart}
      bet={100}
      setBet={mockSetBet}
      balance={1000}
      setBalance={mockSetBalance}
      onSettings={mockOnSettings}
    />
  );
});
