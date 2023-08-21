import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../common/routes';

export const HomePage: FC = () => {
  return (
    <div>
      <h1>This is Home page</h1>
      <Link to={routes.about.path}>Click to view About page</Link>
      <br />
      <Link to={routes.todo.path}>Click to view Todo page</Link>
    </div>
  );
};
