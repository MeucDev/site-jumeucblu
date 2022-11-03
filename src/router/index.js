import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/album',
    name: 'Álbum',
    component: () => import(/* webpackChunkName: "about" */ '../views/AlbumView.vue')
  },
  {
    path: '/logo',
    name: 'Logo',
    component: () => import(/* webpackChunkName: "logo" */ '../views/LogoView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
