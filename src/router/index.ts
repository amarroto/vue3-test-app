import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: () => import('../views/EventList.vue')
    },
    {
      path: '/event/:eventId',
      name: 'event-detail',
      component: () => import('../views/EventDetail.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
    // {
    //   path: '/adam',
    //   name: 'adam',
    //   component: () => import('../views/AdamView.vue')
    // }
  ]
})

export default router
