<template>
  <section>
    <div class="map">
      <div v-for="i in 8" class="container" :key="i">
        <div v-for="j in 9" class="waku" :key="j">
          <div
            :class="{ 'object-human': xy[i][j]==1, 'visitor': xy[i][j]==0 }"
            @click="visitorMove(i, j)"
          >
            <img class="visitor" v-if="xy[i][j]==0" src="../assets/img/brave.png">
            <img
              class="object-treasure"
              v-if="xy[i][j]==4"
              src="../assets/img/object-treasure-1.png"
            >
            <img
              class="object-treasure"
              v-if="xy[i][j]==5"
              src="../assets/img/object-treasure-2.png"
            >
            <transition name="fade" mode="out-in">
              <img class="object-human" key="xy1" v-if="xy[i][j] === 1" :src="objectHumanImg">
              <img class="object-human" key="xy11" v-if="xy[i][j] === 11" :src="objectHumanImg">
            </transition>
            <div class="object-wall" v-if="xy[i][j]==9"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AssetsImageLive from "@/assets/img/tono.png";
import AssetsImageDead from "@/assets/img/shikabane.png";

export default {
  data: function() {
    return {
      //どっちのターンかを表す
      wb: 0
    };
  },
  methods: {
    visitorMove: function(x, y) {
      //置ける場所の判定
      if (this.xy[x][y] != 2) return;

      // Storeのxyの値を変更する必要
      this.setxy(x, y, this.wb);
      this.setxy(this.xx, this.yy, 2);
      //this.xy[x][y] = this.wb;
      //this.xy[this.xx][this.yy] = 2;

      this.setxxyy(x, y);
      // this.xx = x;
      // this.yy = y;
      //this.xy.push();

      this.setPositionState();
    },
    // left x, right x, forward y, back y
    setPositionState: function() {
      const lx = this.xy[this.xx - 1][this.yy];
      const rx = this.xy[this.xx + 1][this.yy];
      const fy = this.xy[this.xx][this.yy - 1];
      const by = this.xy[this.xx][this.yy + 1];

      this.$store.commit("setlx", lx);
      this.$store.commit("setrx", rx);
      this.$store.commit("setfy", fy);
      this.$store.commit("setby", by);
    },
    setxxyy: function(x, y) {
      this.$store.commit("setxxyy", {
        x: x,
        y: y
      });
    },
    setxy: function(x, y, value) {
      this.$store.commit("setxy", {
        x: x,
        y: y,
        value: value
      });
    }
  },
  computed: {
    objectHumanImg: function() {
      if (this.xy[2][5] == 1) {
        return AssetsImageLive;
      } else if (this.xy[2][5] == 11) {
        return AssetsImageDead;
      } else {
      }
    },
    w: function() {
      return (this.xy.join("").match(/0/g) || []).length;
    },
    b: function() {
      return (this.xy.join("").match(/1/g) || []).length;
    },
    xy: function() {
      return this.$store.state.xy;
    },
    xx: function() {
      return this.$store.state.xx;
    },
    yy: function() {
      return this.$store.state.yy;
    }
  },
  components: {},
  mounted: function() {
    this.$store.commit("pageChange", 0);
  }
};
</script>

<style>
p {
  text-align: center;
}

div {
  min-width: 40px;
  min-height: 40px;
}

.map {
  background-image: url("../assets/img/tile-1.png");
}
.container {
  display: flex;
  justify-content: center;
}

.waku {
  width: 40px;
  height: 40px;
  /*  border: 1px solid black; */
  /*  background-image: url("../assets/img/tile-1.png"); */
}

.object-treasure {
  padding-top: 2px;
  padding-left: 2px;
  width: 90%;
  height: 90%;
}

.object-tile {
  width: 100%;
  height: 100%;
}

.object-wall {
  background-image: url("../assets/img/wall.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
}

.object-human {
  padding-top: 2px;
  padding-left: 2px;
  width: 90%;
  height: 90%;
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.9s ease-in-out;
}

.fade-leave-to {
  opacity: 0;
}

.fade-leave-active {
  transition: opacity 0.9s ease-in-out;
}

.visitor {
  width: 100%;
  height: 100%;
  object-position: 100% 100%;
  object-fit: cover;
}

.pages-top {
  width: 50vw;
  height: 300px;
  padding: 10px;
  margin-bottom: 10px;
  border: 2px solid #fff;
  border-radius: 10px;
}
</style>

