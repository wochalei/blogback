<template>

  <div v-if="load" class="H" :style="{backgroundImage: `url(${img})`}">
    <person :say='say' />
    <!-- <div class="dot" @click="move"></div> -->
  </div>

</template>
<script>

import person from "./person";
import load from '../../common/loading/index.vue'
export default {
  name: "H",
  data() {
      return {
          data:{},
          load:true
      }
  },
  components: {
    person,load
  },
  methods: {
    move() {
      window.scrollTo(0, window.innerHeight);
    },
    imgOnload(){
      let img = new Image();
      img.src = this.img;
      img.onload=()=>{
        this.load=true;
      }
    }
  },
  mounted() {
    /* this.imgOnload(); */
  },
  props:['say','img'],


};
</script>
<style lang="scss">
.H {
  display: flex;
  position: relative;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: -999;

  .dot {
    position: relative;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.5);
    transition: all 0.7s;
  }
  .dot::before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: "";
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #74b9ff;
  }
  .dot:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
}
</style>