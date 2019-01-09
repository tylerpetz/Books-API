<template>
  <div>
    <BookForm />
    <BookList :books="books" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BookList from '../components/BookList.vue';
import BookForm from '../components/BookForm.vue';

export default {
  name: 'Books',
  computed: mapState(['books']),
  components: {
    BookList,
    BookForm
  }
}
</script>