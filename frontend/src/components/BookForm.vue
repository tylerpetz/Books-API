<template>
  <div class="card add-book">
    <div class="card-header">
      <p class="card-header-title">
        Add Book
      </p>
    </div>
    <div class="card-content">
      <form v-on:submit.prevent="createBook(book)" class="columns is-multiline">
        <div class="column is-one-third">
          <div class="field">
            <label class="label">Author</label>
            <div class="control">
              <input class="input" v-model="book.author" type="text" />
            </div>
          </div>
        </div>
        <div class="column is-one-third">
          <div class="field">
            <label class="label">Title</label>
            <div class="control">
              <input class="input" v-model="book.title" type="text" />
            </div>
          </div>
        </div>
        <div class="column is-one-third">
          <b-field label="Publish Date">
            <b-datepicker
              v-model="book.pub_date"
              placeholder="Click to select..."
              icon="calendar-today">
            </b-datepicker>
          </b-field>
        </div>
        <div class="column is-full">
          <div class="field">
            <label class="label">Description</label>
            <div class="control">
              <textarea class="textarea" v-model="book.details" />
            </div>
          </div>
          <button type="submit" class="button is-primary">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import moment from 'moment'

export default {
  name: 'BookForm',
  data() {
    return {
      book: {
        author: '',
        title: '',
        details: '',
        pub_date: null
      }
    }
  },
  methods: {
    ...mapActions({
      createBook: 'createBook',
    }),
  },
  filters: {
    properCase(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  }
}
</script>