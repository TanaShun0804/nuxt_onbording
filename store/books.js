import config from '../nuxt.config'

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
    console.log(config)
    if (config.dev) {
      const res = await this.$axios.$get('/books')
      commit('setList', res)
    }
  },
}

export const getters = {
  bookList(state) {
    return state.list
  },
}
