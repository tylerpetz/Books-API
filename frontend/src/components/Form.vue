<template>
    <div class="form">
        <h3>Name: {{ author | properCase }}</h3>
        <h3>Author: {{ title | properCase }}</h3>
        <button @click="del">Delete</button>
    </div>
</template>

<script>
  export default {
    name: 'Form',
    methods: {
      update(val) {
        this.$emit('update', this.id, val);
      },
      del() {
        this.$emit('delete', this.id);
      }
    },
    props: ['id', 'author', 'title', 'pubdate'],
    filters: {
      properCase(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    }
  }
</script>