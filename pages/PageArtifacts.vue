<template>
  <section>
    <div class="artifacts-menu">
      <div class="artifacts-menu-list">
        <ul>
          <li v-for="(artifact, index) in artifactsList" v-on:mouseleave="artifactsMouseleave(index)" v-on:mouseover="artifactsMouseover(index)" :key="index"><a class="menuCursor" v-if="artifactsChoice==index">▶</a>{{artifact.name}}</li>
        </ul>
      </div>
    </div>
    <div class="artifacts-details">
      <div class="artifacts-details-list">
        <ul>
          <li v-for="detail in artifactsList[artifactsChoice].details" :key="detail">{{detail}}</li>
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
            'スマートロック',
            'ダンボーカメラ',
            ''
          ]
        },
        {
          name: 'DIY',
          details: [
            '本棚',
            'キッチンテーブル'
          ]
        },
        {
          name: '3Dプリント',
          details: [
            'タブレット壁掛け',
            '綿棒ケース'
          ]
        },
        {
          name: 'Web',
          details: [
            '転職タグまとめ',
            'Kodoguru',
          ]
        },
      ]
    }
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
