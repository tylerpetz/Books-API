<template>
  <div class="card add-book">
    <div class="card-header">
      <p class="card-header-title">
        Add Book
      </p>
    </div>
    <div class="card-content">
      <form v-on:submit.prevent="createAndClear" class="columns is-multiline">
        <div class="column is-one-third">
          <div class="field">
            <label class="label">Title</label>
            <div class="control">
              <input class="input" v-model="book.title" type="text" required />
            </div>
          </div>
        </div>
        <div class="column is-one-third">
          <div class="field">
            <label class="label">Author</label>
            <div class="control">
              <input class="input" v-model="book.author" type="text" required />
            </div>
          </div>
        </div>
        <div class="column is-one-third">
          <b-field label="Publish Date">
            <b-datepicker
              v-model="book.pub_date"
              placeholder="Click to select..."
              icon="calendar-today"
              required>
            </b-datepicker>
          </b-field>
        </div>
        <div class="column is-full">
          <div class="field">
            <label class="label">Description</label>
            <div class="control">
              <textarea class="textarea" v-model="book.details" required/>
            </div>
          </div>
          <button type="submit" class="button is-primary">Add Book</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'BookForm',
  data() {
    return {
      book: {
        title: '',
        author: '',
        details: '',
        pub_date: null
      }
    }
  },
  methods: {
    ...mapActions({
      createBook: 'createBook',
    }),
    createAndClear() {
      this.createBook(this.book)
      this.$toast.open(`<b>${this.book.title}</b> was added to your reading list.`)
      this.book = {
        title: '',
        author: '',
        details: '',
        pub_date: null
      }
    }
  },
  filters: {
    properCase(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  }
}
</script>