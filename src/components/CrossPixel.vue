<template>
    <div>
        <canvas id="1" width="200" height="200"></canvas>
        <canvas id="2" width="200" height="200"></canvas>
    </div>

    <canvas 
        id="3" width="200" height="200"
    ></canvas>
    <br>

    <button 
        v-on:click="create_cross_modal()" 
        class="button-30 cross_action_btn" 
        role="button"
    >Create Cross Individual</button>

</template>

<script>
    export default {

        props: {
           cross_individual:Array,
        },
       
        components: {
          
        },

        data() {
            return{
                individual:this.cross_individual,
                show_cross_acrion_btn:false,
                show_create_cross:false,
            }
        },
    
        methods: {

            show_cross_acrion_modal(){
                this.show_cross_acrion_btn = true;
            },

            create_cross_modal() {
                this.show_create_cross = true;
                this.show_cross_acrion_btn = false;
                console.log(Object.values(this.individual)[0])
                this.cross_pixel();
            },
          

            create(id,new_individual) {
                const canvas = document.getElementById(id);
                const ctx = canvas.getContext('2d');
                const width = 200;
                //const height  = 200;
                const size = 8;
                let bit_size = width/size;
                let n = 0;
                let position = [];
                let individual = new_individual;
                console.log(individual,'in')
        

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
                let size = 8;
                console.log(size)
                let thres = Math.floor(Math.random()*(size*size/2));
                let new_soluton = [];
                new_soluton.push((id1.slice(0,thres)));
                new_soluton.push((id2.slice(thres)));
                new_soluton = new_soluton.flat();
                console.log(new_soluton,'new')
                return new_soluton;
            },

            cross_pixel:function() {
                let cross = this.cross(Object.values(this.individual)[0], Object.values(this.individual)[1]);
                console.log(cross,'sss')
                this.create(3,cross);
            },


        }
    };

</script>

<style>

    .cross_action_btn {
        margin: 30px;
        width: 300px;
    }
</style>
