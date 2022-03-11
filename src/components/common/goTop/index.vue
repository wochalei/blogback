<template>
    <div :class="{goTop:true,goTop_active:active}" @click="goback">
          👆
    </div>
</template>
<script>
export default {
    data() {
        return {
            active:false
        }
    },
    methods: {
        goback(){
            window.scrollTo(0,0);
        }
    },
    mounted() {
        window.addEventListener('scroll',()=>{
            if(window.pageYOffset>=window.innerHeight){
              this.active=true;
            }else{
                this.active=false;
            }
        })
        
    },
}
</script>
<style lang="scss">
    .goTop{
        position:fixed;
        bottom: -50px;
        right: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        color: tan;
        background-color: tomato;
        cursor: pointer;
        opacity: 0.5;
        transition: all 0.7s;
    }
    .goTop_active{
        bottom: 0px;
    }
</style>