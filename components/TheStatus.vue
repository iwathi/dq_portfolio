<template>
  <section>
    <div class="status-list">
      <ul>
        <li>{{levelList[statusLevel].job}}</li>
        <li>レベル：{{statusLevel}}</li>
        <li>ＨＰ：{{levelList[statusLevel].hp}}</li>
        <li>ＭＰ：{{levelList[statusLevel].mp}}</li>
        <li>ＥＸ：{{stateEx}}</li>
      </ul>
    </div>
  </section>
</template>

<script>

export default {
  components: {
  },
  data (){
    return {
      levelList: [
        {
          job: 'らいほうしゃ',
          hp: '1',
          mp: '1',
          ex: 1
        },
        {
          job: 'らいほうしゃ',
          hp: '10',
          mp: '10',
          ex: 2
        },
        {
          job: 'ちじん',
          hp: '20',
          mp: '20',
          ex: 10
        },
        {
          job: 'ともだち',
          hp: '100',
          mp: '100',
          ex: 20
        },
        {
          job: 'りかいしゃ',
          hp: '1000',
          mp: '1000',
          ex: 50
        },
        {
          job: 'けんじゃ',
          hp: '1000',
          mp: '10000',
          ex: 100
        }
      ]
    }
  },
  computed: {
    stateEx: function(){
      return this.$store.state.ex
    },
    statusLevel: function(){
      var tmpLevel = 0
      for (var i = 0; this.levelList.length > i ; i++){
        if (this.stateEx > this.levelList[i].ex){
          tmpLevel = i
        }
      }
      return tmpLevel
    }
  }
}
</script>

<style>

.status-list{
  text-align: center;
  width: 130px;
  height: 120px;
  padding:10px;
  margin-bottom:10px;
  border: 2px solid #fff;
  border-radius: 10px;
}
</style>

