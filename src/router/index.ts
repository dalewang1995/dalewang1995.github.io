import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/urlTranslate',
      name: 'urlTranslate',
      component: () => import('../views/UrlTranslate.vue')
    },
    {
      path: '/qrcode',
      name: 'qrcode',
      component: () => import('../views/Qrcode.vue')
    }
  ]
})

export default router
