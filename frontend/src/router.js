import Vue from 'vue'
import Router from 'vue-router'
import Books from './views/Books.vue'
import Book from './views/Book.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'books',
      component: Books
    },
    { 
      path: '/books/:id',
      name: 'book',
      component: Book
    }
  ]
})
