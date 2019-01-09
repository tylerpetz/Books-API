<template>
  <div>
    <BookList :books="books" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BookList from '../components/BookList.vue';

export default {
  name: 'Books',
  computed: mapState(['books']),
  created() {
    this.$store.dispatch("fetchBooks")       
  },
  components: {
    BookList
  }
}
</script>