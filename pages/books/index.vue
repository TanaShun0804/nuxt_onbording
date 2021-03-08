<template>
  <div class="container">
    <ul v-for="book in books" :key="book.id">
      <li class="book-list">
        <h3>
          {{ book.name }}
        </h3>
        <div class="book-detail">
          <img v-bind:src="book.image" class="book-image" />
          <p class="book-description">
            {{ book.description }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { getModule } from 'vuex-module-decorators'
import BooksModule, { Book } from '../../store/books'

@Component({})
export default class Index extends Vue {
  booksModule = getModule(BooksModule, this.$store)

  get books(): Book[] {
    return this.booksModule.books
  }

  created() {
    this.booksModule.getList()
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.book-list {
  min-height: 5rem;
  max-width: 60rem;
  padding: 10px;
  margin: 10px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 1px 0 rgba(161, 161, 161, 0.5);

  .book-detail {
    display: flex;
    padding: 10px;

    .book-image {
      width: 80px;
      margin-right: 10px;
    }
    .book-description {
      padding: 5px;
    }
  }
}
</style>
