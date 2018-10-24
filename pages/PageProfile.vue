<template>
  <section>
    <div class="profile-status">
      <div class="profile-status-list">
        <ul>
          <li>ぱぱえんじにあ</li>
          <li>せいべつ：おとこ</li>
          <li>レベル：29</li>
          <li>ＨＰ：24</li>
          <li>ＭＰ：200</li>
        </ul>
      </div>
    </div>
    <div class="profile-equipment">
      <div class="profile-equipment-list">
        <ul>
          <li>E おきゅらすごう</li>
          <li>E まっく</li>
          <li>E あいほん</li>
          <li>E ３でぃぷりんた</li>
        </ul>
      </div>
    </div>
    <div class="profile-parameter">
      <div class="profile-parameter-list">
        <ul>
          <li>ちから：５５</li>
          <li>すばやさ：５５</li>
          <li>たいりょく：５５</li>
          <li>かしこさ：５５</li>
          <li>うんのよさ：５５</li>
          <li>さいだいHP：５５</li>
          <li>さいだいMP：５５</li>
          <li>こうげき力：５５</li>
          <li>しゅび力：５５</li>
          <li>Ex：254040</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  components: {
  },
  mounted: function() {
    this.$store.commit('pageChange', 1)

  },
}
</script>

<style>

.profile-status {
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

.profile-status::before {
  background-color: #000;
  color: #fff;
  content: "いわてぃ";
  position: relative;
  left: 37px;
  top: -23px;
}

.profile-status-list {
  position: relative;
  top: -23px;
  text-align: center;
}

.profile-equipment {
  position: absolute;
  top: 150px;
  left: 0px;
  width: 130px;
  height: 100px;
  padding:10px;
  margin-bottom:10px;
  border: 2px solid #fff;
  border-radius: 10px;
}

.profile-equipment-list {
  text-align: left;
}

.profile-parameter {
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

.profile-parameter-list {
  text-align: right;
}
</style>

