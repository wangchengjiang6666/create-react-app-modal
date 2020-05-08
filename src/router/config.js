import loadable from './loadable'
const router = [
  {
    path: '/login/:url',
    component: loadable(() => import('@/view/login/login')),
  },
  {
    path: '/',
    component: loadable(() => import('@/view/index')),
  },
  {
    path: '/home',
    component: loadable(() => import('@/view/home/index')),
  },
  {
    path: '/found',
    component: loadable(() => import('@/view/found/index')),
  },
  {
    path: '/market',
    component: loadable(() => import('@/view/market/index')),
  },
  {
    path: '/price',
    component: loadable(() => import('@/view/price/index')),
  },
  {
    path: '/mine',
    component: loadable(() => import('@/view/mine/index')),
  },
  {
    path: '/404',
    component: loadable(() => import('../view/404/404')),
    exact: true,
  },
]
export default router
