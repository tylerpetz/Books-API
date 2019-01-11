<template>
  <div>
    <div class="container has-text-centered">
      <div class="column is-4 is-offset-4">
        <form v-on:submit.prevent="submitForm">
          <h3 class="title has-text-grey">Register</h3>
          <p class="subtitle has-text-grey">Please fill out the form below.</p>
          <div class="field">
            <div class="control">
              <input class="input" type="text" v-model="user.name" placeholder="Name" required>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input class="input" type="email" v-model="user.email" placeholder="Your Email" autofocus="" required>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input class="input" :class="{ 'is-danger': error }" type="password" v-model="user.password" placeholder="Enter Password" required>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input class="input" :class="{ 'is-danger': error }" type="password" v-model="user.password_confirmation" placeholder="Confirm Password" required>
            </div>
          </div>
          <div class="field">
            <label class="checkbox">
              <input type="checkbox" v-model="remember_token">
              Remember me
            </label>
          </div>
          <button class="button is-block is-primary is-large is-fullwidth">Register</button>
        </form>
        <p class="has-text-grey">
          Already registered? <router-link to="/">Log In</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import router from '@/router'

export default {
  name: 'Register',
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
      },
      remember_token: true,
      error: false
    }
  },
  methods: {
    ...mapActions({
      registerUser: 'registerUser'
    }),
    submitForm() {
      // If the passwords don't match
      if (this.user.password !== this.user.password_confirmation) {

        // Set the error class and open the notification
        this.error = true
        this.$toast.open({
          duration: 3000,
          message: `Passwords do not match.`,
          position: 'is-bottom',
          type: 'is-danger'
        })
      } else {
        this.userPassed()
      }
    },
    userPassed() {
      // Clear any previously set errors
      this.error = false

      // API Call
      this.registerUser(this.user, this.remember_token)

      // Todo: fix this
      setTimeout(function () {
        // Route back home
        router.push('/')
      }, 300)

      this.$toast.open({
        duration: 3000,
        message: `Thanks for registering ${this.user.name}!`,
        position: 'is-bottom',
        type: 'is-primary'
      })
    }
  }
}
</script>
