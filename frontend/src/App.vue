<template>
  <div id="app">
    <section class="hero is-link is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Books to Read
          </h1>
          <h2 class="subtitle">
            Tyler Petz
          </h2>
        </div>
      </div>
    </section>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
.hero {
  margin-bottom: 2rem;
}

.container {
  max-width: 54rem;
}

.card {
  margin-bottom: 2rem;
}
</style>