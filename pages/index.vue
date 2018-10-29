<template>
  <section>
    <div class="pages-top">
      ＊「おお　げすとさん！<br>
      らいほうしゃビジターの　ちをひくものよ！<br>
      そなたのくるのをまっておったぞ。<br>
      <br>
      ＊「よこのめにゅうからえらべば<br>
      いわてぃのことを　おしえてくれよう。<br>
    </div>
  </section>
</template>

<script>

export default {
  components: {
  },
  mounted: function() {
    this.$store.commit('pageChange', 0)

  },
}
</script>

<style>

.pages-top{
  width: 50vw;
  height: 300px;
  padding:10px;
  margin-bottom:10px;
  border: 2px solid #fff;
  border-radius: 10px;
}
</style>

