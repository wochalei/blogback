<template>
    <div class="end_index">
        <button :class="{display:true,tab:actived}" @click="hidden">|||</button>
        <div :class="{l:true,tab_active:actived}">
         <div class="left">
           <leftuser></leftuser>
           <leftfunction/>
         </div>
        </div>
        <div class="r">
            <router-view></router-view>
          <!-- <div class="right"></div> -->
        </div>
    </div>
</template>
<script>
import leftuser from './left/left_user.vue'
import leftfunction from './left/function/index.vue'
export default {
    name:"end_index",
    data() {
        return {
            actived:false,
            
        }
    },
    methods: {
        hidden(){
            this.actived=!this.actived;
            
        }
    },
    components:{
        leftuser,
        leftfunction
    }
}
</script>
<style lang="scss">
   
    .display{
        position: absolute;
        left: 150px;
        transform: rotate(180deg);
        cursor: pointer;
        z-index: 66;
        transition: all 0.7s;
    }
    .tab{
        left: 0px;
    }
     button{
         padding: 6px 12px;
         cursor: pointer;
         border-radius: 4px;
         }
         button:hover{
            background-color: #7777;
            color: white;
            
         }
        
    .end_index{
         display: flex; 
         width: 100vw;
         height: 100vh;
         background-color: #7777;
       .l{ 
           
           width: 200px;
           height: 100%;
           overflow: hidden;
           border-right: 1px solid rgba(255, 255, 255,0.3);
           transition: all 0.7s;
           
           .left{
               
               width: calc(200px + 20px);
               height: 100%;
               padding-right:20px ;
               overflow: auto;
           }
       }
       .tab_active{
             width: 0px;
         }
       .r{
           flex: 1;
           height: 100%;
           overflow: auto;
           background-color: white;
           /* .right{
               width: calc(100% + 20px);
               height: 100%;
               padding-right:20px ;
               overflow: auto;
                background-color:white;
           } */
       }  
    }
</style>