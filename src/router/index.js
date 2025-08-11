import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import gallary from '@/views/gallary.vue'
import Team from '@/views/Team.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
    {
      path: '/Team',
      name: 'Team',
      component: Team,
    },

    {
      path: '/gallary',
      name: 'gallary',
      component: gallary,
    },

  ],

    scrollBehavior(to) {
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            el: to.hash,
            behavior: 'smooth',
          })
        }, 100) // wait 300ms for DOM to render
      })
    }
    return { top: 0 }
    }
})

export default router
