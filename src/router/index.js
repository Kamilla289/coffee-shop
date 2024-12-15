import Vue from 'vue';
import VueRouter from 'vue-router';

import HeroView from '../views/HeroView.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: HeroView }
];

const router = new VueRouter ({
  routes
})

export default router;