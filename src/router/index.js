import { createRouter, createWebHistory } from 'vue-router';
import HeroView from '@/views/HeroView.vue';
import OurCoffeeView from '@/views/OurCoffeeView.vue';
import PleasureView from '@/views/PleasureView.vue';
import ContactView from '@/views/ContactView.vue';
import ThanksView from '@/views/ThanksView.vue';

const routes = [
  { path: '/', name: 'Home', component: HeroView },
  { path: '/our-coffee', name: 'Coffee', component: OurCoffeeView },
  { path: '/pleasure', name: 'Pleasure', component: PleasureView },
  { path: '/contact', name: 'Contact', component: ContactView },
  { path: '/thanks', name: 'Thanks', component: ThanksView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;