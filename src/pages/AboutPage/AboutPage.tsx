import React, { FC } from 'react';
import { Link } from 'react-router-dom';

export const AboutPage: FC = () => {
  return (
    <div>
      <h1>This is About page</h1>
      <Link to="/">Click to go back to Home page</Link>
    </div>
  );
};
