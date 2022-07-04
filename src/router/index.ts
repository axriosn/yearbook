import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import authState from '../firebase';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { reqAuth: false },
  },
  {
    path: '/about_us',
    name: 'About Us',
    component: () => import('../views/AboutUs.vue'),
    meta: { reqAuth: false },
  },
  {
    path: '/contact_us',
    name: 'Contact Us',
    component: () => import('../views/ContactUs.vue'),
    meta: { reqAuth: false },
  },
  {
    path: '/newsletters',
    name: 'Newsletters',
    component: () => import('../views/Newsletters.vue'),
    meta: { reqAuth: true },
  },
  {
    path: '/newsletter_builder',
    name: 'Newsletter Builder',
    component: () => import('../views/NewsletterBuilder.vue'),
    meta: { reqAuth: true },
  },
]

const router = createRouter({
  // @ts-expect-error kjefs
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  authState.authStateVerified.then(() => {
    if (to.meta.reqAuth && !authState.isSignedIn) {
      authState.displayToast('You do not have permission to access this page. If you believe this is an error please try logging in or contact Membership and Yearbook for help.', 'is-danger');
    } else {
      next();
    }
  });
})

export default router;
export { routes };