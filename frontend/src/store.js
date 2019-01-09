import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books: [],
    selectedBook: null
  },
  mutations: {
    FETCH_BOOKS(state, books) {
      state.books = books
    },
    SET_BOOK(state, selectedBook) {
      state.selectedBook = selectedBook
      router.push(`/books/${selectedBook.id}`);
    },
    ADD_BOOK(state, book) {
      state.books.push(book);
    },
    EDIT_BOOK(state, book) {
      console.log(book);
    },
    DELETE_BOOK(state, id) {
      let index = state.books.findIndex(book => book.id === id);
      state.books.splice(index, 1);
      router.push('/');
    }
  },
  actions: {
    async fetchBooks({ commit }) {         
      await axios.get('/api/books')
      .then((response) => {
        commit("FETCH_BOOKS", response.data)
      })
      .catch((error => {
        console.log(error.statusText)
      }))
    },
    setBook({ commit }, book) {
      commit("SET_BOOK", book)
    },
    createBook({ commit }, book) {
      book.pub_date = book.pub_date.toISOString().split('T')[0];
      axios.post('/api/books', book).then(({ data }) => {
        commit("ADD_BOOK", data);
      });
    },
    updateBook({ commit }, book) {
      axios.put(`/api/books/${book.id}`, book).then(({ data }) => {
        commit("EDIT_BOOK", data);
      });
    },
    deleteBook({ commit }, id) {
      console.log(id);
      axios.delete(`/api/books/${id}`).then(() => {
        commit("DELETE_BOOK", id);
      });
    }
  }
})