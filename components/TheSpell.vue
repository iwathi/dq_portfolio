<template>
  <section @click="spellClick">
    <div class="spells-menu">
      <div class="spells-menu-list">
        <ul>
          <li
            v-for="(spell, index) in spellsList"
            v-on:mouseleave="spellsMouseleave(index)"
            v-on:mouseover="spellsMouseover(index)"
            :key="spell.name+index"
          >
            <a class="spell-cursor" v-if="spellsChoice==index">▶</a>
            <a v-if="spell.id==1" onclick="history.back()">{{spell.name}}</a>
            <a v-else-if="spell.id==2" v-on:click="zaki()">{{spell.name}}</a>
            <a v-else>{{spell.name}}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="spells-details">
      <div class="spells-details-list">
        <ul>
          <li
            v-for="detail in spellsList[spellsChoice].details"
            :key="spellsList[spellsChoice].name+detail.name"
          >
            <a :href="detail.link" target="_blank">{{detail.name}}</a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  data: function() {
    return {
      spellsContent: "じゅもん ",
      spellsChoice: 0,
      spellsList: [
        {
          id: 0,
          name: "ルーラ",
          details: [
            {
              name: "ブログ",
              link: "http://iwathi3.hatenablog.com/"
            },
            {
              name: "Twitter",
              link: "https://twitter.com/iwathi"
            },
            {
              name: "Qiita",
              link: "https://qiita.com/iwathi/items/8f054d10590f32b438a4"
            }
          ]
        },
        {
          id: 1,
          name: "リレミト",
          details: []
        },
        {
          id: 2,
          name: "ザキ",
          details: []
        }
      ]
    };
  },
  mounted: function() {
    this.$store.commit("pageChange", 5);
  },
  methods: {
    spellClick: function() {
      this.$store.commit("setSpellDisplay", false);
    },
    spellsMouseover: function(i) {
      //this.spellsList[i].name = '▶' + this.skillsList[i].name
      this.spellsChoice = i;
    },
    spellsMouseleave: function(i) {
      //this.spellsList[i].name = this.skillsList[i].name.slice(1)
    },
    zaki: function() {
      const lx = this.$store.state.lx;
      const rx = this.$store.state.rx;
      const fy = this.$store.state.fy;
      const by = this.$store.state.by;

      const xx = this.$store.state.xx;
      const yy = this.$store.state.yy;

      // lx, rx, fy, byに1が含まれているならば1を11に変更
      if (lx == 1) {
        this.setxy(xx - 1, yy, 11);
        this.$store.commit("setlx", 11);
      } else if (rx == 1) {
        this.setxy(xx + 1, yy, 11);
        this.$store.commit("setrx", 11);
      } else if (fy == 1) {
        this.setxy(xx, yy - 1, 11);
        this.$store.commit("setfy", 11);
      } else if (by == 1) {
        this.setxy(xx, yy + 1, 11);
        this.$store.commit("setby", 11);
      }
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
  }
};
</script>

<style>
a:link {
  text-decoration: none;
  color: white;
}

a:visited {
  text-decoration: none;
  color: white;
}

.spell-cursor {
  text-align: left;
  font-family: "メイリオ", Meiryo, "ヒラギノ角ゴ Pro W3",
    "HIragino Kaku Gothic Pro W3", "HIragino Kaku Gothic Pro", Osaka,
    "ＭＳ Ｐゴシック", "MS P Gothic", sans-serif;
}

.spells-menu {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 130px;
  height: 115px;
  padding: 10px;
  margin-bottom: 10px;
  border: 2px solid #fff;
  border-radius: 10px;
  background-color: #000;
}

.spells-menu::before {
  background-color: #000;
  color: #fff;
  content: "じゅもん";
  position: relative;
  left: 37px;
  top: -23px;
}

.spells-menu-list {
  position: relative;
  top: -23px;
  text-align: center;
  background-color: #000;
}

.spells-details {
  position: absolute;
  top: 0px;
  left: 170px;
  width: 150px;
  height: 250px;
  padding: 10px;
  margin-bottom: 10px;
  border: 2px solid #fff;
  border-radius: 10px;
  background-color: #000;
}

.spells-details-list {
  text-align: right;
}
</style>
