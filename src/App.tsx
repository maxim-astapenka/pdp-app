import React, { FC } from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { routes } from './common/routes';
import { HomePage } from './pages/HomePage/HomePage';
import { AboutPage } from './pages/AboutPage/AboutPage';
import { TodoPage } from './pages/TodoPage/TodoPage';

export const App: FC = () => {
  return (
    <div className="app">
      <Routes>
        <Route path={routes.home.path} element={<HomePage />} />
        <Route path={routes.about.path} element={<AboutPage />} />
        <Route path={routes.todo.path} element={<TodoPage />} />
      </Routes>
    </div>
  );
};
