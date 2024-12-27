import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', name: 'Home', component: () => import('@/views/HeroView.vue') },
  { path: '/our-coffee', name: 'Coffee', component: () => import('@/views/OurCoffeeView.vue') },
  { path: '/pleasure', name: 'Pleasure', component: () => import('@/views/PleasureView.vue') },
  { path: '/contact', name: 'Contact', component: () => import('@/views/ContactView.vue') },
  { path: '/thanks', name: 'Thanks', component: () => import('@/views/ThanksView.vue') },
  { path: '/our-coffee/:id', name: 'CoffeeSection', component: () => import('@/views/GoodsItemView.vue') },
  { path: '/pleasure/:id', name: 'Goods', component: () => import('@/views/GoodsItemView.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;