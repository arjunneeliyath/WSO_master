import { lazy } from 'react';

export const routePath = {
    demo: {
        index: '/demo',
    },
    error: {
        index: '/error',
    },
};

const routes = [
    {
        title: 'Demo',
        path: routePath.demo.index,
        component: lazy(() => import('../pages/demo/demo')),
        exact: true,
    },
    {
        title: 'Error',
        path: routePath.error.index,
        component: lazy(() => import('../components/error-boundary/error')),
        exact: true,
    },
];

export default routes;
