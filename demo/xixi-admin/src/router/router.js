import main from '@/pages/main';

export const loginRouter = {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login.vue'),
};

export const page404 = {
    path: '/*',
    name: '错误-404',
    component: () => import('@/pages/404.vue'),
};

export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    redirect: '/home',
    component: main,
    children: [
        {
            path: 'home',
            title: '主页',
            name: 'home_index',
            component: () => import('@/pages/home/home.vue'),
        },
    ],
};

export const appRouter = [
    {
        path: '/layout',
        name: 'layout',
        title: '布局',
        component: main,
        children: [
            {
              path: 'layout1',
              title: 'layout1',
              component: () => import('@/pages/layout/layout1.vue'),
            },
            {
              path: 'layout2',
              title: 'layout2',
              component: () => import('@/pages/layout/layout2.vue'),
            },
            {
              path: 'layout3',
              title: 'layout3',
              component: () => import('@/pages/layout/layout3.vue'),
            },
        ],
    },
];

export const routers = [
    loginRouter,
    otherRouter,
    ...appRouter,
    page404,
];