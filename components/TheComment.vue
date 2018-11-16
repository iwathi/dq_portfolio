<template>
  <section>
    <div class="comment-list" @click="commentNext">
      <ul v-for="i in 4" :key="i">
        <li>{{comments[commentState][commentNumber+i-1]}}</li>
      </ul>
      <p class="next-allow">▼</p>
    </div>
  </section>
</template>

<script>
const commentNumInit = 0;

export default {
  components: {
  },
  computed: {
    commentNumber: function(){
      return this.$store.state.commentNumber
    },
    choiceDisplay: {
      get: function(){
        return this.$store.state.choiceDisplay
      },
    },
    choiceState: {
      get: function(){
        return this.$store.state.choiceState
      },
    },
    commentState: {
      get: function(){
        const cmds = this.$store.state.commandState
        const choices = this.$store.state.choiceState
        const lx = this.$store.state.lx
        const rx = this.$store.state.rx
        const fy = this.$store.state.fy
        const by = this.$store.state.by

        //console.log(cmds + ", " + lx + ", " + rx + ", " + fy + ", " + by + ";")

        // はなすコマンド
        if(cmds == 0){
          if(lx == 1 || rx == 1 || fy == 1 || by == 1){
            if(choices == 0){
              return 11
            }else if(choices == 1){
              return 12
            }else if(choices == 2){
              return 13
            }else{
              return 10
            }
          }else{
            return 0
          }

          // しらべるコマンド
        }else if(cmds == 1){
          if(lx == 4 || rx == 4 || fy == 4 || by == 4){
            this.commandListDisplay(4)
            return 20
          }
          if(lx == 5 || rx == 5 || fy == 5 || by == 5){
            this.commandListDisplay(5)
            return 21
          }else{
            return 1
          }

        }else if(cmds == 2){

        }else if(cmds == 3){

        }else if(cmds == 4){

        }
        return 0
      },
    }
  },
  methods: {
    commandListDisplay: function(commandNumber) {
      if(commandNumber == 4){
        this.$store.commit('setCommandListToolDisplay',true)
      }else if(commandNumber == 5){
        this.$store.commit('setCommandListSpellDisplay',true)
      }else{
      }
    },
    commentNext: function() {

      if(this.choiceDisplay == false ){

        // ページ送り
        if(this.comments[this.commentState].length > this.commentNumber + 4){
          this.$store.commit('setCommentNumber', 4)

          // 途中でこまんどに変更があったらチェンジ
        }else{
          this.$store.commit('setCommentState', -1)
          this.$store.commit('setCommentDisplay', false)
          this.$store.commit('resetChoiceState', 0)
        }

        // 選択肢を表示するとき、などイベント関連はここに追加
        if(this.commentState == 10 && this.commentNumber == 4){
          this.$store.commit('setChoiceDisplay', true)
        }
        if(this.commentState == 20 && this.commentNumber == 4){
          this.$store.commit('setToolCommand', true)
        }
        if(this.commentState == 21 && this.commentNumber == 4){
          this.$store.commit('setSpellCommand', true)
        }
      }
},
  },
  data: function() {
    return {
      commentTmpState: -1,
      commentLists: [],
      // commentStateとcommentListのindexは等しくする
      windowList: [

      ],
      comments: [
        // 0
        [
          'そのほうこうには　だれも　いない。',
        ],
        // 1
        [
          'げすとさんは　じぶんの　あしもとを',
          'しらべた。',
          'しかし　なにも　みつからなかった。',
        ],
        // 2
        [
          'つよさ1',
          'test2',
          'test3',
          'test4',
          'つよさ',
          'test5',
          'test6',
          'test7'
        ],
        // 3
        [
          'つよさ1',
          'test2',
          'test3',
          'test4',
          'つよさ',
          'test5',
          'test6',
          'test7'
        ],
        // 4
        [
          'つよさ1',
          'test2',
          'test3',
          'test4',
          'つよさ',
          'test5',
          'test6',
          'test7'
        ],
        // 5
        [
          'つよさ1',
          'test2',
          'test3',
          'test4',
          'つよさ',
          'test5',
          'test6',
          'test7'
        ],
        // 6
        [
          'つよさ1',
          'test2',
          'test3',
          'test4',
          'つよさ',
          'test5',
          'test6',
          'test7'
        ],
        // 7
        [
          'つよさ1',
          'test2',
          'test3',
          'test4',
          'つよさ',
          'test5',
          'test6',
          'test7'
        ],
        // 8
        [
          'つよさ1',
          'test2',
          'test3',
          'test4',
          'つよさ',
          'test5',
          'test6',
          'test7'
        ],
        // 9
        [
          'つよさ1',
          'test2',
          'test3',
          'test4',
          'つよさ',
          'test5',
          'test6',
          'test7'
        ],
        // 10
        [
          'おお　げすとさん！',
          'よくぞ　きてくれた！',
          'わしは　とても　うれしいぞ。',
          '',
          // 選択肢を表示 state 0, number 1
          'なにを　しりたいのじゃ？',
          '',
          '',
          '',
          'いまは　とくにないようじゃな',
          '何か　知りたいことができたら',
          'また　聞きにくるがよい！',
          'さらば　じゃ！'
        ],
        // 11
        [
          '',
          '',
          '',
          '',
          'いわてぃの　スキル　じゃな',
          '',
          '',
          '',
          'うぇぶけい　のスキルとしては',
          'HTML, Javascript, CSS',
          'Vue.js, Ruby on Rails　などのスキルが',
          '多少あるようじゃ',
          'スクリプト言語が　好きなようで',
          'Python, Rubyなどを多用しておる',
          '',
          '',
          'あとはArduinoなどをいじっておるため',
          'C言語も多少はできるようじゃの',
        ],
        // 12
        [
          '',
          '',
          '',
          '',
          'いわてぃの　せいかぶつ　じゃな',
          '',
          '',
          '',
          'げんじょうは　これといったせいかぶつは',
          'ないようじゃの',
          ''
        ],
        // 13
        [
          '',
          '',
          '',
          '',
          'いわてぃが　次のれべるになる',
          'には　あと１０００ＰＶが',
          'ひつようじゃ',
          '',
        ],
        // 14
        [
          'つよさ1',
          'test2',
          'test3',
          'test4',
          'つよさ',
          'test5',
          'test6',
          'test7'
        ],
        // 15
        [
          'つよさ1',
          'test2',
          'test3',
          'test4',
          'つよさ',
          'test5',
          'test6',
          'test7'
        ],
        // 16
        [
          'つよさ1',
          'test2',
          'test3',
          'test4',
          'つよさ',
          'test5',
          'test6',
          'test7'
        ],
        // 17
        [
          'つよさ1',
          'test2',
          'test3',
          'test4',
          'つよさ',
          'test5',
          'test6',
          'test7'
        ],
        // 18
        [
          'つよさ1',
          'test2',
          'test3',
          'test4',
          'つよさ',
          'test5',
          'test6',
          'test7'
        ],
        // 19
        [
          'つよさ1',
          'test2',
          'test3',
          'test4',
          'つよさ',
          'test5',
          'test6',
          'test7'
        ],
        // 20
        [
          'げすとさんは　じぶんの　あしもとを',
          'しらべた。',
          'げすとさんは　たからばこを　あけた！',
          '',
          'どうぐいちらん　をてにいれた',
          'こまんどに　どうぐ　がついか　された！',
        ],
        // 21
        [
          'げすとさんは　じぶんの　あしもとを',
          'しらべた。',
          'げすとさんは　たからばこを　あけた！',
          '',
          'サルでもわかるまほう入門　をてにいれ',
          '全ページを　どくは　した',
          'こまんどに　じゅもん　がついか　された！',
        ],
        // 22
        [
          'つよさ1',
          'test2',
          'test3',
          'test4',
          'つよさ',
          'test5',
          'test6',
          'test7'
        ],
        // 23
        [
          'つよさ1',
          'test2',
          'test3',
          'test4',
          'つよさ',
          'test5',
          'test6',
          'test7'
        ],
        // 24
        [
          'つよさ1',
          'test2',
          'test3',
          'test4',
          'つよさ',
          'test5',
          'test6',
          'test7'
        ],
        // 25
        [
          'つよさ1',
          'test2',
          'test3',
          'test4',
          'つよさ',
          'test5',
          'test6',
          'test7'
        ],
        // 26
        [
          'つよさ1',
          'test2',
          'test3',
          'test4',
          'つよさ',
          'test5',
          'test6',
          'test7'
        ],
        // 27
        [
          'つよさ1',
          'test2',
          'test3',
          'test4',
          'つよさ',
          'test5',
          'test6',
          'test7'
        ],
        // 28
        [
          'つよさ1',
          'test2',
          'test3',
          'test4',
          'つよさ',
          'test5',
          'test6',
          'test7'
        ],
        // 29
        [
          'つよさ1',
          'test2',
          'test3',
          'test4',
          'つよさ',
          'test5',
          'test6',
          'test7'
        ],
        // 30
        [
          'おお　げすとさん！',
          'よくぞ　きてくれた！',
          'わしは　とても　うれしいぞ。',
          '',
          // 選択肢を表示 state 0, number 1
          'なにを　しりたいのじゃ？',
          '',
          '',
          '',
          'いまは　とくにないようじゃな',
          '何か　知りたいことができたら',
          'また　聞きにくるがよい！',
          'さらば　じゃ！'
        ],
        // 31
        [
          'いわてぃの　スキル　じゃな',
          '',
          '',
          '',
          'うぇぶけい　のスキルとしては',
          'HTML, Javascript, CSS',
          'Vue.js, Ruby on Rails　などのスキルが',
          '多少あるようじゃ',
          'スクリプト言語が　好きなようで',
          'Python, Rubyなどを多様しておる',
          '',
          '',
          'あとはArduinoなどをいじっておるため',
          'C言語も多少はできるようじゃの',
        ],
        // 32
        [
          'いわてぃの　せいかぶつ　じゃな',
          '',
          '',
          '',
          'げんじょうは　これといったせいかぶつは',
          'ないようじゃの',
          ''
        ],
        // 33
        [
          'つよさ1',
          'test2',
          'test3',
          'test4',
          'つよさ',
          'test5',
          'test6',
          'test7'
        ],
        // 34
        [
          'つよさ1',
          'test2',
          'test3',
          'test4',
          'つよさ',
          'test5',
          'test6',
          'test7'
        ],
        // 35
        [
          'つよさ1',
          'test2',
          'test3',
          'test4',
          'つよさ',
          'test5',
          'test6',
          'test7'
        ],
        // 36
        [
          'つよさ1',
          'test2',
          'test3',
          'test4',
          'つよさ',
          'test5',
          'test6',
          'test7'
        ],
        // 37
        [
          'つよさ1',
          'test2',
          'test3',
          'test4',
          'つよさ',
          'test5',
          'test6',
          'test7'
        ],
        // 38
        [
          'つよさ1',
          'test2',
          'test3',
          'test4',
          'つよさ',
          'test5',
          'test6',
          'test7'
        ],
        // 39
        [
          'つよさ1',
          'test2',
          'test3',
          'test4',
          'つよさ',
          'test5',
          'test6',
          'test7'
        ],
      ],
    }
  }
}
</script>

<style>

.comment-list{
  text-align: left;
  border-radius: 10px;
  position: relative;
  padding: 10px;
  border: 2px solid white;
  height: 125px;
  width: 335px;
}

.next-allow{
  text-align: center;
}

</style>

