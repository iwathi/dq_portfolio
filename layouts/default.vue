<template>
  <div>
    <div class="sidebar">
      <TheStatus class="status" />
      <TheHeader class="sidemenu" />
    </div>
    <div class="pages">
      <nuxt/>
    </div>
    <TheFooter/>
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'
import TheStatus from '~/components/TheStatus.vue'

export default {
  components: {
    TheHeader,
    TheFooter,
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

.pages {
  position: absolute;
  top: 33px;
  left: 180px;
}

.sidemenu {
  position: absolute;
  top: 200px;
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

.status {
  position: absolute;
  top: 10px;
  left: 10px;
}

.status::before {
  background-color: #000;
  color: #fff;
  content: "いわてぃ";
  position: relative;
  left: 45px;
  top: 12px;
}
</style>

