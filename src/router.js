import Vue from 'vue';
import VueRouter from 'vue-router';

import state from '@/state';
import HomeView from '@/views/HomeView';

Vue.use(VueRouter);

const routes = [
  {
    name: 'home-view',
    path: '/',
    meta: { title: 'HomeView' },
    component: HomeView,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    let interval;

    return new Promise((resolve, reject) => {
      interval = setInterval(() => {
        if (!state.loading) {
          clearInterval(interval);
          resolve(to);
        }
      }, 250);
    });
  },
});

router.beforeEach((to, from, next) => next());

export default router;
