import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/pages/LandingPage.vue'
import LoginPage from '@/pages/LoginPage.vue'
import SignUp from '@/pages/SignUp.vue'
import ExploreJobsPage from '@/pages/talent/ExploreJobsPage.vue'

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage,
    meta: { title: 'Welcome to Loom!' }
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage,
    meta: { title: 'Log in to Loom' }
  },
  {
    path: '/sign-up',
    name: 'SignUpPage',
    component: SignUp,
    meta: { title: 'Sign up to Loom' }
  },
  {
    path: '/talent/explore-jobs',
    name: 'ExploreJobsPage',
    component: ExploreJobsPage,
    meta: { title: 'Explore Jobs' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
