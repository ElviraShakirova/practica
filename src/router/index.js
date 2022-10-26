import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '@/views/HomePage';

Vue.use(VueRouter);

const routes = [
  {
    path: '/countries',
    component: () => import(/* webpackChunkName: "" */ '@/views/CoutriesPage'),
  },
  {
    path: '/countries/:country',
    component: () => import(/* webpackChunkName: "" */ '@/views/CoronaStatistics'),
  },
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/list',
    component: () => import(/* webpackChunkName: "" */ '@/views/DoList'),
  },
  {
    path: '*',
    component: () => import(/* webpackChunkName: "404" */ '@/views/NotFound'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
