<template>
    <div class="search_tip">
        <div class="search_t"><i class="iconfont icon-sousuo"></i><span>搜索</span></div>
        <input @keydown.enter="search" type="text" placeholder="请输入搜索词" v-model="text">
    </div>
</template>
<script>
import {eventBus} from '../../../../../utils.js/bus'
export default {
    data() {
        return {
            text:''
        }
    },
    methods: {
        search(){
           if(this.text!='')
           eventBus.$emit('title',this.text);
           this.text='';
           this.$emit('change',false);
           window.scrollTo(0, window.innerHeight);
        }
    },
}
</script>
<style lang="scss">
    .search_tip{
        position: absolute;
        left: 50%;
        top: 64px;
        transform: translateX(-50%);
        width: 55%;
        height: 400px;
        background-color: #fafafa;
        padding: 30px;
        margin: 0 auto;
      .search_t,i{
         font-size: 24px;
         color: #333333;
      }
      input{
          font-size: 20px;
          margin-top: 20px;
          width: 100%;
          height: 42px;
          color: #34495e;
          text-indent: 5px;
          background-color: transparent;
          border-bottom: 3px #34495e solid;
      }
      input:focus{ 
          border-bottom: 3px teal solid;
      }
    }
</style>