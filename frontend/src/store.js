import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import moment from 'moment'
import { Toast } from 'buefy/dist/components/toast'
import router from './router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books: '',
    selectedBook: null,
    name: '',
    email: '',
    authenticated: false,
    token: '',
    badLogin: false
  },
  mutations: {
    FETCH_BOOKS(state, books) {
      books.forEach(function (book) {
        book['pub_date'] = moment(book['pub_date']).toDate()
      });

      state.books = books
    },
    SET_BOOK(state, selectedBook) {
      state.selectedBook = selectedBook
    },
    ADD_BOOK(state, book) {
      book.pub_date = moment(book.pub_date)
      state.books.push(book)
    },
    EDIT_BOOK(state, book) {
      console.log(book)
    },
    DELETE_BOOK(state, id) {
      let index = state.books.findIndex(book => book.id === id)
      state.books.splice(index, 1)
    },
    LOGIN(state, payload) {
      state.badLogin = false
      state.email = payload.user.email
      state.token = payload.authedUser.token

      axios.defaults.headers.common['Authorization'] = 'Bearer ' + payload.authedUser.token
      axios.defaults.headers.common['Accept'] = 'application/json'

      if (payload.user.remember_token) {
        window.localStorage.setItem('token', state.token);
        window.localStorage.setItem('email', state.email);
      }

      state.authenticated = true

      Toast.open({
        duration: 3000,
        message: `Logged in as ${state.email}`,
        position: 'is-bottom',
        type: 'is-success'
      })

      router.push('/')
    },
    PERSIST_LOGIN(state) {
      state.token = window.localStorage.getItem('token')
      state.email = window.localStorage.getItem('email')

      axios.defaults.headers.common['Authorization'] = 'Bearer ' + state.token
      axios.defaults.headers.common['Accept'] = 'application/json'

      state.authenticated = true

      Toast.open({
        duration: 3000,
        message: `Logged in as ${state.email}`,
        position: 'is-bottom',
        type: 'is-success'
      })
    },
    LOGOUT(state) {
      state.books = ''
      state.email = ''
      state.token = ''

      axios.defaults.headers.common['Authorization'] = 'Bearer '

      window.localStorage.removeItem('token', state.token);
      window.localStorage.removeItem('email', state.email);

      state.authenticated = false

      Toast.open({
        duration: 3000,
        message: `Logged out. Seeya!`,
        position: 'is-bottom',
        type: 'is-primary'
      })
    }
  },
  actions: {
    registerUser({ commit }, user) {
      axios.post('/api/register', user).then(({ data }) => {
        let authedUser = data.data
        commit("LOGIN", { authedUser, user })
      }).catch(() => {
        Toast.open({
          duration: 3000,
          message: 'Something went wrong, are you already registered?',
          position: 'is-bottom',
          type: 'is-warning'
        })
      })
    },
    async checkLogin({ commit, state }, user) {
      await axios.post('/api/login', user).then(({data}) => {
        let authedUser = data.data
        commit("LOGIN", { authedUser, user })
      }).catch((res) => {
        state.badLogin = true
        Toast.open({
          duration: 3000,
          message: res.response.data.error,
          position: 'is-bottom',
          type: 'is-danger'
        })
      })
    },
    checkUser({ commit }) {
      let localEmail = window.localStorage.getItem('email');
      let localToken = window.localStorage.getItem('token');

      if (localToken && localEmail) {
        commit("PERSIST_LOGIN")
      }
    },
    logout({ commit }) {
      axios.post('/api/logout').then(() => {
        commit("LOGOUT")
      })
    },
    fetchBooks({ commit }) {
      axios.get('/api/books').then((response) => {
        commit("FETCH_BOOKS", response.data)
      })
      .catch((error => {
        console.log(error.statusText)
      }))
    },
    setBook({ commit }, book) {
      book.pub_date = moment(book.pub_date).toDate();
      commit("SET_BOOK", book)
    },
    createBook({ commit }, book) {
      book.pub_date = moment(book.pub_date).toDate();
      axios.post('/api/books', book).then(({ data }) => {
        commit("ADD_BOOK", data)
      })
    },
    updateBook({ commit }, book) {
      book.pub_date = moment(book.pub_date).toDate();
      axios.put(`/api/books/${book.id}`, book).then(({ data }) => {
        commit("EDIT_BOOK", data)
      })
    },
    deleteBook({ commit }, id) {
      axios.delete(`/api/books/${id}`).then(() => {
        commit("DELETE_BOOK", id)
      })
    }
  }
})
