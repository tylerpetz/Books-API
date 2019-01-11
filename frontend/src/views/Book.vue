<template>
  <div>
    <Logout />
    <div class="card">
      <div class="card-content">
        <div v-if="editingBook">
          <form v-on:submit.prevent="saveBook" class="columns is-multiline">
            <div class="column is-one-third">
              <div class="field">
                <label class="label">Title</label>
                <div class="control">
                  <input class="input" v-model="selectedBook.title" type="text" required />
                </div>
              </div>
            </div>
            <div class="column is-one-third">
              <div class="field">
                <label class="label">Author</label>
                <div class="control">
                  <input class="input" v-model="selectedBook.author" type="text" required />
                </div>
              </div>
            </div>
            <div class="column is-one-third">
              <b-field label="Publish Date">
                <b-datepicker
                  v-model="selectedBook.pub_date"
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
                  <textarea class="textarea" v-model="selectedBook.details" required />
                </div>
              </div>
              <button type="submit" class="button is-primary">Save Book</button>
            </div>
          </form>
        </div>
        <div v-else>
          <p class="title">
            {{ selectedBook.title }}
          </p>
          <p class="subtitle">
            {{ selectedBook.author }}
          </p>
          <p>Details: {{ selectedBook.details }}</p>
          <p>Published on: {{ fixDate }}</p>
        </div>
        <div class="buttons are-medium" v-if="!editingBook">
          <a class="button is-info" @click="toggleEdit">Edit</a>
          <a class="button is-danger" @click="confirmRemove">Delete</a>
        </div>
      </div>
    </div>
    <router-link to="/">Go Back</router-link>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Logout from '@/components/Logout.vue'
import moment from 'moment'
import router from '@/router'

export default {
  name: 'Book',
  data() {
    return {
      editingBook: false
    }
  },
  components: {
    Logout
  },
  computed: {
    ...mapState(['selectedBook']),
    fixDate() {
      return moment(this.selectedBook.pub_date).format('MM/DD/YYYY')
    }
  },
  methods: {
    ...mapActions({
      updateBook: 'updateBook',
      deleteBook: 'deleteBook',
      logout: 'logout'
    }),
    toggleEdit() {
      this.editingBook = !this.editingBook;
    },
    saveBook() {
      // API Call
      this.updateBook(this.selectedBook)

      // Switch back to details view
      this.toggleEdit()

      // Show notification
      this.$toast.open({
        duration: 3000,
        message: `<b>${this.selectedBook.title}</b> was updated.`,
        position: 'is-bottom',
        type: 'is-success'
      })
    },
    confirmRemove() {
      // Show confirm dialog
      this.$dialog.confirm({
        title: `Deleting ${this.selectedBook.title}`,
        message: 'Are you sure you want to <b>delete</b> this book? This action cannot be undone.',
        confirmText: 'Delete Book',
        type: 'is-danger',
        hasIcon: true,
        onConfirm: () => {
          // API Call
          this.deleteBook(this.selectedBook.id)

          // Show notification
          this.$toast.open({
            duration: 3000,
            message: `<b>${this.selectedBook.title}</b> has been deleted`,
            position: 'is-bottom',
            type: 'is-success'
          })

          // Navigate home
          router.push('/')
        }
      })
    }
  }
}
</script>

