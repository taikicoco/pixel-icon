<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Vue.js "/>
  <Dotpng></Dotpng>
  <Dotred></Dotred>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Dotpng from './components/Dotpng.vue'
import Dotred from './components/Dotred.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    Dotpng,
    Dotred
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
