<template>
  <div id="app">
    <section class="hero is-light is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            <router-link to="/">
              <b-icon
                type="is-danger"
                size="is-medium"
                icon="heart">
              </b-icon>Books to Read
            </router-link>
          </h1>
        </div>
      </div>
    </section>
    <div class="container main">
      <router-view/>
    </div>
    <footer class="footer has-background-grey-light has-text-light">
      <div class="content has-text-centered">
        <p>Created by <a href="https://tyler.works" target="_blank" rel="noreferrer">Tyler Petz</a> | 2019</p>
      </div>
    </footer>
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

  .title {
    a {
      color: #363636;

      .icon {
        margin-right: 0.75rem;
        position: relative;
        top: 1px;
      }
    }
  }
}

.main {
  @media screen and (max-width: 1024px) {
    padding: 0 10px;
  }
}

.container {
  max-width: 54rem;
}

.card {
  margin-bottom: 1rem;

  .title {
    text-transform: capitalize;

    @media screen and (max-width: 640px) {
      font-size: 1.5rem;
    }
  }

  .subtitle {
    text-transform: capitalize;

    @media screen and (max-width: 640px) {
      font-size: 1.125rem;
    }
  }
}

.add-book {
  margin-bottom: 2rem;

  .card-header-title {
    padding-bottom: 0.25rem;
    padding-top: 0.25rem;
  }

  @media screen and (max-width: 640px) {
    .column {
      padding: 0.5rem 0.75rem;
    }
  }
}

.buttons {
  margin-top: 1rem;
}

.filters {
  .field.is-grouped {
    justify-content: center;
  }

  .switch {
    .control-label {
      text-transform: capitalize;
    }
  }
}

.footer {
  margin-top: 5rem;
}

.notices {
  b {
    text-transform: capitalize;
  }
}

.modal-card-title {
  text-transform: capitalize;
}
</style>