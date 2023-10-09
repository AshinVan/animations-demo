import { createRouter, createWebHashHistory } from 'vue-router'
import Highlight from '../views/Highlight.vue'
import Lottie from '../views/Lottie.vue'
import Book from '../views/Book.vue'
// import Sheep from '../views/Sheep.vue'
// import Meebits from '../views/Meebits.vue'
// import Lightning from '../views/Lightning.vue'
import Ding from '../views/Ding.vue'

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
    // {
    //   path: '/sheep',
    //   name: 'sheep',
    //   component: Sheep
    // },
    // {
    //   path: '/meebits',
    //   name: 'meebits',
    //   component: Meebits
    // },
    // {
    //   path: '/lightning',
    //   name: 'lightning',
    //   component: Lightning
    // },
    {
      path: '/ding',
      name: 'ding',
      component: Ding
    },
  ]
})

export default router
