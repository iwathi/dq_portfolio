import Vuex from 'vuex'


const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      ex: 0,
      commentOne: 'けいけんちを１かくとく。',
      commentTwo: '３ゴールドをてにいれた',
      gold: 1000,
      page: 0
    }),
    mutations: {
      increment (state) {
        state.counter++
      },
      goldChange (state, gold) {
        state.gold = gold
      },
      pageChange (state, num) {
        state.page = num
        state.ex++
        state.gold++
      },
      commentChange (state, strOne, strTwo) {
        state.commentOne = strOne
        state.commentTwo = strTwo
      }
    }
  })
}

export default createStore
