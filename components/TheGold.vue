<template>
  <section>
    <div class="gold-list">
      <ul>
        <li>Ｇ：{{gold}}</li>
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
      gold: 10000
    }
  }
}
</script>

<style>

.gold-list{
  text-align: left;
  width: 150px;
  height: 25px;
  padding:5px;
  margin-bottom:10px;
  border: 2px solid #fff;
  border-radius: 10px;
}
</style>

