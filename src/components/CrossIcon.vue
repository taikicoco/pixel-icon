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
            <canvas id="101" 
                :width = 'setting_icon.canvas_length' 
                :height = 'setting_icon.canvas_length' 
            ></canvas>
            <img class="h-10 w-10" src="../assets/add.png" alt="cross">
            <canvas id="102" 
                :width = 'setting_icon.canvas_length' 
                :height = 'setting_icon.canvas_length' 
            ></canvas>
            <img class="h-10 w-10" src="../assets/forward.png" alt="cross">
            <canvas id="103" 
                :width = 'setting_icon.canvas_length' 
                :height = 'setting_icon.canvas_length' 
                v-on:click='select_icon(103)'
            ></canvas>
            </div>

            <div class="flex justify-center">
                <button class="m-1 p-3 w-28 rounded-lg text-xs "
                v-on:click="create_cross_icon()" 
                >ガッタイ</button>
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

            close:function() {
                this.$emit('close','cross')
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
