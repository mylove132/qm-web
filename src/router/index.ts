import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/',
    name: 'home',
    meta: {auth: true},
    component: () => import('@/views/home/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
