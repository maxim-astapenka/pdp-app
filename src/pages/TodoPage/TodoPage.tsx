import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { TodoList } from './TodoList/TodoList';

export const TodoPage: FC = () => {
  return (
    <div>
      <h1>This is Todo page</h1>
      <Link to="/">Click to go back to Home page</Link>
      <TodoList />
    </div>
  );
};
