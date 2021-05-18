import { lazy } from 'react';

export const route_path = {
    home: {
        index: '/home',
    },
    demo: {
        index: '/demo',
    },
    error: {
        index: '/error',
    },
};

const routeProps = [
    {
        title: 'Home',
        path: route_path.home.index,
        component: lazy(() => import('../pages/home')),
        exact: true,
    },
    {
        title: 'Demo',
        path: route_path.demo.index,
        component: lazy(() => import('../pages/demo/demo')),
        exact: true,
    },
    {
        title: 'Error',
        path: route_path.error.index,
        component: lazy(() => import('../components/errorboundary/error')),
        exact: true,
    },
];

export default routeProps;
