<template>
  <div>
    <div v-if="authenticated">
      <BookForm />
      <BookList :books="books" />
    </div>
    <div v-else>
      <Register />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BookList from '../components/BookList.vue';
import BookForm from '../components/BookForm.vue';
import Register from '../components/Register.vue';

export default {
  name: 'Books',
  data() {
    return {
      authenticated: false
    }
  },
  computed: mapState(['books']),
  components: {
    BookList,
    BookForm,
    Register
  },
  mounted() {
    console.log('mounted');
  }
}
</script>