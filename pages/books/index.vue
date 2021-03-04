<template>
  <ul>
    <li v-for="book in books" :key="book.id">
      {{ book.name }}
      <ul>
        <li>
          {{ book.description }}
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data: () => ({
    //
  }),
  computed: {
    ...mapGetters({
      books: 'books/bookList',
    }),
  },
  mounted() {
    this.getList()
  },
  methods: {
    ...mapActions({
      getList: 'books/getList',
    }),
  },
}
</script>
