<template>
  <div id="app">
    <div class="heading">
      <h1>Books</h1>
    </div>
<!--     <Form
      v-for="book in books"
      v-bind="book"
      :key="book.id"
      @update="update"
      @delete="del"
    ></Form> -->
    <div v-for="book in books"
      v-bind="book"
      :key="book.id">
      {{ book }}
    </div>
    <div>
      <button @click="create()">Add</button>
    </div>
  </div>
</template>

<script>
function Book({id, author, title, details, pubdate}) {
  this.id = id;
  this.author = author;
  this.title = title;
  this.details = details;
  this.pubdate = pubdate;
}

import axios from 'axios';
import Form from '../components/Form.vue';

export default {
  name: 'Books',
  data() {
    return {
      books: []
    }
  },
  methods: {
    create() {
      axios.get('/api/books/create').then(({ data }) => {
        this.books.push(new Book(data));
      });
    },
    read() {
      axios.get('/api/books').then(({ data }) => {
        console.log(data);
        data.forEach(book => {
          this.books.push(new Book(book));
        });
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
    }
  },
  created() {
    this.read();
  },
  components: {
    Form
  }
}
</script>
