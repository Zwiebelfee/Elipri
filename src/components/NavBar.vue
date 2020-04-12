<template>
  <div>
    <router-link to='/'>
      <h1>Elipri</h1>
    </router-link>
    <ul>
      <li>
        <router-link to='/animations'>Animations</router-link>
      </li>
      <li>
        <router-link to='/'>Illustrations</router-link>
      </li>
      <li>
        <router-link to='/about'>About</router-link>
      </li>
      <li>
        <router-link to='/contact'>Contact</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
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

a {
  color: #7c71e3;
}

a:hover {
  color: #56569f;
}

li:hover {
  border-bottom: 1px solid #56569f;
}
</style>
