<template>
  <section>
    <div class="sidemenu-list">
      <ul>
        <li><router-link to="/">とっぷ</router-link></li>
        <li><router-link to="pageProfile">プロフィール</router-link></li>
        <li><router-link to="pageSkills">スキル</router-link></li>
        <li><router-link to="pageTools">どうぐ</router-link></li>
        <li><router-link to="pageArtifacts">せいかぶつ</router-link></li>
        <li><router-link to="pageBlog">ぶろぐ</router-link></li>
        <li><router-link to="pagePhoto">しゃしん</router-link></li>
        <li><router-link to="pageSpells">じゅもん</router-link></li>
        <li><router-link to="pageRunAway">にげる</router-link></li>
        <li><router-link to="pageTalk">はなす</router-link></li>
        <li><router-link to="test">てすと</router-link></li>
      </ul>

    </div>
  </section>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style scoped>

.sidemenu-list {
  text-align: center;
  width: 130px;
  height: 340px;
  padding:10px;
  margin-bottom:10px;
  border: 2px solid #fff;
  border-radius: 10px;
}

a:link {
  text-decoration: none;
  color: white;
}

a:visited {
  text-decoration: none;
  color: white;
}

a:hover {
  color: red;
  content: "▶";

}

</style>
