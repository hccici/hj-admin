// 不用登陆就能访问的路由
export default [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  }
]
