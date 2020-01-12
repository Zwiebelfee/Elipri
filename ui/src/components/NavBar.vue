<template>
  <div>
    <h1>Elipri</h1>
    <ul>
      <li>
        <a>Animations</a>
      </li>
      <li>
        <a>Illustrations</a>
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
}
li:hover {
  border-bottom: 1px solid #56569f;
  color: #56569f;
}
</style>
