import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { TodoList } from './TodoList/TodoList';

export const TodoPage: FC = () => {
  const [count, setCount] = useState<number>(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>This is Todo page</h1>
      <button onClick={incrementCount}>Increment</button>
      <div>Count: {count}</div>
      <Link to="/">Click to go back to Home page</Link>
      <TodoList />
    </div>
  );
};
