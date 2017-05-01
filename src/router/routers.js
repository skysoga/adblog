const router = [
  {
    path: '/',
    name: 'Hello',
    component: require('../components/Hello')
  },
  {
    path: '/index',
    name: 'index',
    component: require('../views/topline/index')
  }
]
export default router
