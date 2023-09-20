import { lazy } from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';

const EmptyView = lazy(async () => import('Frontend/views/empty/EmptyView.js'));

export const routes: RouteObject[] = [{ path: '/', element: <EmptyView />, handle: { title: 'Empty' } }];

export default createBrowserRouter(routes);
