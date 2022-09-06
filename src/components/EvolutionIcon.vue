<template>
    <div class="border-y-4 border-black-600/100">
        <div class="absolute right-0 m-2">
            <button class="rounded-lg"
                v-on:click="close()"
            ><img class="h-8 w-8" src="../assets/cross.png" alt="setting"></button>
        </div>

        <div class="flex justify-center">
            <div class="justify-around m-8">
                <div class="flex flex-wrap items-center">
                <canvas id="201" 
                    :width = 'setting_icon.canvas_length' 
                    :height = 'setting_icon.canvas_length' 
                ></canvas>
                <img class="h-10 w-10" src="../assets/forward.png" alt="cross">
                <canvas id="202" 
                    :width = 'setting_icon.canvas_length' 
                    :height = 'setting_icon.canvas_length' 
                    v-on:click='select_icon(202)'
                ></canvas>
                </div>
                <div class="flex justify-center">
                    <button class="m-1 p-3 w-28 rounded-lg text-xs "
                    v-on:click='create_evolution_icon("evolution")'
                    >シンカ</button>
                </div>        
            </div>
        </div>
    </div>
</template> 
    
<script>
import {createIcon} from '../create_icon'
import {DownloadIcon} from '../create_icon'

    export default {

        props: {
            evolution_icon_data:Array,
            setting_icon:Object,
        },
        
        components: {
        },

        data() {
            return{
                icon_datas:this.evolution_icon_data,
            }
        },
    
        methods: {

            create_evolution_icon:function() {
                const size = this.setting_icon.pixel_number;
                const point = Math.floor(Math.random()*(size*size/2));
                const icon = this.evolution_icon_data[0]
                icon[point] = (icon[point] + 1) % 2
                createIcon(202,this.setting_icon,icon)  
            },

            select_evolution_icon(icon_data) {
                createIcon(201, this.setting_icon,icon_data)
            },

            close:function() {
                this.$emit('close','evolution')
            },

            select_icon(id) {
                if(this.setting_icon.is_Download) {
                    DownloadIcon(id)
                }
            }
        }
    };

</script>
    
<style>
</style>
    