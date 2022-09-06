<template>
    <div class="overlay" @click.self="hide()" id="overlay">
        <div class="flex justify-center bg-red-400 w-24 h-24">
            <button class="m-1 p-3 w-28 rounded-lg text-xs "
            v-on:click='change_setting()'
            >RED</button>
        </div>     
    </div>
  </template>
  
  <script>
  export default {
    props: {
      option: Object,
    },
    methods: {
      hide() {
        this.$emit("hide_modal");
      },
      change_setting() {
        this.$emit("change_setting");
        this.hide();
      },
    },
  };
  </script>
  
<style>
img {
    width: 25%;
    height: 25%;
    align-items: center;
    justify-content: center;
}
#overlay {
    /* 要素を重ねた時の順番 */
    z-index:1;

    /* 画面全体を覆う設定 */
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,0.5);

    /* 画面の中央に要素を表示させる設定 */
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
