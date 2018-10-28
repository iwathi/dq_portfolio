<template>
  <section>
    <div class="skills-menu">
      <div class="skills-menu-list">
        <ul>
          <li v-for="(skill, index) in skillsList" v-on:mouseleave="skillsMouseleave(index)" v-on:mouseover="skillsMouseover(index)" :key="skill+index"><a class="menuCursor" v-if="skillsChoice==index">▶</a>{{skill.name}}</li>
        </ul>
      </div>
    </div>
    <div class="skills-details">
      <div class="skills-details-list">
        <ul>
          <li v-for="detail in skillsList[skillsChoice].details" :key="skillsList[skillsChoice].name+detail">{{detail}}</li>
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
      skillsContent: 'すきる',
      skillsChoice: 0,
      skillsList: [
        {
          name: 'python',
          details: [
            'NFC',
            'Lチカ',
            'スクレイピング',
            'selenium'
          ]
        },
        {
          name: 'Ruby',
          details: [
            'Ruby on Rails',
            'test'
          ]
        },
      ]
    }
  },
  mounted: function() {
    this.$store.commit('pageChange', 2)

  },
  methods: {
    skillsMouseover: function(i){
      //this.skillsList[i].name = '▶' + this.skillsList[i].name
      this.skillsChoice = i
    },
    skillsMouseleave: function(i){
      //this.skillsList[i].name = this.skillsList[i].name.slice(1)
    }
  }
}
</script>

<style>

.skills-menu {
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

.skills-menu::before {
  background-color: #000;
  color: #fff;
  content: "すきる";
  position: relative;
  left: 37px;
  top: -23px;
}

.skills-menu-list {
  position: relative;
  top: -23px;
  text-align: center;
}

.skills-details {
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

.skills-details-list {
  text-align: right;
}
</style>
