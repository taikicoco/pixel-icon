<template>
<div class="border-y-4 border-black-600/100">
    <div class="flex flex-wrap justify-around m-8">
        <canvas id="101" 
            :width = 'setting_icon.canvas_length' 
            :height = 'setting_icon.canvas_length' 
        ></canvas>
        <canvas id="102" 
            :width = 'setting_icon.canvas_length' 
            :height = 'setting_icon.canvas_length' 
        ></canvas>
        <canvas id="103" 
            :width = 'setting_icon.canvas_length' 
            :height = 'setting_icon.canvas_length' 
        ></canvas>
        
    </div>

    <button 
        v-on:click="create_cross_icon(101)" 
        class="button-30 cross_action_btn" 
        role="button"
    >合体させるアイコンを2つ選ぶ</button>

</div>
</template>

<script>
import {createIcon} from '../create_icon'

    export default {

        props: {
           cross_individual:Array,
           setting_icon:Object,
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
            create_cross_individual:function() {
                let cross = this.cross(Object.values(this.individual)[0], Object.values(this.individual)[1]);
                this.create(3,cross);
            },

            cross(id1,id2) {
                let size = 8;
                let thres = Math.floor(Math.random()*(size*size/2));
                let new_soluton = [];
                new_soluton.push((id1.slice(0,thres)));
                new_soluton.push((id2.slice(thres)));
                new_soluton = new_soluton.flat();
                return new_soluton;
            },

            create_cross_icon(id,icon) {
                createIcon(id, this.setting_icon,icon)
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
