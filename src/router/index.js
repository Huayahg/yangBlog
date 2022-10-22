import { createWebHistory, createRouter } from 'vue-router'
import AboutBlog from '@/views/AboutBlog.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '',
      component: AboutBlog,
    },
  ],
})

export default router
