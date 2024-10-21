import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import FilterView from '@/views/FilterView.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/filterView', component: FilterView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;