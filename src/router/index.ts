import { createRouter, createWebHashHistory } from 'vue-router'
import Highlight from '../views/Highlight.vue'
import Lottie from '../views/Lottie.vue'
import Book from '../views/Book.vue'
import Sheep from '../views/Sheep.vue'

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
    {
      path: '/book',
      name: 'book',
      component: Book
    },
    {
      path: '/sheep',
      name: 'sheep',
      component: Sheep
    },
  ]
})

export default router
