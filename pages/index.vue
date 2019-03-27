<template>
  <div class="top">
    <div class="logo">
      <img
        class="logo-text center"
        src="https://raw.githubusercontent.com/iwathi/dq_portfolio/master/assets/img/Portfolio.png"
      >
      <img
        class="logo-img-vue vue-center"
        src="https://raw.githubusercontent.com/vuejs/art/master/logo.png"
      >
    </div>
    <div class="text-area">
      <ul class="selection center">
        <li class="start" v-on:mouseover="menuMouseover(1)" @click="$router.push('room')">
          <a class="menu-cursor" v-if="opChoice==1">▶</a>
          <a class="menu-cursor" v-else>&thinsp;&ensp;</a>
          start
        </li>
        <li class="continue" v-on:mouseover="menuMouseover(2)" @click="$router.push('room')">
          <a class="menu-cursor" v-if="opChoice==2">▶</a>
          <a class="menu-cursor" v-else>&thinsp;&ensp;</a>
          continue
        </li>
      </ul>
      <div class="company center">
        <h3>@1989 iwathi</h3>
      </div>
    </div>
  </div>
</template>

<script>
import AssetsImageLive from "@/assets/img/tono.png";
import AssetsImageDead from "@/assets/img/shikabane.png";

const START = 1;
const CONTINUE = 2;

export default {
  data: function() {
    return {
      opChoice: 1
    };
  },
  methods: {
    menuMouseover: function(index) {
      this.opChoice = index;
    },
    menuMouseleave: function(index) {
      this.opChoice = 1;
    }
  }
};
</script>

<style>
html {
  background: black;
  color: white;
  word-spacing: 0px;
}

li {
  font-size: 16px;
  padding: 0;
  margin: 0;
}

.top {
  width: 100%;
  height: 100%;
  position: relative;
}

.center {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translateY(-50%) translateX(-50%);
  transform: translateY(-50%) translateX(-50%);
}

.vue-center {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}

.logo-text {
  height: 200px;
  width: 450px;
  text-align: center;
  position: relative;
  z-index: 0;
  animation: textUp 5s forwards;
  z-index: 1;
}

.logo-img-vue {
  height: 100px;
  width: 100px;
  position: relative;
  filter: grayscale(80%);
  z-index: 0;
  animation: imgDown 5s forwards;
}

.text-area {
  animation: showText 6s forwards;
}

.menu-cursor {
  font-size: 18px;
  text-align: left;
  font-family: "メイリオ", Meiryo, "ヒラギノ角ゴ Pro W3",
    "HIragino Kaku Gothic Pro W3", "HIragino Kaku Gothic Pro", Osaka,
    "ＭＳ Ｐゴシック", "MS P Gothic", sans-serif;
}

li.start {
  font-size: 20px;
}

li.continue {
  font-size: 20px;
}

.selection {
  top: 250px;
}

.company {
  top: 330px;
}

@keyframes imgDown {
  0% {
    opacity: 0;
    top: -400px;
  }
  50% {
    opacity: 0.2;
  }
  100% {
    opacity: 0.5;
    top: -80px;
  }
}

@keyframes textUp {
  0% {
    opacity: 0;
    top: 300px;
  }
  50% {
    opacity: 0.2;
  }
  100% {
    opacity: 0.7;
    top: 100px;
  }
}

@keyframes showText {
  0% {
    opacity: 0;
  }
  85% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>