import { RouteProps } from 'react-router-dom';

type RouteConfig = Record<string, RouteProps>;

export const routes: RouteConfig = {
  home: {
    path: '/',
  },
  about: {
    path: 'about',
  },
  todo: {
    path: 'todo',
  },
};
