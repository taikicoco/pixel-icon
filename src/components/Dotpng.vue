<template>
    <canvas id="canvas" width="200" height="200"></canvas>
    <button v-on:click='green'>botton</button>
    <!--<canvas id="canvas2" width="200" height="200"></canvas>
    <button id="download">download</button> -->
    <h2>hello</h2>
    <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
    

    methods: {
        green: function() {  
            const canvas = document.getElementById('canvas');
            const ctx = canvas.getContext('2d');
            ctx.fillStyle = 'green';
            ctx.fillRect(0, 0, 200, 200);
            //alert('koko');
            console.log('green')
        }
    }
    
    // const canvas = document.getElementById('canvas');
    // const ctx = canvas.getContext('2d');
    // ctx.fillStyle = 'green';
    // ctx.fillRect(0, 0, 200, 200);

    // const canvas2 = document.getElementById('canvas2');
    // const ctx2 = canvas2.getContext('2d');
    // ctx2.fillStyle = 'red';
    // ctx2.fillRect(0, 0, 200, 200);


    // document.getElementById("download").onclick = (event) => {
    // let canvas = document.getElementById("canvas");

    // let link = document.createElement("a");
    // link.href = canvas.toDataURL("image/png");
    // link.download = "test.png";
    // link.click();
    //}
};
</script>
<style>
    canvas { border: 1px solid black; }
</style>