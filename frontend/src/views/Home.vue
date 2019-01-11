<template>
  <div>
    <div v-if="authenticated">
      <Logout />
      <BookForm />
      <BookList :books="books" />
    </div>
    <div v-else>
      <Login />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import BookList from '@/components/BookList.vue'
import BookForm from '@/components/BookForm.vue'
import Login from '@/components/Login.vue'
import Logout from '@/components/Logout.vue'
import axios from 'axios'

export default {
  name: 'Books',
  computed: {
    ...mapState(['books', 'authenticated', 'email', 'token'])
  },
  components: {
    BookList,
    BookForm,
    Login,
    Logout
  },
  methods: {
    ...mapActions({
      fetchBooks: 'fetchBooks',
      checkUser: 'checkUser'
    }),
    checkIfLocalStorage() {
      this.checkUser()
    }
  },
  created() {
    if (!this.authenticated) {
      this.checkIfLocalStorage()
    }
  }
}
</script>
