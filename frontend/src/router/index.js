import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '@/pages/dashboard/Dashboard.vue';
import Home from '../pages/Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path : '/dashboard',
        name: 'Dashboard',
        component: Dashboard
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })

  export default router;