<template>
  <div class="app">
    <Navigation />
    <Home />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import Home from '@/components/Home.vue'
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Home,
    Navigation
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black /*#2c3e50*/;
  /* margin-top: 60px; */
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  /*font-family: "Raleway", sans-serif;
  font-weight: 400;*/
}

.app {
  min-height: 100vh;
  position: relative;
  background-color: white;
}
.container {
  padding: 0 20px;
  max-width: 1140px;
  margin: 0 auto;
}
</style>
