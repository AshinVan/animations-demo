import { createRouter, createWebHistory } from 'vue-router'
import Highlight from '../views/Highlight.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'highlight',
      component: Highlight
    },
  ]
})

export default router
