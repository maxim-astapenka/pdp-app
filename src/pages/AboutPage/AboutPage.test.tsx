import React from 'react';
import { AboutPage } from './AboutPage';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

test('renders component', () => {
  render(
    <MemoryRouter>
      <AboutPage />
    </MemoryRouter>
  );
  expect(screen.getByText('This is About page')).toBeInTheDocument();
});
