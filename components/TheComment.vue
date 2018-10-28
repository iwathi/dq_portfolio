<template>
  <section>
    <div class="comment-list">
      <ul>
        <li>{{commentOne}}</li>
        <li>{{commentTwo}}</li>
      </ul>
    </div>
  </section>
</template>

<script>

export default {
  components: {
  },
  computed: {
    commentOne: function(){
      return this.$store.state.commentOne
    },
    commentTwo: function(){
      return this.$store.state.commentTwo
    }
  }
}
</script>

<style>

.comment-list{
  text-align: center;
  border-radius: 10px;
  position: relative;
  padding: 10px;
  border: 2px solid white;
  height: 50px;
  width: 255px;
}

</style>

