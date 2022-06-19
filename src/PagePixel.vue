<template>
  <h2>AI Pixel icon</h2>

  <div>
    <button v-if="show_start_btn"
    v-on:click="show_btns_modal()" 
    class="button-30" role="button"
    >START
    </button>
  </div>

  <div v-if="show_btns">
    <button v-if="show_cross_btn" 
      v-on:click="cross_modal()" 
      class="button-30" 
      role="button"
    >Cross</button>

    <button v-if="show_create_btn" 
      v-on:click="create_pixel()" 
      class="button-30" 
      role="button"
    >Create</button>

    <button v-if="show_mutation_btn" 
      v-on:click="mutation_modal()" 
      class="button-30" 
      role="button"
    >Mutation</button>

    <button v-if="show_evolution_btn" 
      v-on:click="create_pixel()" 
      class="button-30" 
      role="button"
    >evolution</button>
  </div>

  <div>
    <cross-pixel v-if="cross_show" 
    ref="cross"
    :cross_individual="cross_individual"
    ></cross-pixel>

    <mutation-pixel v-if="mutation_show"
    ref="mutation"
    :mutation_individual="mutation_individual"
    ></mutation-pixel>
  </div>
  


  <canvas v-for="(key, index) in pixel_value"
    :key = "key"
    :id = "index"
    width="150" 
    height="150"
    v-on:click='select_individual(index)'
  ></canvas>

 

</template>

<script>

//import CreatePixel from './components/CreatePixel.vue'
import CrossPixel  from './components/CrossPixel.vue'
import MutationPixel from './components/MutationPixel.vue'


  export default {
    name: 'PagePixel',
    components: {
      //CreatePixel,
      CrossPixel,
      MutationPixel,
    },

    data() {
      return {
          pixel_value:[0,1,2,3,4,5,6,7,8,9,10,11],
          show_start_btn:true,
          show_btns:false,

          //各actionボタンの表示/非表示
          show_create_btn:true,
          show_cross_btn:true,
          show_mutation_btn:true,
          show_evolution_btn:true,
          cross_btn_count:0,

          //各componentの表示/非表示
          cross_show:false,
          mutation_show:false,

          //現状の表示タイプ
          type:"",

          //create_action
          individual : {},
          size:8,
          select_cross_individual:0,

          //cross_action
          cross_individual: [],
          select_cross_count:0,

          //mutation_action
          mutation_individual: [],
          select_mutation_count:0,

          
      }
    },

    mounted() {
      window.onload = ()=>{
        this.create_pixel();
        // setInterval(() => { 
        //     console.log('t') 
        //     this.create_pixel();
        // }, 1000)
      }
    },

    methods: {

      show_btns_modal:function() {
        this.show_btns = true;
        this.show_start_btn = false;
      },

      cross_modal:function() {
        if(this.cross_btn_count%2 == 0){
          this.cross_show = true;
          this.show_create_btn = false;
          this.show_evolution_btn = false;
          this.show_mutation_btn = false;
          this.type = 'cross';
        }else{
          this.cross_show = false;
          this.show_create_btn = true;
          this.show_evolution_btn = true;
          this.show_mutation_btn = true;
          this.type = '';
        }
        this.cross_btn_count += 1;
      },

      mutation_modal:function() {
        if(this.select_mutation_count %2 == 0){
          this.mutation_show = true;
          this.show_create_btn = false;
          this.show_evolution_btn = false;
          this.show_cross_btn = false;
          this.show_mutation_btn = true;
          this.type = 'mutation';
        }else{
          this.mutation_show = false;
          this.show_cross_btn = true;
          this.show_create_btn = true;
          this.show_evolution_btn = true;
          this.show_mutation_btn = true;
        }
        this.select_mutation_count += 1;
      },
   
      create_pixel:function() {
        for(let i = 0; i < this.pixel_value.length; i++) {
          this.create(i);
        }
      },
      //create_pixel
      create(id) {
        const canvas = document.getElementById(id);
        const ctx = canvas.getContext('2d');
        const width = 150;
        //const height  = 200;
        const size = this.size;
        let bit_size = width/size;
        let n = 0;
        let position = [];
        let individual = [];
  

        if (individual.length == 0) {
          //個体値の配列をランダムで生成
          for (let i = 0; i < size*size/2; i++) {
          individual.push(Math.floor(Math.random()*2));
          }
        }
        this.individual[id] = individual;

        //canvasをグリットに区切るための配列
        for (let i = 0; i < size; i++) {
          position.push(n);
          n = n + bit_size;
        }

        //ベースとなる色を塗る
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, width, width);

        //左右対称にするための配列
        let individual_s = [];
        let individual_r = [];
        //区切ったグリットの色を削除
        let i = 0;
        for (let j = 0; j < size; j++) {
          let v = [];
          for (let k = 0; k < size/2; k++) {
            v[k] = individual[i];
            if (individual[i] == 0) {
              ctx.fillStyle = 'white';
              ctx.clearRect(position[k], position[j], bit_size, bit_size);
            }
            i += 1;
          }
          individual_s.push(v);
          individual_r.push(v.reverse()); 
        }

        //右側の絵を左右対称に作成
        individual_r = individual_r.flat(2)
        i = 0;
        for (let j = 0; j < size; j++) {
          for (let k = size/2; k < size; k++) {
            if (individual_r[i] == 0) {
              ctx.clearRect(position[k], position[j], bit_size, bit_size);
            }
            i += 1;
          }
        }

      },

      select_individual:function(index) {
        console.log(this.type)
        if (this.type == "cross") {
          if (this.select_cross_count %2 == 0) {
            this.cross_individual[0] = this.individual[index];
            this.$refs.cross.create(1,this.cross_individual[0]);
          }else {
            this.cross_individual[1] = this.individual[index];
            this.$refs.cross.create(2,this.cross_individual[1]);
          }
          this.select_cross_count += 1
        }

        else if (this.type == "mutation") {
          this.mutation_individual[0] = this.individual[index];
          this.$refs.mutation.create(11,this.mutation_individual[0])
        }


      },

    }
  }
</script>

<style>
#page_pixel {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
