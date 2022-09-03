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


  <!-- show_cancas -->
  <div class="flex flex-wrap justify-around m-8">
    
    <canvas 
      id = 1
      :width = 'canvas_length'
      :height= 'canvas_length'
    ></canvas>
    <canvas 
      id = 2
      :width = 'canvas_length'
      :height= 'canvas_length'
    ></canvas>
    <canvas 
      id = 3
      :width = 'canvas_length'
      :height= 'canvas_length'
    ></canvas>
    <canvas 
      id = 4
      :width = 'canvas_length'
      :height= 'canvas_length'
    ></canvas>
    <canvas 
      id = 5
      :width = 'canvas_length'
      :height= 'canvas_length'
    ></canvas>
    <canvas 
      id = 6
      :width = 'canvas_length'
      :height= 'canvas_length'
    ></canvas>
    <canvas 
      id = 7
      :width = 'canvas_length'
      :height= 'canvas_length'
    ></canvas>
    <canvas 
      id = 8
      :width = 'canvas_length'
      :height= 'canvas_length'
    ></canvas>
    <canvas 
      id = 9
      :width = 'canvas_length'
      :height= 'canvas_length'
    ></canvas>
    <canvas 
      id = 10
      :width = 'canvas_length'
      :height= 'canvas_length'
    ></canvas>
    <canvas 
      id = 11
      :width = 'canvas_length'
      :height= 'canvas_length'
    ></canvas>
    <canvas 
      id = 12
      :width = 'canvas_length'
      :height= 'canvas_length'
    ></canvas>

  </div>
 

  
</template>

<script>
import {createIcon} from './create_icon'

export default {
  name: 'App',
  components: {
    
  },

  data() {
    return {
      canvas_length:150,

      btn:{

      },
    }
  },

  mounted() {
    window.onload = ()=>{
      this.show_icon();
      setInterval(() => { 
        this.get_window_width();
        console.log(this.canvas_length)
        
      }, 1000)
    
    }
  },

  methods: {
    show_icon() {
      for(let i=0; i<4; i++) {
        createIcon(i, this.canvas_length);
      }   
    },

    //window_sizeを取得
    //window_sizeに応じてcanvas_sizeを変更
    get_window_width() {
      let page_width = window.innerWidth;
      console.log(page_width);
      if(page_width >= 1024) {
        this.canvas_length = 150;
      }else if(page_width >= 768) {
        this.canvas_length = 120;
      }else if(page_width >= 640){
        this.canvas_length = 100;
      }else {
        this.canvas_length = 100;
      }
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
