<template>
  <div class="has-text-right">
    <button @click="logUserOut" class="button is-primary logout">Logout</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Logout',
  methods: {
    ...mapActions({
      logout: 'logout'
    }),
    logUserOut() {
      this.logout();
    }
  }
}
</script>
