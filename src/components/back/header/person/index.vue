<template>
  <div class="person">
    <h1 class="person_name">往事随风</h1>
    <div class="person_say"><span class="text" ref="text"></span>
        <!-- 闪烁的光标 -->
       
        <span class="mark"></span></div>
  </div>
</template>
<script>
import {typewriter} from '../../../../utils.js/typewriter'
export default {
  name: "person",
  data() {
      return {
        base:['人生是一种无法抗拒的前进',"人的价值，在遭受诱惑的一瞬间被决定"] 
        
      }
  },
  mounted() {
    let tmp =this.say ? this.say:this.base
    typewriter(this.$refs.text,tmp);
     
  },
  updated() {
    
      
  },

  props:["say"]
};
</script>
<style lang="scss">
.person {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80vh;

  .person_name {
   
    margin-top:-30vh;
    margin-bottom: 20vh;
    font-size: 60px;
  }
  .person_say {
     
   
    font-size: 24px;
    .mark {
    border-right: 2px solid white;
    animation: blink 0.6s step-end infinite;
    } 
  }
  

  @keyframes blink {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: white;
    }
  }
}
</style>