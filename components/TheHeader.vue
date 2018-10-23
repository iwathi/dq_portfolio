<template>
  <section>
    <div class="sidemenu-list">
      <ul>
        <li v-for="(menu, index) in menuList" v-bind:key="index" v-on:mouseleave="menuMouseleave(index)" v-on:mouseover="menuMouseover(index)"><a class="menuCursor" v-if="menuChoice==index">▶</a><router-link v-bind:to="menu.link">{{menu.name}}</router-link></li>
      </ul>

    </div>
  </section>
</template>

<script>

export default {
  components: {
  },
  data: function() {
    return {
      menuChoice: 0,
      initChoice: 0,
      menuList: [
        {
          name: 'とっぷ',
          link: '/'
        },
        {
          name: 'プロフィール',
          link: 'pageProfile'
        },
        {
          name: 'スキル',
          link: 'pageSkills'
        },
        {
          name: 'どうぐ',
          link: 'pageTools'
        },
        {
          name: 'せいかぶつ',
          link: 'pageArtifacts'
        },
        {
          name: 'ぶろぐ',
          link: 'pageBlog'
        },
//        {
//          name: 'しゃしん',
//          link: 'pagePhoto'
//        },
//         {
//           name: 'じゅもん',
//           link: 'pageSpells'
//         },
//         {
//           name: 'にげる',
//           link: 'pageRunAway'
//         },
//         {
//           name: 'はなす',
//           link: 'pageTalk'
//         },
//         {
//           name: 'てすと',
//           link: 'test'
//         },
      ]
    }
  },
  mounted: function() {
    this.getPageNumber()
  },
  methods: {
    menuMouseover: function(i){
      //this.menuList[i].name = '▶' + this.menuList[i].name
      this.menuChoice = i
    },
    menuMouseleave: function(i){
      //this.menuList[i].name = this.menuList[i].name.slice(1)
      this.menuChoice = this.initChoice
    },
    getPageNumber: function(){
      console.log(this.menuList.length)
      for (var i = 0; i < this.menuList.length; i++){
        console.log(this.$route.path + " : " + this.menuList[i].link + " -> " + i)
        if(this.$route.path === this.menuList[i].link)
          console.log(this.$route.path + " : " + this.menuList[i].link + " -> " + i)
          this.initChoice = i
          break
      }
    }
  }
}
</script>

<style scoped>

.menuCursor {
  text-align: left;
}

.sidemenu-list {
  text-align: center;
  width: 130px;
  height: 270px;
  padding:10px;
  margin-bottom:10px;
  border: 2px solid #fff;
  border-radius: 10px;
}

a:link {
  text-decoration: none;
  color: white;
}

a:visited {
  text-decoration: none;
  color: white;
}

</style>
