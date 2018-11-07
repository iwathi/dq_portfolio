<template>
  <section @click="spellClick">
    <div class="spells-menu">
      <div class="spells-menu-list">
        <ul>
          <li v-for="(spell, index) in spellsList" v-on:mouseleave="spellsMouseleave(index)" v-on:mouseover="spellsMouseover(index)" :key="spell.name+index"><a class="menuCursor" v-if="spellsChoice==index">▶</a>{{spell.name}}</li>
        </ul>
      </div>
    </div>
    <div class="spells-details">
      <div class="spells-details-list">
        <ul>
          <li v-for="detail in spellsList[spellsChoice].details" :key="spellsList[spellsChoice].name+detail.name"><a :href="detail.link">{{detail.name}}</a></li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  components: {
  },
  data: function() {
    return {
      spellsContent: 'じゅもん ',
      spellsChoice: 0,
      spellsList: [
        {
          name: 'ルーラ',
          details: [
            {
              name: 'ブログ',
              link: 'http://iwathi3.hatenablog.com/'
            },
            {
              name: 'Twitter',
              link: 'https://twitter.com/iwathi'
            },
          ]
        },
      ]
    }
  },
  mounted: function() {
    this.$store.commit('pageChange', 5)

  },
  methods: {
    spellClick: function (){
      this.$store.commit('setSpellDisplay', false)
    },
    spellsMouseover: function(i){
      //this.spellsList[i].name = '▶' + this.skillsList[i].name
      this.spellsChoice = i
    },
    spellsMouseleave: function(i){
      //this.spellsList[i].name = this.skillsList[i].name.slice(1)
    }
  }
}
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
.spells-menu {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 130px;
  height: 115px;
  padding:10px;
  margin-bottom:10px;
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
  padding:10px;
  margin-bottom:10px;
  border: 2px solid #fff;
  border-radius: 10px;
  background-color: #000;
}

.spells-details-list {
  text-align: right;
}
</style>
