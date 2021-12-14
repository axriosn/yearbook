import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
// @ts-ignore
import authState from '../firebase.ts';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { reqAuth: false },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: { reqAuth: false },
  },
  {
    path: '/newsletters',
    name: 'Newsletters',
    component: () => import(/* webpackChunkName: "newsletters" */ '../views/Newsletters.vue'),
    meta: { reqAuth: true },
  },
  {
    path: '/newsletter_builder',
    name: 'Newsletter Builder',
    component: () => import(/* webpackChunkName: "newsletterBuilder" */ '../views/NewsletterBuilder.vue'),
    meta: { reqAuth: true },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.reqAuth && !authState.isSignedIn) {
      authState.displayError('You do not have permission to access this page. If you believe this is an error please try logging in or contact Membership and Yearbook for help.');
      next();
    } else {
      next();
    }
})

export default router;
export { routes };