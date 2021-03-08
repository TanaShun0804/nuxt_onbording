import config from '../nuxt.config'
import { books } from '../db.json'

export const state = () => ({
  list: [],
})

export const mutations = {
  setList(state, payload) {
    state.list = payload
  },
}

export const actions = {
  async getList({ commit }) {
    let res
    if (config.dev) {
      res = await this.$axios.$get('/books') // axios学習用
    } else {
      res = await books
    }
    commit('setList', res)
  },
}

export const getters = {
  bookList(state) {
    return state.list
  },
}
