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
        v-on:click="create_cross_icon()" 
        class="button-30 cross_action_btn" 
        role="button"
    >合体させるアイコンを2つ選ぶ</button>

</div>
</template>

<script>
import {createIcon} from '../create_icon'

    export default {

        props: {
           cross_icon_data:Array,
           setting_icon:Object,
        },
       
        components: {
        },

        data() {
            return{
                icon_datas:this.cross_icon_data,
            }
        },
    
        methods: {
            create_cross_icon:function() {
                let icon_data = this.cross(Object.values(this.icon_datas)[0], Object.values(this.icon_datas)[1]);
                createIcon(103, this.setting_icon,icon_data);
            },

            cross(id1,id2) {
                const size = this.setting_icon.pixel_number;
                let thres = Math.floor(Math.random()*(size*size/2));
                let get_cross_icon = [];
                get_cross_icon.push((id1.slice(0,thres)));
                get_cross_icon.push((id2.slice(thres)));
                get_cross_icon = get_cross_icon.flat();
                return get_cross_icon;
            },

            select_cross_icon(id,icon_data) {
                if(id %2 == 0){
                    id = 101;
                }else {
                    id = 102;
                }
                createIcon(id, this.setting_icon,icon_data)
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
