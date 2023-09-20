import { lazy } from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';

const ProductView = lazy(async () => import('Frontend/views/ProductView'));
const FilteredProductsView = lazy(async () => import('Frontend/views/FilteredProductsView'));

export const routes: RouteObject[] = [
    { path: '/', element: <ProductView /> },
    { path: '/filter', element: <FilteredProductsView /> },
];

export default createBrowserRouter(routes);
