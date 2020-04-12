<template>
<div class="animation-list">
  <div class="wrapper">
    <div v-for="video in animations" :key="video.id" class="video-container">
      <vueVimeoPlayer :video-id='video.id' />
    </div>
  </div>
</div>
</template>

<script>
import Vue from 'vue';
import animations from '../assets/animations.json';

const { vueVimeoPlayer } = require('vue-vimeo-player');

export default Vue.extend({
  name: 'AnimationList',
  components: {
    vueVimeoPlayer,
  },
  data: () => ({
    animations,
  }),
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.animation-list {
  padding: 10px;
  background: rgb(225,181,232);
  background: linear-gradient(
    180deg,
    rgba(225,181,232,1) 0%,
    rgba(175,123,218,1) 33%,
    rgba(135,115,208,1) 66%,
    rgba(67,63,156,1) 100%
  );
}

.wrapper {
  width: 80%;
  margin: auto;
}

.video-container {
  padding: 3px;
  overflow: hidden;
  margin: 35px 0px;
}
</style>
