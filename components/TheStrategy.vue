<template>
  <section @click="strategyClick">
    <div class="strategy-status" @click="strategyClick">
      <div class="strategy-status-list">
        <ul>
          <li>ガンガンいこうぜ</li>
          <li>えいやでやれ</li>
          <li>みんなでがんばれ</li>
          <li>ツールにまかせろ</li>
          <li>おかねだいじに</li>
          <li>こどもゆうせん</li>
        </ul>
      </div>
    </div>
    <!--
    <div class="strategy-equipment">
      <div class="strategy-equipment-list">
        <ul>
          <li>E おきゅらすごう</li>
          <li>E まっく</li>
          <li>E あいほん</li>
          <li>E ３でぃぷりんた</li>
        </ul>
      </div>
    </div>
    <div class="strategy-parameter">
      <div class="strategy-parameter-list">
        <ul>
          <li>こうどう力：６０</li>
          <li>はなす力：３６</li>
          <li>ぶんしょう力：４０</li>
          <li>ろんりてき：５５</li>
          <li>うんのよさ：９０</li>
          <li>かいぜん力：７２</li>
          <li>ぶんせき力：４２</li>
          <li>にんたい力：１１</li>
          <li>けつだん力：３９</li>
          <li>Ex：254040</li>
        </ul>
      </div>
    </div>
    -->
  </section>
</template>

<script>
export default {
  components: {},
  methods: {
    strategyClick: function() {
      this.$store.commit("setStrategyDisplay", false);
    }
  },
  mounted: function() {
    this.$store.commit("pageChange", 1);
  }
};
</script>

<style>
.strategy-status {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 230px;
  height: 215px;
  padding: 10px;
  margin-bottom: 10px;
  border: 2px solid #fff;
  border-radius: 10px;
  background-color: #000;
}

.strategy-status::before {
  background-color: #000;
  color: #fff;
  content: "さくせん";
  position: relative;
  left: 80px;
  top: -23px;
}

.strategy-status-list {
  position: relative;
  top: -23px;
  text-align: center;
}

.strategy-equipment {
  background-color: #000;
  position: absolute;
  top: 150px;
  left: 0px;
  width: 130px;
  height: 100px;
  padding: 10px;
  margin-bottom: 10px;
  border: 2px solid #fff;
  border-radius: 10px;
}

.strategy-equipment-list {
  text-align: left;
}

.strategy-parameter {
  background-color: #000;
  position: absolute;
  top: 0px;
  left: 170px;
  width: 150px;
  height: 250px;
  padding: 10px;
  margin-bottom: 10px;
  border: 2px solid #fff;
  border-radius: 10px;
}

.strategy-parameter-list {
  text-align: right;
}
</style>

