import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/ddd/home/components/Home.page.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
