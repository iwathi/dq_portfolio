import Vuex from 'vuex'


const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      ex: 0,
      page: 0
    }),
    mutations: {
      increment (state) {
        state.counter++
      },
      pageChange (state, num) {
        state.page = num
        state.ex++
      }
    }
  })
}

export default createStore
