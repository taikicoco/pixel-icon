<template>
  <h2>AI Pixel Art</h2>
  <button v-on:click="create_pixel()">create_pixel</button>
  <br>
  <template v-if="show">
    <CreatePixel :pixel_value="pixel_value"></CreatePixel>
  </template>
  
  

  
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
          pixel_value:[],
          show:false
      }
    },

    methods: {
      create_pixel:function() {
        this.show = true;
        if(this.pixel_value.length < 15) {
          for (let i = 0; i < 15; i++) {
          this.pixel_value.push(i)
        }
        }
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
