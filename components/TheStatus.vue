<template>
  <section>
    <div class="status-list">
      <ul>
        <li>{{statusJob}}</li>
        <li>せいべつ：おとこ</li>
        <li>レベル：{{statusLevel}}</li>
        <li>ＨＰ：{{statusHp}}</li>
        <li>ＭＰ：{{statusMp}}</li>
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
      statusJob: 'ぱぱえんじにあ',
      statusLevel: 29,
      statusHp: 100,
      statusMp: 100
    }
  }
}
</script>

<style>

.status-list{
  text-align: center;
  width: 130px;
  height: 140px;
  padding:10px;
  margin-bottom:10px;
  border: 2px solid #fff;
  border-radius: 10px;
}
</style>

