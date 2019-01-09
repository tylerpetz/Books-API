<template>
  <section class="container">
    <div 
      v-for="book in books"
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

export default {
  name: 'BookList',
  props: ['books'],
  methods: {
    ...mapActions({
      setBook: 'setBook',
    }),
  }
}
</script>

