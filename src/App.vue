<template>
  <h2>AI Pixel icon</h2>
  <br>
  <create-pixel 
    :pixel_value="pixel_value"
  ></create-pixel>
</template>

<script>

import CreatePixel from './components/CreatePixel.vue'

  export default {
    name: 'App',
    components: {
      CreatePixel,
    },
    data() {
      return {
          pixel_value:[0,1,2,3,4,5,6,7,8,9,10,11],
      }
    },

    methods: {

      window:onload = function() {  
      },

      create_pixel:function() {
      },

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
