// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/pages/LandingPage.vue'
import HomePage from '@/pages/sme/DashboardPage.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
