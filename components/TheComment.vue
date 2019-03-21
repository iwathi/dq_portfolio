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
const NEXT_COMMENT = 4;

export default {
  components: {},
  computed: {
    commentNumber: function() {
      return this.$store.state.commentNumber;
    },
    choiceDisplay: {
      get: function() {
        return this.$store.state.choiceDisplay;
      }
    },
    choiceState: {
      get: function() {
        return this.$store.state.choiceState;
      }
    },
    commentState: {
      get: function() {
        const cmds = this.$store.state.commandState;
        const choices = this.$store.state.choiceState;
        const lx = this.$store.state.lx;
        const rx = this.$store.state.rx;
        const fy = this.$store.state.fy;
        const by = this.$store.state.by;

        //console.log(cmds + ", " + lx + ", " + rx + ", " + fy + ", " + by + ";")

        // はなすコマンド
        if (cmds == 0) {
          // ヒューマン
          if (lx == 1 || rx == 1 || fy == 1 || by == 1) {
            if (choices == 0) {
              return "questionSkill";
            } else if (choices == 1) {
              return "questionArtifact";
            } else if (choices == 2) {
              return "questionNextLevel";
            } else {
              return "human";
            }
          }
          // ヒューマンイズデッド
          if (lx == 11 || rx == 11 || fy == 11 || by == 11) {
            return "deadHuman";
          }

          // しらべるコマンド
        } else if (cmds == 1) {
          if (lx == 4 || rx == 4 || fy == 4 || by == 4) {
            this.commandListDisplay(4);
            return "foundTool";
          }
          if (lx == 5 || rx == 5 || fy == 5 || by == 5) {
            this.commandListDisplay(5);
            return "foundSpell";
          } else {
            return "noObject";
          }
        } else if (cmds == 2) {
        } else if (cmds == 3) {
        } else if (cmds == 4) {
        }
        return "noHuman";
      }
    }
  },
  methods: {
    commandListDisplay: function(commandNumber) {
      if (commandNumber == 4) {
        this.$store.commit("setCommandListToolDisplay", true);
      } else if (commandNumber == 5) {
        this.$store.commit("setCommandListSpellDisplay", true);
      } else {
      }
    },
    commentNext: function() {
      if (this.choiceDisplay == false) {
        // ページ送り
        if (
          this.comments[this.commentState].length >
          this.commentNumber + NEXT_COMMENT
        ) {
          this.$store.commit("setCommentNumber", 4);

          // 途中でこまんどに変更があったらチェンジ
        } else {
          this.$store.commit("setCommentState", -1);
          this.$store.commit("setCommentDisplay", false);
          this.$store.commit("resetChoiceState", 0);
        }

        // 選択肢を表示するとき、などイベント関連はここに追加
        if (
          this.commentState == "human" &&
          this.commentNumber == NEXT_COMMENT
        ) {
          this.$store.commit("setChoiceDisplay", true);
        }
        if (
          this.commentState == "foundTool" &&
          this.commentNumber == NEXT_COMMENT
        ) {
          this.$store.commit("setToolCommand", true);
        }
        if (
          this.commentState == "foundSpell" &&
          this.commentNumber == NEXT_COMMENT
        ) {
          this.$store.commit("setSpellCommand", true);
        }
      }
    }
  },
  data: function() {
    return {
      commentTmpState: -1,
      commentLists: [],
      // commentStateとcommentListのindexは等しくする
      windowList: [],
      comments: {
        // 0
        noHuman: ["そのほうこうには　だれも　いない。"],
        // 1
        noObject: [
          "げすとさんは　じぶんの　あしもとを",
          "しらべた。",
          "しかし　なにも　みつからなかった。"
        ],
        // 2
        deadHuman: ["へんじがない。", "ただの　しかばね　のようだ。"],
        // 10
        human: [
          "おお　げすとさん！",
          "よくぞ　きてくれた！",
          "わしは　とても　うれしいぞ。",
          "",
          // 選択肢を表示 state 0, number 1
          "なにを　しりたいのじゃ？",
          "",
          "",
          "",
          "いまは　とくにないようじゃな",
          "何か　知りたいことができたら",
          "また　聞きにくるがよい！",
          "さらば　じゃ！"
        ],
        // 11
        questionSkill: [
          "",
          "",
          "",
          "",
          "いわてぃの　スキル　じゃな",
          "",
          "",
          "",
          "うぇぶけい　のスキルとしては",
          "HTML, Javascript, CSS",
          "Vue.js, Ruby on Rails　などのスキルが",
          "多少あるようじゃ",
          "スクリプト言語が　好きなようで",
          "Python, Rubyなどを多用しておる",
          "",
          "",
          "あとはArduinoなどをいじっておるため",
          "C言語も多少はできるようじゃの"
        ],
        // 12
        questionArtifact: [
          "",
          "",
          "",
          "",
          "いわてぃの　せいかぶつ　じゃな",
          "",
          "",
          "",
          "せいかぶつは　どうぐの中に",
          "いちらんが　あるようじゃな",
          "ちょいとさがして　みておくれ"
        ],
        // 13
        questionNextLevel: [
          "",
          "",
          "",
          "",
          "いわてぃが　次のれべるになる",
          "には　あと１０００ＰＶが",
          "ひつようじゃ",
          ""
        ],

        // 20
        foundTool: [
          "げすとさんは　じぶんの　あしもとを",
          "しらべた。",
          "げすとさんは　たからばこを　あけた！",
          "",
          "どうぐいちらん　をてにいれた",
          "こまんどに　どうぐ　がついか　された！"
        ],
        // 21
        foundSpell: [
          "げすとさんは　じぶんの　あしもとを",
          "しらべた。",
          "げすとさんは　たからばこを　あけた！",
          "",
          "サルでもわかるまほう入門　をてにいれ",
          "全ページを　どくは　した",
          "こまんどに　じゅもん　がついか　された！"
        ]
      }
    };
  }
};
</script>

<style>
.comment-list {
  text-align: left;
  border-radius: 10px;
  position: relative;
  padding: 10px;
  border: 2px solid white;
  height: 125px;
  width: 335px;
}

.next-allow {
  text-align: center;
}
</style>

