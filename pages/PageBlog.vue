<template>
  <section>
    <div class="blogs-menu">
      <div class="blogs-menu-list">
        <ul>
          <li v-for="(blog, index) in blogsList" v-on:mouseleave="blogsMouseleave(index)" v-on:mouseover="blogsMouseover(index)" :key="index"><a class="menuCursor" v-if="blogsChoice==index">▶</a>{{blog.name}}</li>
        </ul>
      </div>
    </div>
    <div class="blogs-details">
      <div class="blogs-details-list">
        <ul>
          <li v-for="detail in blogsList[blogsChoice].details" :key="detail">{{detail}}</li>
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
      blogsContent: 'ぶろぐ ',
      blogsChoice: 0,
      blogsList: [
        {
          name: 'iwathiの/var/log',
          details: [
            'ライフハックやIT系'
          ]
        },
      ]
    }
  },
  mounted: function() {
    this.$store.commit('pageChange', 5)

  },
  methods: {
    blogsMouseover: function(i){
      //this.blogsList[i].name = '▶' + this.skillsList[i].name
      this.blogsChoice = i
    },
    blogsMouseleave: function(i){
      //this.blogsList[i].name = this.skillsList[i].name.slice(1)
    }
  }
}
</script>

<style>

.blogs-menu {
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

.blogs-menu::before {
  background-color: #000;
  color: #fff;
  content: "ぶろぐ";
  position: relative;
  left: 37px;
  top: -23px;
}

.blogs-menu-list {
  position: relative;
  top: -23px;
  text-align: center;
}

.blogs-details {
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

.blogs-details-list {
  text-align: right;
}
</style>
