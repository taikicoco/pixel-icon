<template>
  <h1>AI Pixel icon</h1>

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
    >{{cross_btn_word}}</button>

    <button v-if="show_mutation_btn" 
      v-on:click="mutation_modal()" 
      class="button-30" 
      role="button"
    >{{mutation_btn_word}}</button>

    <button v-if="show_new_btn" 
      v-on:click="new_modal()" 
      class="button-30" 
      role="button"
    >{{new_btn_word}}</button>

    <button v-if="show_create_btn" 
      v-on:click="create_pixel()" 
      class="button-30" 
      role="button"
    >アイコン作成！</button>

    <button v-if="show_download_btn" 
      v-on:click="download_modal()" 
      class="button-30" 
      role="button"
    >ダウンロード</button>
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

    <new-pixel v-if="new_show"
    ref="new"
    :new_individual = "new_individual"
    @new = "new_icon"
    ></new-pixel>
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
import CrossPixel  from './components/CrossPixel.vue'
import MutationPixel from './components/MutationPixel.vue'
import NewPixel from './components/NewPixel.vue'

  export default {
    name: 'PagePixel',
    components: {
      CrossPixel,
      MutationPixel,
      NewPixel,
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
          show_new_btn:true,
          show_download_btn:true,
          cross_btn_count:0,
          mutation_btn_count:0,
          new_btn_count:0,
          downlaod_btn_count:0,
          

          //各componentの表示/非表示
          cross_show:false,
          mutation_show:false,
          new_show:false,

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

          //new_action
          new_individual:[],
          select_new_count:0,

          //ボタンの表示文字
          cross_btn_word:"合体!",
          mutation_btn_word:"進化！",
          new_btn_word:"合体進化！",

          



          
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
          this.show_new_btn = false;
          this.show_mutation_btn = false;
          this.show_download_btn = false;
          this.type = 'cross';
          this.cross_btn_word = "戻る";
        }else{
          this.cross_show = false;
          this.show_create_btn = true;
          this.show_new_btn = true;
          this.show_mutation_btn = true;
          this.show_download_btn = true;
          this.type = '';
          this.cross_btn_word = "合体！";
        }
        this.cross_btn_count += 1;
      },

      mutation_modal:function() {
        if(this.mutation_btn_count %2 == 0){
          this.mutation_show = true;
          this.show_create_btn = false;
          this.show_cross_btn = false;
          this.show_new_btn = false;
          this.show_download_btn = false;
          this.type = 'mutation';
          this.mutation_btn_word = "戻る";
        }else{
          this.mutation_show = false;
          this.show_cross_btn = true;
          this.show_create_btn = true;
          this.show_new_btn = true;
          this.show_download_btn = true;
          this.mutation_btn_word = "進化！";
        }
        this.mutation_btn_count += 1;
      },

      new_modal:function() {
        if(this.new_btn_count %2 == 0){
          this.new_show = true;
          this.show_create_btn = false;
          this.show_cross_btn = false;
          this.show_mutation_btn = false;
          this.show_download_btn = false;
          this.type = 'new';
          this.new_btn_word = "戻る";
        }else{
          this.new_show = false;
          this.show_cross_btn = true;
          this.show_create_btn = true;
          this.show_mutation_btn = true;
          this.show_download_btn = true;
          this.new_btn_word = "合体進化！";
        }
        this.new_btn_count += 1;
      },
      download_modal:function() {
        if(this.downlaod_btn_count %2 == 0){
          this.new_show = false;
          this.show_create_btn = false;
          this.show_cross_btn = false;
          this.show_mutation_btn = false;
          this.show_new_btn = false;
          this.type = 'download';
        }else{
          this.show_new_btn = true;
          this.show_cross_btn = true;
          this.show_create_btn = true;
          this.show_mutation_btn = true;
        }
        this.downlaod_btn_count += 1;
      },

      new_icon(icon){
        for(let i = 0; i < this.pixel_value.length; i++) {
          this.create(i,icon[i]);
        }
      },
   
      create_pixel:function() {
        for(let i = 0; i < this.pixel_value.length; i++) {
          this.create(i);
        }
      },
      //create_pixel
      create(id,new_individual = []) {
        const canvas = document.getElementById(id);
        const ctx = canvas.getContext('2d');
        const width = 150;
        //const height  = 200;
        const size = this.size;
        let bit_size = width/size;
        let n = 0;
        let position = [];
        //let individual = [];
        let individual = new_individual;
  

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
        if (this.type == "cross") {
          if (this.select_cross_count %2 == 0) {
            this.cross_individual[0] = this.individual[index];
            this.$refs.cross.create(1,this.cross_individual[0]);
          }else {
            this.cross_individual[1] = this.individual[index];
            this.$refs.cross.create(2,this.cross_individual[1]);
          }
          this.select_cross_count += 1;
        }
        else if (this.type == "mutation") {
          this.mutation_individual[0] = this.individual[index];
          this.$refs.mutation.create(11,this.mutation_individual[0])
        }
        else if (this.type == "new") {
          if (this.select_new_count %2 == 0) {
            this.new_individual[0] = this.individual[index];
            this.$refs.new.create(111,this.new_individual[0])
          }else{
            this.new_individual[1] = this.individual[index];
            this.$refs.new.create(222,this.new_individual[1])
          }
          this.select_new_count += 1;
        }
        else if(this.type == "download") {
          this.download(index);
        }
      },

      download:function(index) {
        let canvas = document.getElementById(index);
        let link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "AI_Pixel_icon.png";
        link.click();
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
