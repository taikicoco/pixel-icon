<template>
    <div class="border-y-4 border-black-600/100">
        
        <div class="absolute right-0 m-2 ">
            <button class="rounded-lg"
                v-on:click="close()"
            ><img class="h-8 w-8" src="../assets/cross.png" alt="setting"></button>
        </div>

        <div class="flex justify-center">
            <div class="justify-around m-8">
                <div class="flex flex-wrap items-center">
                <canvas id="301" 
                    :width = 'setting_icon.canvas_length' 
                    :height = 'setting_icon.canvas_length' 
                ></canvas>
                <img class="h-10 w-10" src="../assets/forward.png" alt="cross">
                <canvas id="302" 
                    :width = 'setting_icon.canvas_length' 
                    :height = 'setting_icon.canvas_length' 
                ></canvas>
                </div>

                <div class="flex justify-center">
                    <button class="m-1 p-3 w-28 rounded-lg text-xs "
                    v-on:click='create_cross_evolution()'
                    >ガッタイシンカ</button>
                </div>        
            </div>
        </div>
    </div>
</template> 
    
<script>
import {createIcon} from '../create_icon'

    export default {

        props: {
            cross_evolution_data:Array,
            setting_icon:Object,
        },
        
        components: {
        },

        data() {
            return{
                icon_datas:this.cross_evolution_data,
            }
        },
    
        methods: {

            select_cross_evolution(id,icon_data) {
                if(id %2 == 0){
                    id = 301;
                }else {
                    id = 302;
                }
                createIcon(id, this.setting_icon,icon_data)
            },

            close:function() {
                this.$emit('close','cross_evolution')
            },

            create_cross_evolution:function() {
                let cross_evolution_icons_data = [];

                for (let i = 0; i < this.setting_icon.number_of_canvas; i++) {
                    const icon = this.cross(this.icon_datas[0], this.icon_datas[1])
                    cross_evolution_icons_data.push(icon)
                }

                const number_of_evolution = 3;
                for (let j = 0; j < number_of_evolution; j++) {
                    cross_evolution_icons_data[j] = this.evolution(cross_evolution_icons_data[j])
                }
                
                this.$emit('cross_evolution',cross_evolution_icons_data)
            },


            evolution:function(icon) {
                const size = this.setting_icon.pixel_number;
                const point = Math.floor(Math.random()*(size*size/2));
                icon[point] = (icon[point] + 1) % 2
                return icon;
            },


            cross(id1,id2) {
                const size = this.setting_icon.pixel_number;
                const thres = Math.floor(Math.random()*(size*size/2));
                let get_cross_icon = [];
                get_cross_icon.push((id1.slice(0,thres)));
                get_cross_icon.push((id2.slice(thres)));
                get_cross_icon = get_cross_icon.flat();
                
                return get_cross_icon;
            },
        }
    };

</script>
    
<style>
</style>
    