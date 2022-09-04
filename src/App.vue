<template>
  <nav class="flex items-center h-24 shadow-md">
    <div class="ml-6">
      <span class="text-xl">Pixel icon</span>
    </div>
    <div class="absolute right-0 mr-6">
      <button class="p-3 rounded-lg"><img class="h-8 w-8" src="./assets/settings.png" alt="setting"></button>
    </div>
  </nav>

  <!-- action_btn -->
  <div class="flex flex-wrap justify-center m-5">
    <button class="m-1 p-3 w-28 rounded-lg text-xs">
      シンカ
    </button>
    <button class="m-1 p-3 w-28 rounded-lg text-xs">
        ガッタイ
    </button>
    <button class="m-1 p-3 w-28 rounded-lg text-xs">
        ガッタイシンカ
    </button>
  </div>
  <div class="flex flex-wrap justify-center m-5">
    <button class="m-1 p-3 w-28 rounded-lg text-xs">
        サクセイ
    </button>
    <button class="  m-1 p-3 w-28 rounded-lg text-xs">
        ダウンロード
    </button>
  </div>

  <!-- show_action -->
  <cross-Icon 
    ref="cross"
    :cross_icon_data="cross_icon_data"
    :setting_icon="setting_icon"
  ></cross-Icon>



  <!-- show_cancas -->
  <div class="flex flex-wrap justify-around m-8">
    
    <canvas 
      id = 1
      :width = 'setting_icon.canvas_length'
      :height= 'setting_icon.canvas_length'
      v-on:click='select_icon(1)'
    ></canvas>
    <canvas 
      id = 2
      :width = 'setting_icon.canvas_length'
      :height= 'setting_icon.canvas_length'
      v-on:click='select_icon(2)'
    ></canvas>
    <canvas 
      id = 3
      :width = 'setting_icon.canvas_length'
      :height= 'setting_icon.canvas_length'
      v-on:click='select_icon(3)'
    ></canvas>
    <canvas 
      id = 4
      :width = 'setting_icon.canvas_length'
      :height= 'setting_icon.canvas_length'
      v-on:click='select_icon(4)'
    ></canvas>
    <canvas 
      id = 5
      :width = 'setting_icon.canvas_length'
      :height= 'setting_icon.canvas_length'
      v-on:click='select_icon(5)'
    ></canvas>
    <canvas 
      id = 6
      :width = 'setting_icon.canvas_length'
      :height= 'setting_icon.canvas_length'
      v-on:click='select_icon(6)'
    ></canvas>
    <canvas 
      id = 7
      :width = 'setting_icon.canvas_length'
      :height= 'setting_icon.canvas_length'
      v-on:click='select_icon(7)'
    ></canvas>
    <canvas 
      id = 8
      :width = 'setting_icon.canvas_length'
      :height= 'setting_icon.canvas_length'
      v-on:click='select_icon(8)'
    ></canvas>
    <canvas 
      id = 9
      :width = 'setting_icon.canvas_length'
      :height= 'setting_icon.canvas_length'
      v-on:click='select_icon(9)'
    ></canvas>
    <canvas 
      id = 10
      :width = 'setting_icon.canvas_length'
      :height= 'setting_icon.canvas_length'
      v-on:click='select_icon(10)'
    ></canvas>
    <canvas 
      id = 11
      :width = 'setting_icon.canvas_length'
      :height= 'setting_icon.canvas_length'
      v-on:click='select_icon(11)'
    ></canvas>
    <canvas 
      id = 12
      :width = 'setting_icon.canvas_length'
      :height= 'setting_icon.canvas_length'
      v-on:click='select_icon(12)'
    ></canvas>

  </div>
 

</template>

<script>
import CrossIcon  from './components/CrossIcon.vue'

import {createIcon} from './create_icon'

export default {
  name: 'App',
  components: {
    CrossIcon,
  },

  data() {
    return {
      icons_data: [],
      cross_icon_data:[],

      is_btn:{
        cross:false,
        evolution:false,
        cross_evolutioni:false,
        download:false,
        create:false,
      },

      is_action:{
        cross:{
          select_count:0,
        },
      },

      setting_icon:{
        canvas_length:100,
        pixel_number:8,
        color1:'black',
        color2:'white',
      },
    }
  },

  mounted() {

    window.onload = ()=>{
      this.show_icon();
      setInterval(() => { 
        //console.log(this.canvas_length)
      }, 1000)
    
    }
  },

  methods: {
    show_icon() {
      const number_of_canvas = 12;
      for(let i=1; i<=number_of_canvas; i++) {
        let icon = createIcon(i, this.setting_icon);
        this.icons_data[i] = icon;
      }   
    },

    select_icon:function(id) {
      let cross_count = this.is_action.cross.select_count %2;
      
      this.cross_icon_data[cross_count] = this.icons_data[id];
      this.$refs.cross.select_cross_icon(cross_count,this.icons_data[id]);
      this.is_action.cross.select_count += 1;
    },


    

  },
}
</script>

<style>
  canvas {
    box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,#D6D6E7 0 -3px 0 inset;
    border-radius: 15px;
    margin: 20px;
  }
  button {
    box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,#D6D6E7 0 -3px 0 inset;
  }
  button:focus {
      box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
  }

  button:hover {
      box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
      transform: translateY(-2px);
  }

  button:active {
      box-shadow: #D6D6E7 0 3px 7px inset;
      transform: translateY(2px);
  }
</style>
