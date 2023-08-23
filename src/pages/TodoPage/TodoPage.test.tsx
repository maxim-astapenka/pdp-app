import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TodoPage } from './TodoPage';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

test('increments count in child component', () => {
  const queryClient = new QueryClient();
  render(
    <MemoryRouter>
      <QueryClientProvider client={queryClient}>
        <TodoPage />
      </QueryClientProvider>
    </MemoryRouter>
  );
  const incrementButton = screen.getByText('Increment');
  const countDisplay = screen.getByText('Count: 0');

  fireEvent.click(incrementButton);
  expect(countDisplay).toHaveTextContent('Count: 1');
});
