const router = [
  {
    path: '/login',
    name: 'login',
    component: require('../views/login/index')
  },
  {
    path: '/',
    name: 'index',
    component: require('../views/topline/index')
  }
]
export default router
