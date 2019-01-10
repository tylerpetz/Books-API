import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import BookSingle from './components/BookSingle.vue'
import Login from './components/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    { 
      path: '/books/:id',
      name: 'book',
      component: BookSingle
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
