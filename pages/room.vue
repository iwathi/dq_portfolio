<template>
  <div>
    <div class="sidebar">
      <TheStatus class="status"/>
      <TheCommand class="sidemenu"/>
    </div>
    <div class="room">
      <TheRoom/>
    </div>
    <div class="display-components">
      <div class="comment" v-if="commentDisplay">
        <TheComment/>
      </div>
      <TheChoice class="choice" v-if="choiceDisplay"/>
      <TheStrength class="window" v-if="strengthDisplay"/>
      <TheStrategy class="window" v-if="strategyDisplay"/>
      <TheSpell class="window" v-if="spellDisplay"/>
      <TheTool class="window" v-if="toolDisplay"/>
    </div>
  </div>
</template>

<script>
import TheRoom from "~/components/TheRoom.vue";
import TheFooter from "~/components/TheFooter.vue";
import TheStatus from "~/components/TheStatus.vue";
import TheGold from "~/components/TheGold.vue";
import TheComment from "~/components/TheComment.vue";
import TheCommand from "~/components/TheCommand.vue";
import TheChoice from "~/components/TheChoice.vue";
import TheStrength from "~/components/TheStrength.vue";
import TheStrategy from "~/components/TheStrategy.vue";
import TheSpell from "~/components/TheSpell.vue";
import TheTool from "~/components/TheTool.vue";

export default {
  components: {
    TheRoom,
    TheFooter,
    TheGold,
    TheComment,
    TheChoice,
    TheCommand,
    TheStrength,
    TheStrategy,
    TheSpell,
    TheTool,
    TheStatus
  },
  data: function() {
    return {};
  },
  computed: {
    commentDisplay: function() {
      return this.$store.state.commentDisplay;
    },
    choiceDisplay: function() {
      return this.$store.state.choiceDisplay;
    },
    strengthDisplay: function() {
      return this.$store.state.strengthDisplay;
    },
    strategyDisplay: function() {
      return this.$store.state.strategyDisplay;
    },
    spellDisplay: function() {
      return this.$store.state.spellDisplay;
    },
    toolDisplay: function() {
      return this.$store.state.toolDisplay;
    }
  }
};
</script>
<style>
html {
  position: relative;
  background: black;
  color: white;
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
}

.room {
  position: absolute;
  top: 10px;
  left: 180px;
}

.sidemenu {
  position: absolute;
  top: 170px;
  left: 10px;
}

.sidemenu::before {
  background-color: #000;
  color: #fff;
  content: "こまんど";
  position: relative;
  left: 45px;
  top: 12px;
}

.choice {
  position: absolute;
  top: 200px;
  left: 380px;
}

.comment {
  position: absolute;
  top: 340px;
  left: 180px;
}

.comment::before {
  background-color: #000;
  color: #fff;
  position: relative;
  left: 37px;
  top: 12px;
}

.gold {
  position: absolute;
  top: 10px;
  left: 505px;
}

.gold::before {
  background-color: #000;
  color: #fff;
  position: relative;
  left: 37px;
  top: 12px;
}

.status {
  position: absolute;
  top: 10px;
  left: 10px;
}

.status::before {
  background-color: #000;
  color: #fff;
  content: "げすとさん";
  position: relative;
  left: 37px;
  top: 12px;
}
</style>

