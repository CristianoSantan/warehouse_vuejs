import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import WareHouseList from '@/views/WareHouseList.vue'
import WareHouseNew from '@/views/WareHouseNew.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/warehouses',
    name: 'warehouses',
    component: WareHouseList
  },
  {
    path: '/warehouse/new',
    name: 'new',
    component: WareHouseNew
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
