<template>
  <section>
    <div class="pages-top">
      ＊「おお　いわてぃ！<br>
      ゆうしゃロトの　ちをひくものよ！<br>
      そなたのくるのをまっっておったぞ。<br>
      <br>
      ＊「その　むかし　ゆうしゃロトが<br>
      カミから　ひかりのたまをさずかり<br>
      まものたちをふうじこめたという。<br>
      <br>
      ＊「しかし　いずこともなくあらわれた<br>
      あくまのけしん　りゅうおうが　そのたまを<br>
      やみにとざしたのじゃ<br>
      <br>
      ＊「このちに　ふたたびへいわをっ！<br>
      <br>
      ＊「ゆうしゃ　○○よ！　りゅうおうをたおし<br>
      そのてから　ひかりのたまをとりもどしてくれ！<br>
      <br>
      ＊「わしからの　おくりものじゃ！<br>
      そなたのよこにある　たからのはこを<br>
      とるがよい！<br>
      <br>
      ＊「そして　このへやにいる　へいしにきけば<br>
      たびのちしきを　おしえてくれよう。<br>
      <br>
      ＊「では　また　あおう！　ゆうしゃ　○○よ！

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
  height: 600px;
  padding:10px;
  margin-bottom:10px;
  border: 2px solid #fff;
  border-radius: 10px;
}
</style>

