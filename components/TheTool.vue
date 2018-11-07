<template>
  <section @click="toolClick">
    <div class="tools-menu">
      <div class="tools-menu-list">
        <ul>
          <li v-for="(tool, index) in toolsList" v-on:mouseleave="toolsMouseleave(index)" v-on:mouseover="toolsMouseover(index)" :key="tool.name+index"><a class="menuCursor" v-if="toolsChoice==index">▶</a>{{tool.name}}</li>
        </ul>
      </div>
    </div>
    <div class="tools-details">
      <div class="tools-details-list">
        <ul>
          <li v-for="detail in toolsList[toolsChoice].details" :key="toolsList[toolsChoice].name+detail.name"><a :href="detail.link">{{detail.name}}</a></li>
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
          name: 'ハードウェア',
          details: [
            {
              name: 'Anet A8',
              link: '#'
            },
            {
              name: 'Arduino',
              link: '#'
            },
            {
              name: 'Raspberry Pi',
              link: '#'
            },
            {
              name: 'iMac 4K, 21.5 2017',
              link: '#'
            },
            {
              name: 'MacBookAir',
              link: '#'
            },
            {
              name: 'iPhone 8',
              link: '#'
            },
            {
              name: 'Oculus Go',
              link: '#'
            },
            {
              name: 'OSMO MOBILE 2',
              link: '#'
            },
            {
              name: 'Kindle',
              link: '#'
            },
            {
              name: 'GX7-mk2',
              link: '#'
            },
            {
              name: 'ScanSnap iX100',
              link: '#'
            },
            {
              name: 'TicWatch E',
              link: '#'
            },
            {
              name: 'Withings WS-50',
              link: '#'
            },
            {
              name: '0歳児',
              link: '#'
            },
          ]
        },
        {
          name: 'ソフトウェア',
          details: [
            {
              name: 'Git',
              link: '#'
            },
            {
              name: 'vim',
              link: '#'
            },
            {
              name: 'Slack',
              link: '#'
            },
            {
              name: 'PhotoShop',
              link: '#'
            },
            {
              name: 'Fusion 360',
              link: '#'
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
    toolClick: function (){
      this.$store.commit('setToolDisplay', false)
    },
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

a:link {
  text-decoration: none;
  color: white;
}

a:visited {
  text-decoration: none;
  color: white;
}
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
  background-color: #000;
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
  background-color: #000;
}

.tools-details {
  position: absolute;
  top: 0px;
  left: 170px;
  width: 150px;
  height: 350px;
  padding:10px;
  margin-bottom:10px;
  border: 2px solid #fff;
  border-radius: 10px;
  background-color: #000;
}

.tools-details-list {
  text-align: right;
}
</style>
