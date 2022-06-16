<template>
    
    <button v-if="show_c" 
        v-on:click="create_pixel(),show()" 
        class="button-30" role="button"
        >Create
    </button>

    <div v-if="show_b">
        <div>

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

            <button v-if="show_evolution_btn" 
                v-on:click="create_pixel()" 
                class="button-30" 
                role="button"
            >evolution</button>
        </div>

        <cross-pixel v-if="cross_show" 
            ref="hoge"
            :cross_individual="cross_individual"
        ></cross-pixel>

    </div>

    

    

    <!-- <button v-on:click="create_pixel()" 
    class="button-30" role="button"
    >Dowunload</button> -->

   
    <div>
        <canvas v-for="(key, i) in pixel_value"
        :key = "key"
        :id = "i"
        width="150" 
        height="150"
        v-on:click='select_cross_individual(i)'
        ></canvas>
    </div>
    
    
</template>
<script>
import CrossPixel  from './CrossPixel.vue'

    export default {
        components:{
            CrossPixel
        },
    
        props: {
            pixel_value:Array,
        },
        
        data() {
            return {
                individual : {},
                new_individual : {},
                cross_individual:[],
                size:8,
                cross_key:true,
                pixel : [],
                button:false,
                show_b:false,
                show_c:true,
                cross_show:false,
                cross_cunt:1,
                cross_cunt_c:0,
                show_create_btn:true,
                show_cross_btn:true,
                show_evolution_btn:true,
            };
        },
        
        computed: {
            
        },

        methods: {

            create_pixel:function() {
                for(let i = 0; i < this.pixel_value.length; i++) {
                    this.push(i);
                }
            },
            push(i) {
                this.create(i);
            },

            select_cross_individual:function(i) {
                if (this.cross_cunt_c%2 == 0){
                    this.cross_individual[0] = this.individual[i]
                    this.$refs.hoge.create(1,this.cross_individual[0]);
                }else{
                    this.cross_individual[1] = this.individual[i]
                    this.$refs.hoge.create(2,this.cross_individual[1]);
                    this.$refs.hoge.show_cross_acrion_modal()
                }  
                this.cross_cunt_c += 1
            },

            show: function() {
                this.show_b = true;
                this.show_c = false;
            },
            cross_modal:function() {
                if(this.cross_cunt%2 == 1){
                    this.cross_show = true;
                    this.show_create_btn = false;
                    this.show_evolution_btn = false;
                }else{
                    this.cross_show = false;
                    this.show_create_btn = true;
                    this.show_evolution_btn = true;
                }

                this.cross_cunt += 1;
                
            },

            cross_pixel:function() {
                this.cross_key == true;
                let cross = this.cross(this.individual["pixel"],this.individual["pixel2"]);
                this.create("pixel3",cross);
            },

            download_pixel:function() {
                this.download("pixel");
            },

         
            
            //create_pixel
            create(id, new_individual = []) {
                const canvas = document.getElementById(id);
                const ctx = canvas.getContext('2d');
                const width = 150;
                //const height  = 200;
                const size = this.size;
                let bit_size = width/size;
                let n = 0;
                let position = [];
                let individual = new_individual;
        

                if (individual.length == 0) {
                    //個体値の配列をランダムで生成
                    for (let i = 0; i < size*size/2; i++) {
                    individual.push(Math.floor(Math.random()*2));
                    }
                }
                
                console.log(individual,'T')
                this.individual[id] = individual;

                //canvasをグリットに区切るための配列
                for (let i = 0; i < size; i++) {
                    position.push(n);
                    n = n + bit_size;
                }

                //ベースとなる色を塗る
                ctx.fillStyle = 'black';
                ctx.fillRect(0, 0, 200, 200);

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

            cross(id1,id2) {
                let size = this.size;
                let thres = Math.floor(Math.random()*(size*size/2));
                let new_soluton = [];
                new_soluton.push((id1.slice(0,thres)));
                new_soluton.push((id2.slice(thres)));
                new_soluton = new_soluton.flat();
                return new_soluton;
            },

            download(id) {
                let canvas = document.getElementById(id);
                let link = document.createElement("a");
                link.href = canvas.toDataURL("image/png");
                link.download = "pixel.png";
                link.click();
            }
        }
    };
</script>

<style>
    canvas { 
        margin: 40px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
        border-radius: 15px;
     }

    button {
        margin: 30px;
        width: 150px;
    }

     /* CSS */
    .button-30 {
        align-items: center;
        appearance: none;
        background-color: #FCFCFD;
        border-radius: 4px;
        border-width: 0;
        box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,#D6D6E7 0 -3px 0 inset;
        box-sizing: border-box;
        color: #36395A;
        cursor: pointer;
        display: inline-flex;
        font-family: "JetBrains Mono",monospace;
        height: 48px;
        justify-content: center;
        line-height: 1;
        list-style: none;
        overflow: hidden;
        padding-left: 16px;
        padding-right: 16px;
        position: relative;
        text-align: left;
        text-decoration: none;
        transition: box-shadow .15s,transform .15s;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        white-space: nowrap;
        will-change: box-shadow,transform;
        font-size: 18px;
    }

    .button-30:focus {
        box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
    }

    .button-30:hover {
        box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
        transform: translateY(-2px);
    }

    .button-30:active {
        box-shadow: #D6D6E7 0 3px 7px inset;
        transform: translateY(2px);
    }
</style>

