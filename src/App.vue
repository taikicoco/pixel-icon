<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Vue.js "/>
  <CreatePixel></CreatePixel>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CreatePixel from './components/CreatePixel.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    CreatePixel,
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
