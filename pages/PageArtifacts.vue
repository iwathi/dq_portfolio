<template>
  <section>
    <div class="artifacts-menu">
      <div class="artifacts-menu-list">
        <ul>
          <li v-for="(artifact, index) in artifactsList" v-on:mouseleave="artifactsMouseleave(index)" v-on:mouseover="artifactsMouseover(index)" :key="artifact.name+index"><a class="menuCursor" v-if="artifactsChoice==index">▶</a>{{artifact.name}}</li>
        </ul>
      </div>
    </div>
    <div class="artifacts-details">
      <div class="artifacts-details-list">
        <ul>
          <li v-for="detail in artifactsList[artifactsChoice].details" :key="artifactsList[artifactsChoice].name+detail.name"><a :href="detail.link">{{detail.name}}</a></li>
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
      artifactsContent: 'せいかぶつ',
      artifactsChoice: 0,
      artifactsList: [
        {
          name: 'IoT',
          details: [
            {
              name: 'スマートロック',
              link: '#'
            },
            {
              name: 'ダンボーカメラ',
              link: 'https://twitter.com/iwathi/status/916465245983408128'
            }
          ]
        },
        {
          name: 'DIY',
          details: [
            {
              name: '本棚',
              link: '#'
            },
            {
              name: 'キッチンカウンター',
              link: 'https://twitter.com/iwathi/status/1045605001509318658'
            },
          ]
        },
        {
          name: '3Dプリント',
          details: [
            {
              name: 'タブレット壁掛け',
              link: 'https://www.thingiverse.com/thing:3090632'
            },
            {
              name: '綿棒ケース(menbou)',
              link: 'https://www.thingiverse.com/thing:3104757'
            },
          ]
        },
        {
          name: 'Web',
          details: [
            {
              name: '転職タグまとめ',
              link: 'https://www.hiyokonitsuduke.work/'
            },
            {
              name: 'Kodoguru',
              link: 'https://kodoguru.herokuapp.com/'
            },
          ]
        },
      ]
    }
  },
  mounted: function() {
    this.$store.commit('pageChange', 4)

  },
  methods: {
    artifactsMouseover: function(i){
      //this.artifactsList[i].name = '▶' + this.skillsList[i].name
      this.artifactsChoice = i
    },
    artifactsMouseleave: function(i){
      //this.artifactsList[i].name = this.skillsList[i].name.slice(1)
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

.artifacts-menu {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 130px;
  height: 115px;
  padding:10px;
  margin-bottom:10px;
  border: 2px solid #fff;
  border-radius: 10px;
}

.artifacts-menu::before {
  background-color: #000;
  color: #fff;
  content: "せいかぶつ";
  position: relative;
  left: 27px;
  top: -23px;
}

.artifacts-menu-list {
  position: relative;
  top: -23px;
  text-align: center;
}

.artifacts-details {
  position: absolute;
  top: 0px;
  left: 170px;
  width: 150px;
  height: 250px;
  padding:10px;
  margin-bottom:10px;
  border: 2px solid #fff;
  border-radius: 10px;
}

.artifacts-details-list {
  text-align: right;
}
</style>
