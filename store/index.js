import Vuex from 'vuex'


const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      level: 0,
      hp: 0,
      mp: 0,
      ex: 0,
      gold: 1000,
      commentOne: 'けいけんちを１かくとく。',
      commentTwo: '３ゴールドをてにいれた',
      page: 0
    }),
    mutations: {
      increment (state) {
        state.counter++
      },
      hpChange (state, hp ) {
        state.hp = hp
      },
      mpChange (state, mp ) {
        state.mp = mp
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
