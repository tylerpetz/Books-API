<template>
  <div id="app">
    <section class="hero is-link is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Books to Read
          </h1>
        </div>
      </div>
    </section>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'App',
  computed: mapState(['books']),
  mounted() {
    this.$store.dispatch("fetchBooks")       
  },
};
</script>

<style lang="scss">
.hero {
  margin-bottom: 2rem;
}

.container {
  max-width: 54rem;
}

.card {
  margin-bottom: 1rem;

  .title {
    text-transform: capitalize;
  }

  .subtitle {
    text-transform: capitalize;
  }
}

.add-book {
  margin-bottom: 2rem;
}

.buttons {
  margin-top: 1rem;
}
</style>