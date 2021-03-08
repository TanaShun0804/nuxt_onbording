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

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      books: 'books/bookList',
    }),
  },
  created() {
    this.getList()
  },
  methods: {
    ...mapActions({
      getList: 'books/getList',
    }),
  },
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
