<template>
  <div>
    <div class="avator">
      <div class="kingImg">
        <img src="~/assets/img/king.gif" />
      </div>
      <TheComment class="comment" />
      <!--      <TheGold class="gold" /> -->
    </div>
    <div class="sidebar">
      <TheStatus class="status" />
      <TheHeader class="sidemenu" />
    </div>
    <div class="pages">
      <nuxt/>
    </div>
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'
import TheStatus from '~/components/TheStatus.vue'
import TheGold from '~/components/TheGold.vue'
import TheComment from '~/components/TheComment.vue'

export default {
  components: {
    TheHeader,
    TheFooter,
    TheGold,
    TheComment,
    TheStatus
  }
}
</script>
<style>
html {
  position: relative;
  background: black;
  color: white;
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
}

.kingImg {
  position: absolute;
  top: 15px;
  left: 180px;
}

.pages {
  position: absolute;
  top: 120px;
  left: 180px;
}

.sidemenu {
  position: absolute;
  top: 170px;
  left: 10px;
}

.sidemenu::before {
  background-color: #000;
  color: #fff;
  content: "めにゅう";
  position: relative;
  left: 45px;
  top: 12px;
}

.comment {
  position: absolute;
  top: 15px;
  left: 290px;
}

.comment::before {
  background-color: #000;
  color: #fff;
  position: relative;
  left: 37px;
  top: 12px;
}

.gold {
  position: absolute;
  top: 10px;
  left: 505px;
}

.gold::before {
  background-color: #000;
  color: #fff;
  position: relative;
  left: 37px;
  top: 12px;
}

.status {
  position: absolute;
  top: 10px;
  left: 10px;
}

.status::before {
  background-color: #000;
  color: #fff;
  content: "げすとさん";
  position: relative;
  left: 37px;
  top: 12px;
}
</style>

