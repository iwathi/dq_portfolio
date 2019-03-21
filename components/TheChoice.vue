<template>
  <section>
    <div class="side-choice-list">
      <ul>
        <li
          v-for="(choice, index) in choiceList"
          v-bind:key="index"
          v-on:mouseleave="choiceMouseleave(index)"
          v-on:mouseover="choiceMouseover(index)"
        >
          <a class="choice-cursor" v-if="choiceChoice==index">▶</a>
          <a v-on:click="choiceClick(choice.choiceState)">{{choice.name}}</a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  data: function() {
    return {
      choiceChoice: -1,
      choiceList: [
        {
          name: "スキル",
          choiceState: 0
        },
        {
          name: "せいかぶつ",
          choiceState: 1
        },
        {
          name: "次のレベル",
          choiceState: 2
        }
      ]
    };
  },
  methods: {
    choiceClick: function(choiceState) {
      this.$store.commit("setChoiceDisplay", false);
      this.$store.commit("setChoiceState", choiceState);
    },
    choiceDisplay: function(choiceState) {
      this.$store.commit("setChoiceDisplay", true);
    },
    choiceMouseover: function(i) {
      //this.choiceList[i].name = '▶' + this.choiceList[i].name
      this.choiceChoice = i;
    },
    choiceMouseleave: function(i) {
      //this.choiceList[i].name = this.choiceList[i].name.slice(1)
      this.choiceChoice = -1;
    }
  },
  computed: {
    choiceState: {
      get: function() {
        return this.$store.state.choiceState;
      }
    }
  }
};
</script>

<style scoped>
.choice-cursor {
  text-align: left;
  font-family: "メイリオ", Meiryo, "ヒラギノ角ゴ Pro W3",
    "HIragino Kaku Gothic Pro W3", "HIragino Kaku Gothic Pro", Osaka,
    "ＭＳ Ｐゴシック", "MS P Gothic", sans-serif;
}

.side-choice-list {
  text-align: center;
  width: 130px;
  height: 100px;
  padding: 10px;
  margin-bottom: 10px;
  border: 2px solid #fff;
  border-radius: 10px;
  background-color: black;
}

a:link {
  text-decoration: none;
  color: white;
}

a:visited {
  text-decoration: none;
  color: white;
}
</style>
