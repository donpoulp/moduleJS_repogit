import { createRouter, createWebHistory } from 'vue-router'
import SuppliersList from './../components/SuppliersList.vue'
import SuppliersMap from './../components/SuppliersMap.vue'

const routes = [
  {
    path: '/SuppliersList',
    name: 'SuppliersList',
    component: SuppliersList
  },
  {
    path: '/SuppliersMap',
    name: 'SuppliersMap',
   component: SuppliersMap
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
