<template>
<footer>
  <div class="wrapper">
    <h3>Elipri</h3>
    <div>
      impressum impressum impressum impressum impressum impressum impressum impressum impressum impressum 
    </div>
  </div>
</footer>

</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Footer',
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face {
  font-family: 'Pacifico';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Pacifico Regular'), local('Pacifico-Regular'), url(https://fonts.gstatic.com/s/pacifico/v16/FwZY7-Qmy14u9lezJ-6H6Mk.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
footer {
  padding: 40px 0px;
  color: #FFF;
  height: 150px;
  background-color: #433f9c;
}
.wrapper {
  width: 60%;
  margin: 20px auto;
}
h3 {
  font-family: 'Pacifico', cursive;
  text-align: left;
  font-size: 35px;
  margin-bottom: 25px;
  color: #968aff;
}
</style>
