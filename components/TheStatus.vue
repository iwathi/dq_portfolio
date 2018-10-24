<template>
  <section>
    <div class="status-list">
      <ul>
        <li>{{statusJob}}</li>
        <li>レベル：{{statusLevel}}</li>
        <li>ＨＰ：{{statusHp}}</li>
        <li>ＭＰ：{{statusMp}}</li>
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
      statusJob: 'らいほうしゃ',
      statusLevel: 1,
      statusHp: 10,
      statusMp: 10,
      statusEx: 10
    }
  },
  computed: {
    stateEx: function(){
      return this.$store.state.ex
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

