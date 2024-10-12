import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/pages/LandingPage.vue'
import LoginPage from '@/pages/LoginPage.vue'
import SignUp from '@/pages/SignUp.vue'
import ExploreJobsPage from '@/pages/talent/ExploreJobsPage.vue'
import DashboardPage from '@/pages/sme/DashboardPage.vue'
import SearchPage from '@/pages/sme/SearchPage.vue'
import PostJobPage from '@/pages/sme/PostJobPage.vue'
import ProfilePage from '@/pages/sme/ProfilePage.vue'

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
  },
  {
    path: '/sme/dashboard',
    name: 'DashboardPage',
    component: DashboardPage,
    meta: { title: 'My Dashboard' }
  },
  {
    path: '/sme/search',
    name: 'Search',
    component: SearchPage,
    meta: { title: 'Find Your Dream Talent' }
  },
  {
    path: '/sme/postjob',
    name: 'PostJobPage',
    component: PostJobPage,
    meta: { title: 'Post a Job' }
  },
  {
    path: '/sme/profile',
    name: 'ProfilePage',
    component: ProfilePage,
    meta: { title: 'My Profile' }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router