<template>
  <div>
    <h1>Elipri</h1>
    <ul>
      <li>
        <a>Illustrations</a>
      </li>
      <li>
        <a>Animations</a>
      </li>
      <li>
        <a>About</a>
      </li>
      <li>
        <a>Contact</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'NavBar',
  props: {
    msg: String,
  },
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
h1 {
  font-family: 'Pacifico', cursive;
  font-size: 45px;
  margin: 0;
  color: #7c71e3;
}
div {
  height: 160px;
  background: rgb(255,255,255);
  background: linear-gradient(180deg, rgba(255,255,255,1) 50%, rgba(225,181,232,1) 100%);
}
/* ul {
  list-style-type: none;
  padding: 0;
} */
li {
  display: inline-block;
  margin: 0 20px;
  color: #7c71e3;
  height: 30px;
  font-weight: 540;
}
li:hover {
  border-bottom: 1px solid #56569f;
  color: #56569f;
}
</style>
