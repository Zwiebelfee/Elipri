import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Construction from '../views/Construction.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/fake',
    name: 'fake',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/animations',
    name: 'animations',
    component: Construction,
  },
  {
    path: '/contact',
    name: 'contact',
    component: Construction,
  },
  {
    path: '/about',
    name: 'about',
    component: Construction,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
