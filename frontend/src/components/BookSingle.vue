<template>
  <div>
    <div class="card">
      <div class="card-content">
        <p class="title">
          {{ selectedBook.title }}
        </p>
        <p class="subtitle">
          {{ selectedBook.author }}
        </p>
        <p>{{ selectedBook.details }}</p>
        <p>Published on: {{ selectedBook.pub_date }}</p>
      </div>
    </div>
    <router-link to="/">Go Back</router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Book',
  computed: mapState(['selectedBook'])
}
</script>

