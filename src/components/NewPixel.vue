<template>
    <canvas id="p1" width="200" height="200"></canvas>
    <p>{{value}}</p>
    
</template>

<script>
    export default {

        props: {
            value: Array,
        },
       
        components: {
          
        },

        data() {
            
        },
    
        methods: {
                window:onload = function() {  
                const canvas2 = document.getElementById('p1');
                const ctx2 = canvas2.getContext('2d');
                ctx2.fillStyle = 'red';
                ctx2.fillRect(0, 0, 200, 200);
                console.log('red')
            }
        }
    };

</script>

<style>
</style>