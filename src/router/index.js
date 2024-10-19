import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/pages/LandingPage.vue'
import LoginPage from '@/pages/LoginPage.vue'
import SignUp from '@/pages/SignUp.vue'
import ExploreJobsPage from '@/pages/talent/ExploreJobsPage.vue'
import DashboardPage from '@/pages/sme/DashboardPage.vue'
import SearchPage from '@/pages/sme/SearchPage.vue'
import PostJobPage from '@/pages/sme/PostJobPage.vue'
import ProfilePage from '@/pages/sme/ProfilePage.vue'
import MyJobsPage from '@/pages/talent/MyJobsPage.vue'
import TalentProfilePage from '@/pages/talent/TalentProfilePage.vue'
import checkUserRole from '@/middleware/RoleGuard'
import TalentDetailComponent from '@/components/sme/search/TalentDetailComponent.vue'
import JobDetailsPage from '@/pages/talent/JobDetailsPage.vue'

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
    meta: { title: 'Log in to Loom', requiresAuth: false, role: 'unauthenticated' }
  },
  {
    path: '/sign-up',
    name: 'SignUpPage',
    component: SignUp,
    meta: { title: 'Sign up to Loom', requiresAuth: false, role: 'unauthenticated' }
  },
  {
    path: '/talent/explore-jobs',
    name: 'ExploreJobsPage',
    component: ExploreJobsPage,
    meta: { title: 'Explore Jobs', requiresAuth: true, role: 'Talent' }
  },
  {
    path: '/talent/my-jobs',
    name: 'MyJobsPage',
    component: MyJobsPage,
    meta: { title: 'My Jobs', requiresAuth: true, role: 'Talent' }
  },
  {
    path: '/talent/job-details',
    name: 'JobDetailsPage',
    component: JobDetailsPage,
    meta: { title: 'Job Details', requiresAuth: true, role: 'Talent' }
  },
  {
    path: '/talent/my-jobs',
    name: 'MyJobsPage',
    component: MyJobsPage,
    meta: { title: 'My Jobs', requiresAuth: true, role: 'Talent' }
  },
  {
    path: '/talent/profile',
    name: 'TalentProfilePage',
    component: TalentProfilePage,
    meta: { title: 'Profile', requiresAuth: true, role: 'Talent' }
  },

  {
    path: '/sme/dashboard',
    name: 'DashboardPage',
    component: DashboardPage,
    meta: { title: 'My Dashboard', requiresAuth: true, role: 'SME' }
  },
  {
    path: '/sme/search',
    name: 'Search',
    component: SearchPage,
    meta: { title: 'Find Your Dream Talent', requiresAuth: true, role: 'SME' }
  },
  {
    path: '/sme/postjob',
    name: 'PostJobPage',
    component: PostJobPage,
    meta: { title: 'Post a Job', requiresAuth: true, role: 'SME' }
  },
  {
    path: '/sme/profile',
    name: 'ProfilePage',
    component: ProfilePage,
    meta: { title: 'My Profile', requiresAuth: true, role: 'SME' }
  },
  {
    path: '/sme/talent/:id',
    name: 'TalentDetailPage',
    component: TalentDetailComponent,
    meta: { title: 'Talent Details', requiresAuth: true, role: 'SME' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach(async (to, from, next) => {
  const role = await checkUserRole()
  if (role === 'unauthenticated') {
    if (to.meta.requiresAuth) {
      next('/login')
    } else {
      next()
    }
  } else if (role === 'Talent') {
    if (to.meta.role === 'SME' || !to.meta.requiresAuth) {
      next('/talent/explore-jobs')
    } else {
      next()
    }
  } else if (role === 'SME') {
    if (to.meta.role === 'Talent' || !to.meta.requiresAuth) {
      next('/sme/dashboard')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
