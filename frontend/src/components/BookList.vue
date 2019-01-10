<template>
  <section class="container">
    <div class="columns">
      <div class="column filters">
        <div class="field is-grouped">
          <b-select placeholder="Sort By" v-model="currentOrder" @change="toggleOrder">
            <option value="id">Date Added</option>
            <option value="author">Author</option>
            <option value="title">Title</option>
          </b-select>
          <b-switch v-model="currentDirection"
            true-value="desc"
            false-value="asc">
            {{ currentDirection }}
          </b-switch>
        </div>
      </div>
    </div>
    <div 
      v-for="book in orderedBooks()"
      :key="book.id">
      <div class="card">
        <div class="card-content">
          <p class="title">
            {{ book.title }}
          </p>
          <p class="subtitle">
            {{ book.author }}
          </p>
          <a @click="viewDetails(book)">View Details</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex'
import _ from 'lodash';
import router from '../router'

export default {
  name: 'BookList',
  data() {
    return {
      currentOrder: 'id',
      currentDirection: 'asc'
    }
  },
  props: ['books'],
  methods: {
    ...mapActions({
      setBook: 'setBook',
    }),
    viewDetails(book) {
      this.setBook(book);
      router.push(`/books/${book.id}`)
    },
    toggleOrder(event) {
      this.currentOrder = event.target.value
    },
    orderedBooks() {
      if (this.currentOrder === 'id')
        return _.orderBy(this.books, this.currentOrder, this.currentDirection)
      else
        return _.orderBy(this.books, [books => books[this.currentOrder].toLowerCase()], this.currentDirection)
    }
  }
}
</script>

