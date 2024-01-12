// router.js
import { createRouter, createWebHistory } from 'vue-router';
import MyHome from './components/MyHome.vue';
import MyAbout from './components/MyAbout.vue';

const routes = [
  { path: '/', component: MyHome },
  { path: '/about', component: MyAbout }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
