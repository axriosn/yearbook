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
    path: '/invalid-user',
    name: 'InvalidUser',
    component: () => import(/* webpackChunkName: "invalidUser" */ '../views/InvalidUser.vue'),
    meta: { reqAuth: false, doNotShow: true },
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.reqAuth && !authState.isSignedIn) {
      next({path: '/invalid-user', query: {redirect: to.fullPath}});
    } else {
      next()
    }
})

export default router;
export { routes };