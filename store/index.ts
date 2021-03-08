import Vuex from 'vuex'
import BooksModule from '~/store/books'
import MembersModule from '~/store/members'

export function createStore() {
  return new Vuex.Store({
    modules: {
      BooksModule,
      MembersModule,
    },
  })
}
