import { createRouter, createWebHashHistory } from 'vue-router'
import Highlight from '../views/Highlight.vue'
import Lottie from '../views/Lottie.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'highlight',
      component: Highlight
    },
    {
      path: '/lottie',
      name: 'lottie',
      component: Lottie
    },
  ]
})

export default router
