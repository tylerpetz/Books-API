<template>
  <div>
    Register or <router-link to="login">Log In</router-link>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Register',
  data() {
    return {
      user: {
        name: "Dude",
        email: "tylerpetz123asdfasdf@gmail.com",
        password: "dank123",
        password_confirmation: "dank123"
      }
    }
  },
  computed: {
    ...mapActions({
      registerUser: 'registerUser'
    }),
  },
  mounted() {
    // add user to state and go back home
    this.registerUser(this.user)
  }
}
</script>