<template>
  <div class="container has-text-centered">
    <div class="column is-4 is-offset-4">
      <form v-on:submit.prevent="submitForm">
        <h3 class="title has-text-grey">Login</h3>
        <p class="subtitle has-text-grey">Please login to proceed.</p>
        <div class="field">
          <div class="control">
            <input class="input is-large" v-model="user.email" type="email" placeholder="Your Email" autofocus="">
          </div>
        </div>
        <div class="field">
          <div class="control">
            <input class="input is-large" v-model="user.password" type="password" placeholder="Your Password">
          </div>
        </div>
        <div class="field">
          <label class="checkbox">
            <input type="checkbox" v-model="user.remember_token">
            Remember me
          </label>
        </div>
        <button class="button is-block is-primary is-large is-fullwidth">Login</button>
      </form>
      <p class="has-text-grey">
        New User? Please <router-link to="register">Register</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import router from '@/router'

export default {
  name: 'Login',
  data() {
    return {
      user: {
        email: "",
        password: "",
        remember_token: true
      },
      error: false
    }
  },
  methods: {
    ...mapActions({
      checkLogin: 'checkLogin'
    }),
    submitForm() {
      this.userPassed()
    },
    userPassed() {
      // Clear any previously set errors
      this.error = false

      // API Call
      this.checkLogin(this.user, this.remember_token)

      // Forward the route
      router.push('/')
    }
  }
}
</script>
