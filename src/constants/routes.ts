import { lazy } from 'react';

export const route_path = {
    home: {
        index: '/home'
    },
    demo: {
        index: '/demo',
    }
};

const routeProps = [
    {
        title: "Home",
        path: route_path.home.index,
        component: lazy(() => import('../pages/home')),
        exact: true,
    },
    {
        title: "Demo",
        path: route_path.demo.index,
        component: lazy(() => import('../pages/demo')),
        exact: true,
    }
];

export default routeProps;