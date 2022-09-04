<template>
    <div class="border-y-4 border-black-600/100">
        <div class="absolute right-0 m-2">
            <button class="rounded-lg"
                v-on:click="close()"
            ><img class="h-8 w-8" src="../assets/cross.png" alt="setting"></button>
        </div>
        <div class="flex flex-wrap items-center justify-around m-8">
            <canvas id="201" 
                :width = 'setting_icon.canvas_length' 
                :height = 'setting_icon.canvas_length' 
            ></canvas>
            <img class="h-10 w-10" src="../assets/forward.png" alt="cross">
            <canvas id="202" 
                :width = 'setting_icon.canvas_length' 
                :height = 'setting_icon.canvas_length' 
            ></canvas>
        </div>
    
        <button 
            v-on:click="create_evolution_icon()" 
            class="button-30 evolution_action_btn" 
            role="button"
        >合体させるアイコンを2つ選ぶ</button>
        
    </div>
</template> 
    
<script>
import {createIcon} from '../create_icon'

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
        }
    };

</script>
    
<style>
</style>
    