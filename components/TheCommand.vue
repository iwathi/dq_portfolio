<template>
  <section>
    <div class="sidemenu-list">
      <ul>
        <li
          v-for="(menu, index) in commandList"
          v-bind:key="index"
          v-on:mouseleave="menuMouseleave(index)"
          v-on:mouseover="menuMouseover(index)"
        >
          <a class="menu-cursor" v-if="menuChoice==index">▶</a>
          <a
            v-if="menu.display == true"
            v-on:click="commandStateChange(menu.commandState)"
          >{{menu.name}}</a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  components: {},
  data: function() {
    return {
      menuChoice: -1
    };
  },
  methods: {
    commandStateChange: function(commandState) {
      if (commandState == 2) {
        this.$store.commit("setStrengthDisplay", true);
      } else if (commandState == 3) {
        this.$store.commit("setStrategyDisplay", true);
      } else if (commandState == 4) {
        this.$store.commit("setToolDisplay", true);
      } else if (commandState == 5) {
        this.$store.commit("setSpellDisplay", true);
      } else {
        this.$store.commit("setCommentDisplay", true);
        this.$store.commit("setCommandState", commandState);
      }
    },
    menuMouseover: function(i) {
      //this.menuList[i].name = '▶' + this.menuList[i].name
      this.menuChoice = i;
    },
    menuMouseleave: function(i) {
      //this.menuList[i].name = this.menuList[i].name.slice(1)
      this.menuChoice = -1;
    }
  },
  computed: {
    commandList: function() {
      return this.$store.state.commandList;
    },
    toolCommand: function() {
      return this.$store.state.toolCommand;
    },
    spellCommand: function() {
      return this.$store.state.spellCommand;
    }
  }
};
</script>

<style scoped>
.menu-cursor {
  text-align: left;
  font-family: "メイリオ", Meiryo, "ヒラギノ角ゴ Pro W3",
    "HIragino Kaku Gothic Pro W3", "HIragino Kaku Gothic Pro", Osaka,
    "ＭＳ Ｐゴシック", "MS P Gothic", sans-serif;
}

.sidemenu-list {
  text-align: center;
  width: 130px;
  height: 270px;
  padding: 10px;
  margin-bottom: 10px;
  border: 2px solid #fff;
  border-radius: 10px;
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
