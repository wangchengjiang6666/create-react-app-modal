import loadable from './loadable'
const router = [
  {
    path: '/login/:url',
    component: loadable(() => import('@/view/login/login')),
  },
]
export default router
