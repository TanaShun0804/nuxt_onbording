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
    const sleep = (msec) => new Promise((resolve) => setTimeout(resolve, msec))
    await sleep(1000)
    const res = await this.$axios.$get('/members')
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
