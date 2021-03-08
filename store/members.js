import config from '../nuxt.config'
import { members } from '../db.json'
export const state = () => ({
  list: [],
  loading: true,
})

export const mutations = {
  setList(state, payload) {
    state.list = payload
  },
  setLoading(state, payload) {
    state.loading = payload
  },
}

export const actions = {
  async getList({ commit }) {
    let res
    if (config.dev) {
      res = await this.$axios.$get('/members') // axios学習用
    } else {
      res = await members
    }
    commit('setList', res)
    commit('setLoading', false)
  },
}

export const getters = {
  memberList(state) {
    return state.list
  },
  memberForDashBoard(state) {
    // ダッシュボード用仮メソッド
    return state.list[0]
  },
  memberLoading(state) {
    return state.loading
  },
}
