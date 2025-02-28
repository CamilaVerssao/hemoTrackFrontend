import { createRouter, createWebHistory } from 'vue-router'
import HospitalView from '../views/HospitalView.vue'

const routes = [
  {
    path: '/hospital',
    name: 'hospital',
    component: HospitalView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
