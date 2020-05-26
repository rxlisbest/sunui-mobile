import { RouteConfig } from 'vue-router'

const routes: Array<RouteConfig> = [
  {
    path: '/index',
    name: 'Index',
    component: () => import('@/demo/index/Index.vue')
  }
]

export default routes
