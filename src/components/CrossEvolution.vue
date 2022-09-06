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
                    v-on:click='select_action("evolution")'
                    >シンカ</button>
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

            create_cross_evolution:function() {
                
            },

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
        }
    };

</script>
    
<style>
</style>
    