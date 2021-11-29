import { createRouter, createWebHashHistory } from 'vue-router'
import outRoutes from './out'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    ...outRoutes
  ]
})
export default router
