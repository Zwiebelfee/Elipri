<template>
<div class="artlist">
  <div class="flex-wrapper">
    <div v-for="photo in gallery" :key="photo.id" class="img-container">
      <img :src="'https://drive.google.com/uc?export=view&id=' + photo.id" height="300px" />
    </div>
  </div>
</div>

</template>

<script>
import Vue from 'vue';
import gallery from '../assets/gallery.json';

export default Vue.extend({
  name: 'ArtList',
  data: () => ({
    gallery,
  }),
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.artlist {
  background: rgb(225,181,232);
  background: linear-gradient(180deg, rgba(225,181,232,1) 0%, rgba(175,123,218,1) 33%, rgba(135,115,208,1) 66%, rgba(67,63,156,1) 100%);
}

.flex-wrapper {
  width: 80%;
  justify-content: space-between;
  margin: auto;
}

.img-container {
  max-width: 1200px;
  padding: 3px;
  background-color: #FFF;
  overflow: hidden;
  margin: 15px;
}
</style>
