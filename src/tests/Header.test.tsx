import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

test('renders username', () => {
  render(<Header username="Test User" />);
  const usernameElement = screen.getByText(/Test User/i);
  expect(usernameElement).toBeInTheDocument();
});
