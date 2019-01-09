<template>
  <section class="container">
    <div class="field is-grouped">
      <b-select placeholder="Sort By" v-model="currentOrder" @change="toggleOrder">
        <option value="id">Date Added</option>
        <option value="author">Author</option>
        <option value="title">Title</option>
      </b-select>
      <b-switch v-model="currentDirection"
        true-value="asc"
        false-value="desc">
        {{ currentDirection }}
      </b-switch>
    </div>
    <div 
      v-for="book in orderedBooks(books)"
      :key="book.id">
      <div class="card">
        <div class="card-content">
          <p class="title">
            {{ book.title }}
          </p>
          <p class="subtitle">
            {{ book.author }}
          </p>
          <a @click="setBook(book)">View Details</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex'
import _ from 'lodash';

export default {
  name: 'BookList',
  data() {
    return {
      currentOrder: 'id',
      currentDirection: 'desc'
    }
  },
  props: ['books'],
  methods: {
    ...mapActions({
      setBook: 'setBook',
    }),
    toggleOrder(event) {
      this.currentOrder = event.target.value
    },
    orderedBooks(books) {
      if (this.currentOrder === 'id')
        return _.orderBy(this.books, this.currentOrder, this.currentDirection)
      else
        return _.orderBy(this.books, [books => books[this.currentOrder].toLowerCase()], this.currentDirection)
    }
  }
}
</script>

