import {
    createRouter,
    createWebHistory,
    type RouteRecordRaw
} from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/folha',
        name: 'folha',
        component: () => import('../components/FolhaPagamento.vue')
    },
    {
        path: '/tipo',
        name: 'tipo',
        component: () => import('../views/Tipo.vue')
    },
    {
        path: '/tipo/editar',
        name: 'tipoEditar',
        component: () => import('../views/ManterTipoCurso.vue')
    },
    {
        path: '/exemploPinia',
        name: 'exemploPinia',
        component: () => import('../views/ExemploPinia.vue')
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;
