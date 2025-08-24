import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      component: () => import('@/layouts/RootLayout.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('@/views/HomeView.vue'),
        },
        {
          path: '/upcoming',
          name: 'upcoming',
          component: () => import('@/views/HomeView.vue'),
        },
        {
          path: '/season',
          name: 'season',
          component: () => import('@/views/HomeView.vue'),
        },
        {
          path: '/anime/:id',
          name: 'anime-detail',
          component: () => import('@/views/AnimeView.vue'),
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFound.vue'),
    },
  ],
});

export default router;
