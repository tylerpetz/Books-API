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
    createAndClear(event) {
      // If no date is selected, highlight the input and show the notification
      if (this.book.pub_date === null) {
        event.target[2].classList.add('is-danger')

        this.$toast.open({
          duration: 3000,
          message: `Please select a Publish Date`,
          position: 'is-bottom',
          type: 'is-danger'
        })
        return
      }

      // API Call
      this.createBook(this.book)

      // Success
      this.$toast.open({
        duration: 3000,
        message: `<b>${this.book.title}</b> was added to your reading list.`,
        position: 'is-bottom',
        type: 'is-primary'
      })

      // Remove any highlights from invalid inputs
      event.target[2].classList.remove('is-danger')

      // Reset the data
      this.book = {
        title: '',
        author: '',
        details: '',
        pub_date: null
      }
    }
  }
}
</script>