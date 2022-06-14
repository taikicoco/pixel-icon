<template>
    <canvas id="pixel" width="200" height="200"></canvas>
    <canvas id="pixel2" width="200" height="200"></canvas>
    <canvas v-if="cross_key"  id="pixel3" width="200" height="200"></canvas>
    <br>
    <button v-on:click="download_pixel()" >download</button>
    <button v-on:click="create_pixel()" >create</button>
    <button v-on:click="cross_pixel()" >cross</button>
</template>
<script>
    export default {
        props: {
          
        },

        data() {
            return {
                individual : {},
                new_individual : {},
                size:8,
                cross_key:false
            };
        },
        
        computed: {
            
        },
    
        methods: {
            create_pixel:function() {
                this.create("pixel");
                this.create("pixel2");
            },

            cross_pixel:function() {
                let cross = this.cross(this.individual["pixel"],this.individual["pixel2"]);
                this.create("pixel3",cross);
                this.cross_key == true;
                console.log(this.cross_key);
            },

            download_pixel:function() {
                this.download("pixel");
            },
            
            //create_pixel
            create(id, new_individual = []) {
                const canvas = document.getElementById(id);
                const ctx = canvas.getContext('2d');
                const width = 200;
                //const height  = 200;
                const size = this.size;
                let bit_size = width/size;
                let n = 0;
                let position = [];
                let individual = new_individual;
                console.log(individual)

                if (individual.length == 0) {
                    //個体値の配列をランダムで生成
                    for (let i = 0; i < size*size/2; i++) {
                    individual.push(Math.floor(Math.random()*2));
                    }
                    console.log('if')
                }
                
                this.individual[id] = individual;
                console.log(individual,id)

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
                console.log(new_soluton)
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
    canvas { border: 1px solid black; }
</style>