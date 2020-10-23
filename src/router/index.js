import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/mobil',
    name: 'Mobil',
    component: () => import(/* webpackChunkName: "about" */ '../views/DaftarMobil.vue')
  },
  {
    path: '/penjualan',
    name: 'Penjualan',
    component: () => import(/* webpackChunkName: "about" */ '../views/DaftarPenjualan.vue')
  },
  {
    path: '/mobil-tambah',
    name: 'tambah-mobil',
    component: () => import(/* webpackChunkName: "about" */ '../components/TambahMobil.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
