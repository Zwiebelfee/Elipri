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
    <Footer />
  </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'app',
  components: {
    NavBar,
    Footer,
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

#nav {
  padding: 30px;
}

a {
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.flex-wrapper {
  display: flex;
  flex-wrap: wrap;
}

@font-face {
  font-family: 'Pacifico';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Pacifico Regular'), local('Pacifico-Regular'), url(https://fonts.gstatic.com/s/pacifico/v16/FwZY7-Qmy14u9lezJ-6H6Mk.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
</style>
