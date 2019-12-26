<template>
  <div id="app">
    <NavBar />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <div class="body">
      <router-view />
    </div>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'app',
  components: {
    NavBar
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1a1a4c;
}

.body {
  height: 500px;
  background: rgb(225,181,232);
  background: linear-gradient(180deg, rgba(225,181,232,1) 0%, rgba(175,123,218,1) 33%, rgba(135,115,208,1) 66%, rgba(67,63,156,1) 100%);
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
