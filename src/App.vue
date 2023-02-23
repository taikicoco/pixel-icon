<template>
  <nav class="flex items-center h-24 shadow-md">
    <div class="ml-6">
      <span class="text-xl">Pixel icon</span>
    </div>
    <div class="absolute right-0 mr-6">
      <button class="p-3 rounded-lg"
      v-on:click='show_setting_modal()'
      ><img class="h-8 w-8" src="./assets/settings.png" alt="setting"></button>
    </div>
  </nav>

  <!-- action_btn -->
  <div class="flex flex-wrap justify-center m-5">
    <button class="m-1 p-3 w-28 rounded-lg text-xs"
      v-on:click='select_action("evolution")'
    >シンカ</button>
    <button class="m-1 p-3 w-28 rounded-lg text-xs"
      v-on:click='select_action("cross")'
    >ガッタイ</button>
    <button class="m-1 p-3 w-28 rounded-lg text-xs"
      v-on:click='select_action("cross_evolution")'
    >ガッタイシンカ</button>
  </div>
  <div class="flex flex-wrap justify-center m-5">
    <button class="m-1 p-3 w-28 rounded-lg text-xs"
    v-on:click='show_icon("cross")'
    >ランダム</button>
    <button class="  m-1 p-3 w-28 rounded-lg text-xs"
      v-on:click="is_download()"
    >ダウンロード</button>
  </div>

  <!-- show_action -->
  <cross-Icon v-if="action.cross.show"
    ref="cross"
    :cross_icon_data="cross_icon_data"
    :setting_icon="setting_icon"
    @close = "close"
  ></cross-Icon>

  <evolution-icon v-if="action.evolution.show"
    ref="evolution"
    :evolution_icon_data="evolution_icon_data"
    :setting_icon="setting_icon"
    @close = "close"
  ></evolution-icon>

  <cross-evolution v-if="action.cross_evolution.show"
    ref="cross_evolution"
    :cross_evolution_data="cross_evolution_data"
    :setting_icon="setting_icon"
    @close = "close"
    @cross_evolution = "show_cross_evolution"
  ></cross-evolution>

  <setting-icon v-if="this.setting_icon.show_modal"
    @hide_modal="hide_modal"
    @change_setting="change_setting"
  ></setting-icon>



  <!-- show_cancas -->
  <!-- <div class="flex flex-wrap justify-around m-8 max-w-2xl"> -->
  <div class="flex justify-center">
    <div class="flex flex-wrap justify-around m-8 max-w-2xl">
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
  </div>
  

</template>

<script>
import CrossIcon  from './components/CrossIcon.vue'
import EvolutionIcon from './components/EvolutionIcon.vue'
import CrossEvolution from './components/CrossEvolution.vue'
import SettingIcon from './components/SettingIcon.vue'

import {createIcon} from './create_icon'
import {DownloadIcon} from './create_icon'


export default {
  name: 'App',
  components: {
    CrossIcon,
    EvolutionIcon,
    CrossEvolution,
    SettingIcon,
},

  data() {
    return {
      icons_data: [],
      cross_icon_data:[],
      evolution_icon_data:[],
      cross_evolution_data:[],

      is_btn:{
        cross:false,
        evolution:false,
        cross_evolution:false,
        download:false,
        create:false,
      },

      action:{
        cross:{
          select_count:0,
          show:false,
        },
        evolution:{
          show:false,
        },
        cross_evolution:{
          select_count:0,
          show:false,
        },
      },

      //iconの設定情報
      setting_icon:{
        number_of_canvas:12,
        canvas_length:100,
        pixel_number:8,
        color1:'black',
        color2:'white',

        is_Download:false,
        show_modal:false,
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
      for(let i=1; i<= this.setting_icon.number_of_canvas; i++) {
        let icon = createIcon(i, this.setting_icon);
        this.icons_data[i] = icon;
      }   
    },

    show_cross_evolution(icon_datas) {
      for(let i=1; i<= this.setting_icon.number_of_canvas; i++) {
        let icon = createIcon(i, this.setting_icon,icon_datas[i]);
        this.icons_data[i] = icon;
      }  
    },

    show_setting_modal() {
      this.setting_icon.show_modal=true;
    },
    hide_modal() {
      this.setting_icon.show_modal=false;
    },

    change_setting() {
      this.setting_icon.color1 = 'red';
      this.show_icon();
    },

    select_icon:function(id) {
      if(this.setting_icon.is_Download) {
        return DownloadIcon(id);
      }

      const action = this.action.is_action;
      if(action == "evolution") {
        return this.select_icon_evolution(id);
      }
      if(action == "cross") {
        return this.select_icon_cross(id);
      }
      if(action == "cross_evolution") {
        return this.select_cross_evolution(id);
      }
    },

    select_action:function(action) {
      this.action.is_action = action;
      const is_action = action;
      this.setting_icon.is_Download = false;
      if(is_action == "cross"){
        return this.action.cross.show = true;
      }
      if(action == "evolution"){
        return this.action.evolution.show = true;
      }
      if(action == "cross_evolution"){
        return this.action.cross_evolution.show = true;
      }

    },

    select_icon_cross(id) {
      let cross_count = this.action.cross.select_count %2;
      this.cross_icon_data[cross_count] = this.icons_data[id];
      this.$refs.cross.select_cross_icon(cross_count,this.icons_data[id]);
      this.action.cross.select_count += 1;
    },

    select_icon_evolution(id) {
      this.evolution_icon_data[0] = this.icons_data[id];
      this.$refs.evolution.select_evolution_icon(this.icons_data[id]);
    },

    select_cross_evolution(id) {
      let count = this.action.cross_evolution.select_count %2;
      this.cross_evolution_data[count] = this.icons_data[id];
      this.$refs.cross_evolution.select_cross_evolution(count,this.icons_data[id]);
      this.action.cross_evolution.select_count += 1;
    },

    close(action){
      if(action == "cross"){
        this.action.cross.show = false;
      }
      if(action == "evolution"){
        this.action.evolution.show = false;
      }
      if(action == "cross_evolution"){
        this.action.cross_evolution.show = false;
      }
    },

    is_download(){
      this.setting_icon.is_Download = true;
      console.log(this.setting_icon.is_Download)
    },


    

  },
}
</script>

<style>
  canvas {
    box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,#D6D6E7 0 -3px 0 inset;
    border-radius: 15px;
    margin: 20px;
    cursor: pointer;
    cursor: hand;
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
