<template>
  <section>
    <div class="tools-menu">
      <div class="tools-menu-list">
        <ul>
          <li v-for="(tool, index) in toolsList" v-on:mouseleave="toolsMouseleave(index)" v-on:mouseover="toolsMouseover(index)" :key="index"><a class="menuCursor" v-if="toolsChoice==index">▶</a>{{tool.name}}</li>
        </ul>
      </div>
    </div>
    <div class="tools-details">
      <div class="tools-details-list">
        <ul>
          <li v-for="detail in toolsList[toolsChoice].details" :key="detail">{{detail}}</li>
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
      toolsContent: 'どうぐ',
      toolsChoice: 0,
      toolsList: [
        {
          name: 'SNS',
          details: [
            'Twitter',
            'Facebook',
            'Slack'
          ]
        },
        {
          name: 'ガジェット',
          details: [
            '3Dプリンター',
            'Arduino',
            'Oculus Go',
            'OSMO MOBILE 2',
            'Kindle',
            'AirPods',
            'GX7-mk2',
            'ScanSnap iX100',
            'TicWatch E',
            'Withings WS-50',
            '0歳児'
          ]
        },
        {
          name: 'PC',
          details: [
            'iMac',
            'MBA',
            'Raspberry Pi',
            'iPhone 8'
          ]
        },
        {
          name: 'そふとうぇあ',
          details: [
            'Git',
            'neo vim',
            'PhotoShop',
            'Fusion 360'
          ]
        },
      ]
    }
  },
  mounted: function() {
    this.$store.commit('pageChange', 3)

  },
  methods: {
    toolsMouseover: function(i){
      //this.toolsList[i].name = '▶' + this.skillsList[i].name
      this.toolsChoice = i
    },
    toolsMouseleave: function(i){
      //this.toolsList[i].name = this.skillsList[i].name.slice(1)
    }
  }
}
</script>

<style>

.tools-menu {
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

.tools-menu::before {
  background-color: #000;
  color: #fff;
  content: "どうぐ";
  position: relative;
  left: 37px;
  top: -23px;
}

.tools-menu-list {
  position: relative;
  top: -23px;
  text-align: center;
}

.tools-details {
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

.tools-details-list {
  text-align: right;
}
</style>
