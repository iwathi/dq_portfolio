import Vuex from 'vuex'
import Vue from 'vue'


const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      level: 0,
      hp: 0,
      mp: 0,
      ex: 0,
      gold: 1000,
      commandList: [
        {
          name: 'はなす',
          commandState: 0,
          display: true
        },
        {
          name: 'しらべる',
          commandState: 1,
          display: true
        },
        {
          name: 'つよさ',
          commandState: 2,
          display: true
        },
        {
          name: 'さくせん',
          commandState: 3,
          display: true
        },
        {
          name: 'どうぐ',
          commandState: 4,
          display: false
        },
        {
          name: 'じゅもん',
          commandState: 5,
          display: false
        },
      ],
      page: 0,
      spellDisplay: false,
      toolDisplay: false,
      strengthDisplay: false,
      strategyDisplay: false,
      commandState: -1,
      commandNumber: 0,
      commentState: -1,
      commentNumber: 0,
      commentDisplay: false,
      choiceState: -1,
      choiceNumber: 0,
      choiceDisplay: false,
      toolCommand: false,
      spellCommand: false,
      lx: 2,
      rx: 2,
      fy: 2,
      by: 3,
      xx: 8,
      yy: 5,
      xy: [
        [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        [3, 9, 9, 9, 9, 9, 9, 9, 9, 9, 3],
        [3, 9, 4, 9, 9, 1, 9, 9, 5, 9, 3],
        [3, 9, 2, 2, 2, 2, 2, 2, 2, 9, 3],
        [3, 9, 2, 2, 2, 2, 2, 2, 2, 9, 3],
        [3, 9, 2, 2, 2, 2, 2, 2, 2, 9, 3],
        [3, 9, 2, 2, 2, 2, 2, 2, 2, 9, 3],
        [3, 9, 2, 2, 2, 2, 2, 2, 2, 9, 3],
        [3, 9, 2, 2, 2, 0, 2, 2, 2, 9, 3],
        [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
      ]
    }),

    mutations: {
      increment (state) {
        state.counter++
      },
      setxxyy (state, payload) {
        //state.xy[x][y] = value
        state.xx = payload['x']
        state.yy = payload['y']
      },
      setxy (state, payload) {
        //state.xy[x][y] = value
        const x = payload['x']
        const y = payload['y']
        const value = payload['value']

        Vue.set(state.xy[x], y, value)
      },
      setby (state, value) {
        state.by = value
      },
      setfy (state, value) {
        state.fy = value
      },
      setrx (state, value) {
        state.rx = value
      },
      setlx (state, value) {
        state.lx = value
      },
      setCommandListToolDisplay (state, flag) {
        state.commandList[4].display = flag
      },
      setCommandListSpellDisplay (state, flag) {
        state.commandList[5].display = flag
      },
      setToolCommand (state, flag) {
        state.toolCommand = flag
      },
      setSpellCommand (state, flag) {
        state.spellCommand = flag
      },
      setToolDisplay (state, flag) {
        state.toolDisplay = flag
        if(flag == true){
          state.commentDisplay = false
          state.choiceDisplay = false
          state.strategyDisplay = false
          state.strengthDisplay = false
          state.spellDisplay = false
        }
      },
      setCommentDisplay (state, flag) {
        state.commentDisplay = flag
        if(flag == true){
          state.choiceDisplay = false
          state.strategyDisplay = false
          state.strengthDisplay = false
          state.spellDisplay = false
          state.toolDisplay = false
        }
      },
      setSpellDisplay (state, flag) {
        state.spellDisplay = flag

        if(flag == true){
          state.commentDisplay = false
          state.choiceDisplay = false
          state.strengthDisplay = false
          state.strategyDisplay = false
          state.toolDisplay = false
        }
      },
      setStrategyDisplay (state, flag) {
        state.strategyDisplay = flag

        if(flag == true){
          state.commentDisplay = false
          state.choiceDisplay = false
          state.strengthDisplay = false
          state.spellDisplay = false
          state.toolDisplay = false

        }
      },
      setStrengthDisplay (state, flag) {
        state.strengthDisplay = flag
        if(flag == true){
          state.commentDisplay = false
          state.choiceDisplay = false
          state.strategyDisplay = false
          state.spellDisplay = false
          state.toolDisplay = false
        }
      },
      setChoiceDisplay (state, flag) {
        state.choiceDisplay = flag
        if(flag == true){
          state.strategyDisplay = false
          state.strengthDisplay = false
          state.spellDisplay = false
          state.toolDisplay = false
        }
      },
      setCommentNumber (state, addNum) {
        state.commentNumber = state.commentNumber + addNum
      },
      resetChoiceState (state, flag) {
        state.choiceState = -1
      },
      setChoiceState (state, choiceState) {
        state.choiceState = choiceState
        state.choiceNumber = 0
      },
      resetCommentNumber (state, flag) {
        state.commentNumber = 0
      },
      setCommandState (state, commandState) {
        state.commandState = commandState
        state.choiceState = -1
      },
      setCommentState (state, commentState) {
        state.commentState = commentState
        state.commentNumber = 0
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
      }
    }
  })
}

export default createStore
