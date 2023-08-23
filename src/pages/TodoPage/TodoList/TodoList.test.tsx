// import React from 'react';
// import { render } from '@testing-library/react';
// import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
// import { MemoryRouter } from 'react-router-dom';
// import { TodoList } from './TodoList';
// import '@testing-library/jest-dom';

// jest.mock('react-query');

// describe('TodoList', () => {
//   const queryClient = new QueryClient();

//   it('renders loading state', () => {
//     (useQuery as jest.Mock).mockImplementation(() => ({
//       isLoading: true,
//       data: null,
//       isError: false,
//     }));

//     const { getByText } = render(
//       <MemoryRouter>
//         <QueryClientProvider client={queryClient}>
//           <TodoList />
//         </QueryClientProvider>
//       </MemoryRouter>
//     );
//     expect(getByText('Loading...')).toBeInTheDocument();
//   });

//   it('renders error state', () => {
//     (useQuery as jest.Mock).mockImplementation(() => ({
//       isLoading: false,
//       data: null,
//       isError: true,
//     }));

//     const { getByText } = render(
//       <MemoryRouter>
//         <QueryClientProvider client={queryClient}>
//           <TodoList />
//         </QueryClientProvider>
//       </MemoryRouter>
//     );
//     expect(getByText('An error has occurred')).toBeInTheDocument();
//   });

//   it('renders fetched data', () => {
//     (useQuery as jest.Mock).mockImplementation(() => ({
//       isLoading: false,
//       data: 'Mocked Data',
//       isError: false,
//     }));

//     const { getByText } = render(
//       <MemoryRouter>
//         <QueryClientProvider client={queryClient}>
//           <TodoList />
//         </QueryClientProvider>
//       </MemoryRouter>
//     );
//     expect(getByText('Mocked Data')).toBeInTheDocument();
//   });
// });
