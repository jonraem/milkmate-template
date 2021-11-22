import React from 'react';
import { render, screen } from '@testing-library/react';

import CowList from '../components/CowList';
import { cowsWithProduction } from '../assets/cows';

test('renders cow list', () => {
  render(<CowList cows={cowsWithProduction} onButtonClick={() => {}} />);
  const cowRowElement = screen.getByText(/Mansikki/i);
  expect(cowRowElement).toBeInTheDocument();
});
