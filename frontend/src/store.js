import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'

Vue.use(Vuex)

function Book({id, author, title, details, pubdate}) {
  this.id = id;
  this.author = author;
  this.title = title;
  this.details = details;
  this.pubdate = pubdate;
}

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
    }
  },
  actions: {
    fetchBooks({ commit }) {         
      axios.get('/api/books')
      .then((response) => {
        commit("FETCH_BOOKS", response.data)
      })
      .catch((error => {
        console.log(error.statusText)
      }))
    },
    setBook({ commit }, book) {
      commit("SET_BOOK", book)
    }
    /* create() {
      axios.get('/api/books/create').then(({ data }) => {
        this.books.push(new Book(data));
      });
    },
    update(id, color) {
      axios.put(`/api/books/${id}`, { color }).then(() => {
        this.books.find(book => book.id === id).color = color;
      });
    },
    del(id) {
      axios.delete(`/api/books/${id}`).then(() => {
        let index = this.books.findIndex(book => book.id === id);
        this.books.splice(index, 1);
      });
    } */
  }
})