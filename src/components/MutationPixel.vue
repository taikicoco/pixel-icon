<template>
    <div>
        <canvas id="11" width="150" height="150" class="cross_canvas"></canvas>
        <canvas id="22" width="150" height="150" class="cross_canvas"></canvas>
    </div>

    <button 
        v-on:click="create_mutation_individual()" 
        class="button-30 cross_action_btn" 
        role="button"
    >進化させるアイコンを選ぶ</button>

</template>

<script>
    export default {

        props: {
           mutation_individual:Array,
        },
       
        components: {
        },

        data() {
            return{
                individual:this.cross_individual,
                size:8,
            }
        },
    
        methods: {

            create_mutation_individual:function() {
                let size = this.size;
                let mut = Math.floor(Math.random()*(size*size/2));
                let new_individual = this.mutation_individual[0]
                new_individual[mut] = (new_individual[mut] + 1) % 2
                this.create(22,new_individual)
            },     

            create(id,new_individual) {
                const canvas = document.getElementById(id);
                const ctx = canvas.getContext('2d');
                const width = 150;
                //const height  = 200;
                const size = 8;
                let bit_size = width/size;
                let n = 0;
                let position = [];
                let individual = new_individual;

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
        }
    };

</script>

<style>
    .cross_canvas { 
        margin: 20px;
    }

    .cross_action_btn {
        margin: 10px;
        width: 300px;
    }
</style>
