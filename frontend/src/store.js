import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import moment from 'moment'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books: [],
    selectedBook: null
  },
  mutations: {
    FETCH_BOOKS(state, books) {
      books.forEach(function(book){
        book['pub_date'] = moment(book['pub_date']).toDate()
      });

      state.books = books
    },
    SET_BOOK(state, selectedBook) {
      state.selectedBook = selectedBook
      router.push(`/books/${selectedBook.id}`);
    },
    ADD_BOOK(state, book) {
      book.pub_date = moment(book.pub_date);
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
      book.pub_date = moment(book.pub_date).toDate();
      commit("SET_BOOK", book)
    },
    createBook({ commit }, book) {
      book.pub_date = moment(book.pub_date).toDate();
      axios.post('/api/books', book).then(({ data }) => {
        commit("ADD_BOOK", data);
      });
    },
    updateBook({ commit }, book) {
      book.pub_date = moment(book.pub_date).toDate();
      axios.put(`/api/books/${book.id}`, book).then(({ data }) => {
        commit("EDIT_BOOK", data);
      });
    },
    deleteBook({ commit }, id) {
      axios.delete(`/api/books/${id}`).then(() => {
        commit("DELETE_BOOK", id);
      });
    }
  }
})