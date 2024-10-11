import { createRouter, createWebHistory } from 'vue-router'
// import LandingPage from '@/pages/LandingPage.vue'
import DashboardPage from '@/pages/sme/DashboardPage.vue'
import SearchPage from '@/pages/sme/SearchPage.vue'

const routes = [
  {
    path: '/dashboard',
    name: 'DashboardPage',
    component: DashboardPage
  },
  {
    path: '/search',
    name: 'Search',
    component: SearchPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
