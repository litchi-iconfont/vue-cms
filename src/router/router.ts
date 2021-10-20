import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import loaclCache from '@/utils/cache'
import { firstMenu } from '@/utils/map-menus'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/main',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue'),
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('../views/main/Main.vue'),
  },
  //找不到路径的加载
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/not-found/not-found.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = loaclCache.getCache('token')
    if (!token) {
      return '/login'
    }
  }

  if (to.path == '/main') {
    return firstMenu.url
  }
})

export default router
