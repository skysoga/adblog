const router = [
  {
    path: '/',
    name: 'Hello',
    component: require('../components/Hello')
  },
  {
    path: '/detail',
    name: 'detail',
    component: require('../views/topline/detail')
  },
  {
    path: '/index',
    name: 'index',
    component: require('../views/topline/index'),
    children: [
      {
        path: '/index&catalog=/:id&source=/:res',
        component: require('../views/topline/index')
      }
    ]
  }
]
export default router
